import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: min(90vw, 1200px);
  height: min(calc(90vw * 9/16), calc(1200px * 9/16));
  margin: auto;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  pointer-events: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid white;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
  pointer-events: auto;

  &:hover {
    background: #e50914;
    transform: scale(1.1);
  }
`;

const StyledYouTube = styled(YouTube)`
  pointer-events: auto;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const FullscreenVideo = ({ videoId, onClose }) => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      rel: 0,
    },
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <VideoWrapper>
        <CloseButton onClick={onClose}>×</CloseButton>
        <StyledYouTube
          videoId={videoId}
          opts={opts}
          style={{ width: '100%', height: '100%' }}
        />
      </VideoWrapper>
    </Overlay>
  );
};

export default FullscreenVideo;
