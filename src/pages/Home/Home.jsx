import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/api';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoModal from '../../components/VideoModal/VideoModal';
import VideoCard from '../../components/VideoCard/VideoCard';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

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

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const sparkle = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(15deg); }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  color: white;
  background-color: #13111b;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1920px) {
    padding: 0 4rem;
  }
`;

const Banner = styled.div`
  width: 100vw;
  min-height: 600px;
  background: linear-gradient(135deg, #13111b 0%, #1a1625 25%, #1e1b29 50%, #2a2438 75%, #13111b 100%);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 5rem 6rem;
  gap: 8rem;
  position: relative;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(155, 109, 255, 0.1) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
`;

const BannerTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #9b6dff, #6e40c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #9b6dff, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerDescription = styled.div`
  position: relative;
  background: rgba(155, 109, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(155, 109, 255, 0.2);
  box-shadow: 0 8px 32px rgba(155, 109, 255, 0.1);
  
  &::before {
    content: '✨';
    position: absolute;
    top: -15px;
    left: -15px;
    font-size: 2rem;
    background: linear-gradient(45deg, #9b6dff, #6e40c9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${sparkle} 2s infinite;
  }

  &::after {
    content: '🎬';
    position: absolute;
    bottom: -15px;
    right: -15px;
    font-size: 2rem;
    background: linear-gradient(45deg, #6e40c9, #9b6dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${sparkle} 2s infinite reverse;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #9b6dff, #ff69b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #9b6dff, transparent);
    margin: 0.5rem auto;
    border-radius: 2px;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  
  span {
    color: #9b6dff;
    font-weight: 600;
  }
`;

const BannerVideoContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 300px;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;

  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(155, 109, 255, 0.2), transparent);
    z-index: 1;
  }
`;

const BannerPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.thumbnail});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(155, 109, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: 0 0 20px rgba(155, 109, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: rgba(155, 109, 255, 0.3);
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgb(155, 109, 255);
    box-shadow: 0 0 30px rgba(155, 109, 255, 0.7);
  }
`;

const CategoryNav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 100;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.li`
  cursor: pointer;
  color: ${props => props.active ? '#9b6dff' : 'rgba(255, 255, 255, 0.8)'};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.active ? 'rgba(155, 109, 255, 0.1)' : 'transparent'};
  
  &:hover {
    color: #9b6dff;
    transform: translateY(-2px);
    background: rgba(155, 109, 255, 0.1);
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
  color: #9b6dff;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Footer = styled.footer`
  background: rgba(19, 17, 27, 0.95);
  padding: 4rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Películas', 'Series', 'Documentales', 'Anime'];
  const [isPlaying, setIsPlaying] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const categoryRefs = useRef({});
  const [bannerVideo] = useState({
    url: 'https://www.youtube.com/watch?v=O6JxZxIzRGc',
    title: 'RECOMIENDA TU TRAILER FAVORITO',
    description: 'Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.',
    thumbnail: 'https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg'
  });

  const fetchVideos = async () => {
    try {
      console.log('Fetching videos...');
      const response = await axios.get(API_URL);
      const apiVideos = response.data;
      console.log('API Videos:', apiVideos);

      // Asegurarnos de que todos los videos tengan una categoría válida
      const validatedVideos = apiVideos.map(video => ({
        ...video,
        category: categories.find(c => c.toLowerCase() === (video.category || '').toLowerCase()) || 'Películas'
      }));

      setVideos(validatedVideos);
      localStorage.setItem('videos', JSON.stringify(validatedVideos));
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Intentar cargar desde localStorage si la API falla
      const localVideos = JSON.parse(localStorage.getItem('videos') || '[]');
      setVideos(localVideos);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [refreshKey]);

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesCategory = !selectedCategory || 
        video.category.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesCategory;
    });
  }, [videos, selectedCategory]);

  const scrollToCategory = (category) => {
    const element = document.getElementById(category.toLowerCase());
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setSelectedCategory(category);
    }
  };

  const handleEdit = (video) => {
    navigate(`/edit/${video.id}`);
  };

  const handleDelete = async (videoId) => {
    try {
      // Actualizar el estado local inmediatamente para feedback instantáneo
      setVideos(prevVideos => prevVideos.filter(v => v.id !== videoId));
      
      // Actualizar localStorage inmediatamente
      const updatedVideos = JSON.parse(localStorage.getItem('videos') || '[]')
        .filter(v => v.id !== videoId);
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      
      // Intentar eliminar en la API
      const response = await axios.delete(`${API_URL}/${videoId}`);
      
      if (response.status === 200) {
        console.log('Video eliminado exitosamente de la API');
      } else {
        throw new Error('Error al eliminar el video de la API');
      }
      
      // Esperar un momento antes de recargar los datos
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Recargar datos de la API para asegurar sincronización
      await fetchVideos();
      
    } catch (error) {
      console.error('Error al eliminar el video:', error);
      
      // Revertir cambios locales si hay error en la API
      const originalVideos = JSON.parse(localStorage.getItem('videos') || '[]');
      setVideos(originalVideos);
      
      // Intentar recargar datos de la API
      setTimeout(() => {
        fetchVideos();
      }, 1000);
    }
  };

  const renderVideosByCategory = (category) => {
    const filteredVideosByCategory = filteredVideos.filter(video => video.category === category);
    if (filteredVideosByCategory.length === 0) return null;

    return (
      <div id={category.toLowerCase()} key={category} style={{ scrollMarginTop: '100px' }}>
        <CategoryTitle>{category}</CategoryTitle>
        <VideoGrid>
          {filteredVideosByCategory.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => setSelectedVideo(video)}
              onEdit={() => handleEdit(video)}
              onDelete={() => handleDelete(video.id)}
            />
          ))}
        </VideoGrid>
      </div>
    );
  };

  return (
    <HomeContainer>
      <Banner>
        <BannerContent>
          <BannerTitle>TrailerFlix</BannerTitle>
          <BannerDescription>
            <DescriptionTitle>Recomienda tu Trailer Favorito</DescriptionTitle>
            <DescriptionText>
              Sube tu trailer favorito para que podamos conocer tus <span>películas</span>, <span>animes</span>, <span>series</span> y <span>documentales</span> que quieres que todos veamos.
            </DescriptionText>
          </BannerDescription>
        </BannerContent>
        <BannerVideoContainer onClick={() => setIsPlaying(true)}>
          <BannerPreview thumbnail={bannerVideo.thumbnail} />
          <PlayIcon>▶</PlayIcon>
        </BannerVideoContainer>
      </Banner>

      {isPlaying && (
        <VideoModal
          video={bannerVideo}
          onClose={() => setIsPlaying(false)}
        />
      )}

      <ContentWrapper>
        <CategoryNav>
          <CategoryList>
            {categories.map(category => (
              <CategoryItem
                key={category}
                active={selectedCategory === category}
                onClick={() => scrollToCategory(category)}
              >
                {category}
              </CategoryItem>
            ))}
          </CategoryList>
        </CategoryNav>

        {categories.map(category => renderVideosByCategory(category))}
      </ContentWrapper>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          video={selectedVideo}
          API_URL={API_URL}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
