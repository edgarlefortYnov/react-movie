import { useState, useEffect } from 'react';
import { Movie, Actor } from '../types/types';

type Favorites = {
  favoriteMovies: Movie[];
  favoriteActors: Actor[];
};

const useFavorites = (): Favorites => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [favoriteActors, setFavoriteActors] = useState<Actor[]>([]);

  useEffect(() => {
    const storedFavoriteMovies = localStorage.getItem('favoriteMovies');
    if (storedFavoriteMovies) {
      setFavoriteMovies(JSON.parse(storedFavoriteMovies));
    }

    const storedFavoriteActors = localStorage.getItem('favoriteActors');
    if (storedFavoriteActors) {
      setFavoriteActors(JSON.parse(storedFavoriteActors));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  useEffect(() => {
    localStorage.setItem('favoriteActors', JSON.stringify(favoriteActors));
  }, [favoriteActors]);

  return { favoriteMovies, favoriteActors };
};

export default useFavorites;
