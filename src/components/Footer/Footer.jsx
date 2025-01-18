import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1625;
  color: white;
  padding: 2rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
`;

const FooterContent = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: ${props => props.flex || '1'};

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(45deg, #9b6dff, #6e40c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background: linear-gradient(45deg, #9b6dff, #6e40c9);
  }
`;

const CategoryLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-left: 0.5rem;
`;

const FooterLink = styled.a`
  color: #9b6dff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  
  &:before {
    content: '▸';
    margin-right: 0.5rem;
    color: #6e40c9;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #6e40c9;
    transform: translateX(5px);
    
    &:before {
      color: #9b6dff;
    }
  }
`;

const FooterText = styled.p`
  color: #a8a8b3;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  font-size: 1.1rem;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`;

const Footer = () => {
  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection flex="2">
          <FooterTitle>Sobre Trailerflix</FooterTitle>
          <FooterText>
            Tu plataforma favorita para descubrir los mejores trailers de películas,
            series, documentales y anime. Explora nuestro catálogo y mantente al día
            con los últimos lanzamientos.
          </FooterText>
        </FooterSection>
        
        <FooterSection flex="1">
          <FooterTitle>Categorías</FooterTitle>
          <CategoryLinks>
            <FooterLink onClick={() => scrollToCategory('películas')}>
              Películas
            </FooterLink>
            <FooterLink onClick={() => scrollToCategory('series')}>
              Series
            </FooterLink>
            <FooterLink onClick={() => scrollToCategory('documentales')}>
              Documentales
            </FooterLink>
            <FooterLink onClick={() => scrollToCategory('anime')}>
              Anime
            </FooterLink>
          </CategoryLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        {new Date().getFullYear()} Trailerflix. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
