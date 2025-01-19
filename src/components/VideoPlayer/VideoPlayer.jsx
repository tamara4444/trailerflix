import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`;

const PlayerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(155, 109, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(155, 109, 255, 1);
  }
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(19, 17, 27, 0.7) 0%,
      rgba(19, 17, 27, 0.3) 100%
    );
  }
`;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`;

const VideoPlayer = ({ url, playing = false, controls = true, muted = true, light = true }) => {
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(playing);

  const getYoutubeId = (url) => {
    if (!url) return null;
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } catch (error) {
      console.error('Error extracting YouTube ID:', error);
      return null;
    }
  };

  const videoId = getYoutubeId(url);
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  const handleError = () => {
    console.error('Error loading video:', url);
    setHasError(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!url) {
    return (
      <VideoContainer>
        <ErrorContainer>
          URL de video no válida
        </ErrorContainer>
      </VideoContainer>
    );
  }

  if (hasError) {
    return (
      <VideoContainer>
        <ErrorContainer>
          Error al cargar el video
        </ErrorContainer>
      </VideoContainer>
    );
  }

  return (
    <VideoContainer>
      <PlayerWrapper>
        {!isPlaying && light && thumbnail ? (
          <>
            <Thumbnail src={thumbnail} />
            <PlayButton onClick={handlePlay}>
              <PlayIcon />
            </PlayButton>
          </>
        ) : (
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={controls}
            muted={muted}
            onError={handleError}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  iv_load_policy: 3,
                  origin: window.location.origin,
                  enablejsapi: 1,
                  autoplay: 1
                }
              }
            }}
          />
        )}
      </PlayerWrapper>
    </VideoContainer>
  );
};

export default VideoPlayer;
