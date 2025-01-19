import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(155, 109, 255, 0.9);
    transform: scale(1.1);
  }
`;

const VideoInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  z-index: 5;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #a8a8b3;
  margin: 0;
`;

const VideoModal = ({ video, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <VideoPlayer 
          url={video.url} 
          playing={true}
          controls={true}
          muted={false}
          light={false}
        />
        <VideoInfo>
          <Title>{video.title}</Title>
          <Description>{video.description}</Description>
        </VideoInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
