import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import VideoForm from '../../components/VideoForm/VideoForm';

const EditContainer = styled.div`
  padding: 2rem;
  margin-top: 80px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

const LoadingMessage = styled.div`
  color: #fff;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

function EditVideo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = () => {
      try {
        console.log('Buscando video con ID:', id); // Para debugging
        const videos = JSON.parse(localStorage.getItem('videos') || '[]');
        const videoData = videos.find(v => v.id === id);
        
        if (videoData) {
          console.log('Video encontrado:', videoData); // Para debugging
          setVideo(videoData);
        } else {
          console.log('Video no encontrado'); // Para debugging
          setError('Video no encontrado');
        }
      } catch (err) {
        console.error('Error al cargar el video:', err); // Para debugging
        setError('Error al cargar el video');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVideo();
    }
  }, [id]);

  const handleSubmit = (formData) => {
    try {
      console.log('Actualizando video:', formData); // Para debugging
      const videos = JSON.parse(localStorage.getItem('videos') || '[]');
      const updatedVideos = videos.map(v => 
        v.id === id ? { ...v, ...formData } : v
      );
      
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      navigate('/');
    } catch (err) {
      console.error('Error al actualizar el video:', err); // Para debugging
      setError('Error al actualizar el video');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <EditContainer>
        <LoadingMessage>Cargando...</LoadingMessage>
      </EditContainer>
    );
  }

  if (error) {
    return (
      <EditContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </EditContainer>
    );
  }

  if (!video) {
    return (
      <EditContainer>
        <ErrorMessage>Video no encontrado</ErrorMessage>
      </EditContainer>
    );
  }

  return (
    <EditContainer>
      <Title>Editar Video</Title>
      <VideoForm 
        video={video}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </EditContainer>
  );
}

export default EditVideo;
