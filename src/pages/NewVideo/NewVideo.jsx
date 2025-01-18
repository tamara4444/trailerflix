import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../config/api';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const NewVideoContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #13111b;
  color: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 2rem auto;
  background: rgba(19, 17, 27, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #9b6dff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }

  option {
    background: #13111b;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`;

const Button = styled.button`
  padding: 1.2rem 2rem;
  border-radius: 8px;
  border: none;
  background: #9b6dff;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #8a5cf7;
    transform: translateY(-2px);
  }

  &:disabled {
    background: rgba(155, 109, 255, 0.5);
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`;

const PreviewContainer = styled.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`;

const NewVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editVideo = location.state?.editVideo;

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    url: '',
    description: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (editVideo) {
      setFormData({
        title: editVideo.title || '',
        category: editVideo.category || '',
        url: editVideo.url || '',
        description: editVideo.description || ''
      });
    }
  }, [editVideo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (editVideo) {
        await axios.put(`${API_URL}/${editVideo.id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('Error al guardar el video. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NewVideoContainer>
      <ContentWrapper>
        <Title>{editVideo ? 'Editar Video' : 'Nuevo Video'}</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="category">Categoría</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Películas">Películas</option>
              <option value="Series">Series</option>
              <option value="Documentales">Documentales</option>
              <option value="Anime">Anime</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="url">URL del Video (YouTube)</Label>
            <Input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Descripción</Label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {formData.url && (
            <PreviewContainer>
              <VideoPlayer url={formData.url} />
            </PreviewContainer>
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Guardando...' : (editVideo ? 'Guardar Cambios' : 'Crear Video')}
          </Button>
        </Form>
      </ContentWrapper>
    </NewVideoContainer>
  );
};

export default NewVideo;
