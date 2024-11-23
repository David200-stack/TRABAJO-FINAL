import React from 'react';
import { Container } from '@mui/material';
import GrillaPersonajes from './componentes/GrillaPersonajes';
import './estilos.css';

function App() {
  return (
    <Container className="contenedor">
      <h1>Personajes de Rick y Morty</h1>
      <GrillaPersonajes />
    </Container>
  );
}

export default App;
