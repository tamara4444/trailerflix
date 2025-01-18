import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #9b6dff;
    color: white;
    &:hover {
      background: #8257e6;
    }
  }

  &.secondary {
    background: transparent;
    border: 1px solid #9b6dff;
    color: #9b6dff;
    &:hover {
      background: rgba(155, 109, 255, 0.1);
    }
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.875rem;
`;

function VideoForm({ video, onSubmit, onCancel }) {
  console.log('VideoForm props:', { video, onSubmit, onCancel }); // Debug log

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: 'película'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('VideoForm useEffect - video:', video); // Debug log
    if (video) {
      setFormData({
        title: video.title || '',
        description: video.description || '',
        url: video.url || '',
        category: video.category || 'película'
      });
    }
  }, [video]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }
    if (!formData.url.trim()) {
      newErrors.url = 'La URL es requerida';
    } else if (!isValidYouTubeUrl(formData.url)) {
      newErrors.url = 'La URL debe ser de YouTube';
    }
    return newErrors;
  };

  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Submitting form data:', formData); // Debug log
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">Descripción</Label>
        <TextArea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="url">URL de YouTube</Label>
        <Input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        {errors.url && <ErrorMessage>{errors.url}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="category">Categoría</Label>
        <Select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="película">Película</option>
          <option value="serie">Serie</option>
          <option value="documental">Documental</option>
        </Select>
      </FormGroup>

      <ButtonGroup>
        <Button type="button" className="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" className="primary">
          {video ? 'Actualizar' : 'Crear'}
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default VideoForm;
