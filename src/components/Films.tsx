import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import { Movie } from '../types/types';
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    searchContainer: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Films = ( ) => {

  const classes = useStyles();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ae1098c7af94ab11d9a8b077daac4007&language=en-US&page=${currentPage}`);
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);


  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
          <Pagination className='pagination-actors' count={totalPages} page={currentPage} onChange={handlePageChange} />
      )}
    </div>
  );
};

export default Films;