import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1625;
  color: white;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Tráilerflix. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
