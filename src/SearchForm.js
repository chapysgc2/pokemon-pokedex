
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import axios from 'axios';

export function SearchForm({ onSubmit, loading, error, onTryAgain }) {
    const [pokemonName, setPokemonName] = useState('');
  
    const handleInputChange = (event) => {
      setPokemonName(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(pokemonName);
    };
  
    const handleTryAgain = () => {
      onTryAgain();
      setPokemonName('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Pokémon"
          fullWidth
          value={pokemonName}
          onChange={handleInputChange}
          placeholder="Ejemplo: pikachu"
          sx={{ mb: 2 }}
          error={Boolean(error)}
          helperText={error}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          Buscar
        </Button>
        {error && (
          <Button onClick={handleTryAgain} fullWidth>
            Intentar nuevamente
          </Button>
        )}
      </form>
    );
  }