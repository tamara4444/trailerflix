import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoInfo = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Category = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(155, 109, 255, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.edit {
    background: #9b6dff;
    color: white;
    &:hover {
      background: #8257e6;
    }
  }

  &.delete {
    background: transparent;
    border: 1px solid #ff6b6b;
    color: #ff6b6b;
    &:hover {
      background: rgba(255, 107, 107, 0.1);
    }
  }
`;

function Preview({ video, onDelete }) {
  const navigate = useNavigate();
  const { id, title, description, url, category } = video;

  const handleEdit = () => {
    console.log('Editando video con ID:', id); // Para debugging
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este video?')) {
      onDelete(id);
    }
  };

  // Función para extraer el ID del video de YouTube de una URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Generar la URL de la miniatura de YouTube
  const videoId = getYouTubeVideoId(url);
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : 'https://via.placeholder.com/640x360?text=Video+no+disponible';

  return (
    <PreviewContainer>
      <VideoThumbnail>
        <ThumbnailImage src={thumbnailUrl} alt={title} />
        <Category>{category}</Category>
      </VideoThumbnail>
      <VideoInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonsContainer>
          <Button className="edit" onClick={handleEdit}>
            <span role="img" aria-label="edit">✏️</span>
            Editar
          </Button>
          <Button className="delete" onClick={handleDelete}>
            <span role="img" aria-label="delete">🗑️</span>
            Eliminar
          </Button>
        </ButtonsContainer>
      </VideoInfo>
    </PreviewContainer>
  );
}

export default Preview;
