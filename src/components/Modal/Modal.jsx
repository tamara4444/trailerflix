import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  color: white;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #e50914;
  }
`;

const Title = styled.h2`
  color: #e50914;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
  min-height: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.clear ? '#666' : '#e50914'};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const Modal = ({ isOpen, onClose, video, onSave }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedVideo = {
      ...video,
      title: formData.get('title'),
      category: formData.get('category'),
      image: formData.get('image'),
      video: formData.get('video'),
      description: formData.get('description')
    };
    await onSave(updatedVideo);
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Editar Video</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Título</Label>
            <Input
              name="title"
              defaultValue={video.title}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Categoría</Label>
            <Select
              name="category"
              defaultValue={video.category}
              required
            >
              <option value="Series">Series</option>
              <option value="Películas">Películas</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>URL de la imagen</Label>
            <Input
              name="image"
              type="url"
              defaultValue={video.image}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>URL del video</Label>
            <Input
              name="video"
              type="url"
              defaultValue={video.video}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Descripción</Label>
            <TextArea
              name="description"
              defaultValue={video.description}
              required
            />
          </FormGroup>

          <ButtonGroup>
            <Button type="button" clear onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Guardar
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
