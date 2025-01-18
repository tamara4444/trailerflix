import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1625;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2000px;
  margin: 0 auto;
  gap: 2rem;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(45deg, #9b6dff, #6e40c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavButton = styled(Link)`
  background: ${props => props.active ? 
    'linear-gradient(45deg, #6e40c9, #4c2889)' : 
    'transparent'};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.active ? 'transparent' : '#6e40c9'};

  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(45deg, #7b4ddb, #5934a3)' : 
      'rgba(110, 64, 201, 0.1)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
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
            to="/new" 
            active={location.pathname === '/new' ? 1 : 0}
          >
            Nuevo Video
          </NavButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
