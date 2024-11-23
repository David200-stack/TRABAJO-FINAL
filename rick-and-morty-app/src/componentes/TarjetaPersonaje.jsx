
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import '../estilos.css';

const TarjetaPersonaje = ({ personaje, onClick }) => {
  return (
    <Card onClick={onClick} className="tarjeta-personaje">
      <CardMedia
        component="img"
        alt={personaje.name}
        height="140"
        image={personaje.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {personaje.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaPersonaje;
