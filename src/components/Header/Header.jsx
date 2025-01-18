import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(45deg, #9b6dff, #8257e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  background: ${props => props.active ? '#9b6dff' : 'transparent'};
  color: ${props => props.active ? 'white' : '#9b6dff'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #9b6dff;

  &:hover {
    background: #8257e6;
    color: white;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>TRAILERFLIX</Logo>
        <Nav>
          <NavButton 
            to="/" 
            active={location.pathname === '/' ? 1 : 0}
          >
            Home
          </NavButton>
          <NavButton 
            to="/new-video" 
            active={location.pathname === '/new-video' ? 1 : 0}
          >
            Nuevo Video
          </NavButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
