import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Movie } from '../types/types';
import MovieCard from './MovieCard';
import useFavorites from '../hooks/useFavorite';

const FavoriteMovies: React.FC = () => {
  const { favoriteMovies } = useFavorites();

  return (
    <div>
        <Typography variant="h4" component="h2" gutterBottom>
            Favorite Actors
        </Typography>
        {favoriteMovies.length === 0 && (
            <Typography variant="body1" gutterBottom>
            You haven't added any actors to your favorites yet.
            </Typography>
        )}
        {favoriteMovies.length !== 0 && (
            <Grid container spacing={2}>
                {favoriteMovies.map((movie: Movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                    <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        )}
    </div>
  );
};

export default FavoriteMovies;
