
import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import '../estilos.css';

const ModalPersonaje = ({ personaje, onClose }) => {
  if (!personaje) return null;

  return (
    <Modal
      open={!!personaje}
      onClose={onClose}
    >
      <Box className="contenido-modal" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, boxShadow: 24, p: 4 }}>
        <img src={personaje.image} alt={personaje.name} style={{ width: '100%' }} />
        <Typography variant="h6" component="h2">
          {personaje.name}
        </Typography>
        <Typography variant="body1">Especie: {personaje.species}</Typography>
        <Typography variant="body1">Estatus: {personaje.status}</Typography>
        <Typography variant="body1">Género: {personaje.gender}</Typography>
        <Typography variant="body1">Origen: {personaje.origin.name}</Typography>
      </Box>
    </Modal>
  );
};

export default ModalPersonaje;
