import React from 'react';
import { TextField, Button, Typography, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';

export function PokemonCard({ pokemon }) {
    return (
      <Card sx={{ mt: 2 }}>
        <CardMedia
          component="img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{ width: 200, height: 200, margin: '0 auto' }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 1 }}>
            {pokemon.name}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Altura: {pokemon.height}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Peso: {pokemon.weight}
          </Typography>
          {/* Otros detalles del Pokémon */}
        </CardContent>
      </Card>
    );
  }