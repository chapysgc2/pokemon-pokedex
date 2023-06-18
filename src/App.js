import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import axios from 'axios';
import { PokemonCard } from './PokemonCard';
import { SearchForm } from './SearchForm';


function App  () {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (pokemonName) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemon(response.data);
    } catch (error) {
      setError('Error: Pokemon no encontrado');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setError('');
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Detalles del Pokémon
          </Typography>
          <SearchForm
            onSubmit={handleSearch}
            loading={loading}
            error={error}
            onTryAgain={handleTryAgain}
          />
          {!pokemon && !loading && !error && (
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              Aún no hay ningún Pokémon, ¡por favor envía un Pokémon!
            </Typography>
          )}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <CircularProgress />
            </div>
          )}
          {pokemon && <PokemonCard pokemon={pokemon} />}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App  ;