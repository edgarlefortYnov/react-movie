import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ActorCard from './ActorCard';
import { Actor } from '../types/types';
import useFavorites from '../hooks/useFavorite';

const FavoriteActors: React.FC = () => {
  const { favoriteActors } = useFavorites();

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Favorite Actors
      </Typography>
      {favoriteActors.length === 0 && (
        <Typography variant="body1" gutterBottom>
          You haven't added any actors to your favorites yet.
        </Typography>
      )}
      {favoriteActors.length !== 0 && (
        <Grid container spacing={2}>
            {favoriteActors.map((actor: Actor) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
                <ActorCard actor={actor} />
            </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default FavoriteActors;
