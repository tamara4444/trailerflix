import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NewVideo from './pages/NewVideo/NewVideo';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #13111b;
  color: white;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 80px;
  padding-bottom: 2rem;
`;

function App() {
  return (
    <Router basename="/trailerflix">
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-video" element={<NewVideo />} />
            <Route path="/edit-video" element={<NewVideo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
