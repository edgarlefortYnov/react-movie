import { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import { Movie, SortOption } from '../types/types';

interface Props {
    id: string;
    apiKey: string;
  }

const DetailFilm = ({ id, apiKey }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetchMovies();
  },[]);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data :", data);
    setMovie(data);
  };

  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
        <h1>
            {movie?.title}
        </h1>
        <h2>
            {movie?.release_date}
        </h2>
        <h2>
            Note : {movie?.vote_average} / 10
        </h2>        
        <h3>
            Résumé : {movie?.overview}
        </h3>
    </div>
  );
};

export default DetailFilm;