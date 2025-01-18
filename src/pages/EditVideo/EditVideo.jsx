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

function EditVideo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // Aquí deberías hacer la llamada a tu API para obtener los detalles del video
        // Por ahora usaremos localStorage como ejemplo
        const videos = JSON.parse(localStorage.getItem('videos') || '[]');
        const videoData = videos.find(v => v.id === id);
        
        if (videoData) {
          setVideo(videoData);
        } else {
          setError('Video no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el video');
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      // Aquí deberías hacer la llamada a tu API para actualizar el video
      // Por ahora actualizaremos en localStorage
      const videos = JSON.parse(localStorage.getItem('videos') || '[]');
      const updatedVideos = videos.map(v => 
        v.id === id ? { ...v, ...formData } : v
      );
      
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      navigate('/');
    } catch (err) {
      setError('Error al actualizar el video');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
