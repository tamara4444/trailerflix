import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Edit as EditIcon, Delete as DeleteIcon, PlayArrow } from '@mui/icons-material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(155, 109, 255, 0.2);
  }
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const ActionButton = styled.button`
  background: rgba(155, 109, 255, 0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(155, 109, 255, 0.8);
    transform: scale(1.1);
  }
`;

const PlayButton = styled(ActionButton)`
  background: rgba(155, 109, 255, 0.8);
  width: 48px;
  height: 48px;
  
  &:hover {
    background: rgb(155, 109, 255);
  }
`;

const VideoCard = ({ video, onPlay, onDelete }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    navigate(`/edit/${video.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('¿Estás seguro de que quieres eliminar este video?')) {
      onDelete();
    }
  };

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${getYouTubeId(video.url)}/maxresdefault.jpg`;

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
    >
      <Thumbnail src={thumbnailUrl} alt={video.title} />
      <Overlay style={{ opacity: isHovered ? 1 : 0 }}>
        <Title>{video.title}</Title>
        <Description>{video.description}</Description>
        <ButtonsContainer>
          <ActionButton onClick={handleEdit}>
            <EditIcon />
          </ActionButton>
          <ActionButton onClick={handleDelete}>
            <DeleteIcon />
          </ActionButton>
        </ButtonsContainer>
      </Overlay>
    </CardContainer>
  );
};

export default VideoCard;
