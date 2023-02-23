import { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import { Movie, SortOption } from './types';

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

interface Props {
  apiKey: string;
}

const Films = ({ apiKey }: Props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.Popularity);

  useEffect(() => {
    fetchMovies();
  }, [sortOption]);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=${sortOption}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} className={classes.searchContainer}>
          <form onSubmit={handleSearch}>
            <TextField
              variant="outlined"
              label="Search movies"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            color="primary"
            onClick={() => setSortOption(SortOption.Popularity)}
            disabled={sortOption === 'popularity.desc'}
          >
            Sort by popularity
          </Button>
          <Button
            color="primary"
            onClick={() => setSortOption(SortOption.Rating)}
            disabled={sortOption === 'vote_average.desc'}
          >
            Sort by rating
          </Button>
          <Button
            color="primary"
            onClick={() => setSortOption(SortOption.ReleaseDate)}
            disabled={sortOption === 'release_date.desc'}
          >
            Sort by release date
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Films;