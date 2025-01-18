import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(19, 17, 27, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: #8257e6;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(155, 109, 255, 0.1);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">TRÁILERFLIX</Logo>
        <NavLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/new">Nuevo Video</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
