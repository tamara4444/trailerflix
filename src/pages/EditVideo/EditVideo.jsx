import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import VideoForm from '../../components/VideoForm/VideoForm';
import axios from 'axios';
import { API_URL } from '../../config/api';

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
    const loadVideo = () => {
      try {
        console.log('Cargando video con ID:', id);
        const videos = JSON.parse(localStorage.getItem('videos') || '[]');
        const foundVideo = videos.find(v => v.id === id);
        
        if (foundVideo) {
          console.log('Video encontrado:', foundVideo);
          setVideo(foundVideo);
        } else {
          console.log('Video no encontrado para ID:', id);
          setError('No se encontró el video');
        }
      } catch (err) {
        console.error('Error al cargar el video:', err);
        setError('Error al cargar el video');
      } finally {
        setLoading(false);
      }
    };

    loadVideo();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      console.log('Actualizando video con datos:', formData);
      
      // Actualizar en la API primero
      const videoToUpdate = {
        ...formData,
        id,
        updatedAt: new Date().toISOString()
      };
      
      await axios.put(`${API_URL}/${id}`, videoToUpdate);
      console.log('Video actualizado exitosamente en la API');
      
      // Actualizar en localStorage después de éxito en la API
      const videos = JSON.parse(localStorage.getItem('videos') || '[]');
      const updatedVideos = videos.map(v => 
        v.id === id ? videoToUpdate : v
      );
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      
      // Esperar un momento antes de redirigir
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Video actualizado exitosamente');
      navigate('/', { state: { refresh: Date.now() } });
    } catch (err) {
      console.error('Error al actualizar el video:', err);
      setError('Error al guardar los cambios. Por favor, intenta de nuevo.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <EditContainer>
        <LoadingMessage>Cargando video...</LoadingMessage>
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
        <ErrorMessage>No se encontró el video</ErrorMessage>
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
