import { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActorCard from './ActorCard';
import { Actor, SortOption } from './types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  search: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Actors() {
  const classes = useStyles();
  const [actors, setActors] = useState<Actor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [SortOptions, setSortOption] = useState<SortOption>(SortOption.Popularity);

  useEffect(() => {
    const fetchActors = async () => {
      const url = `https://api.themoviedb.org/3/person/popular?sort_by=${SortOptions}&api_key=ae1098c7af94ab11d9a8b077daac4007`;
      const response = await fetch(url);
      const data = await response.json();
      setActors(data.results);
    };
    fetchActors();
  }, [SortOptions]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredActors = actors.filter((actor) => {
    return actor.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.header}>
        Popular Actors
      </Typography>
      <Grid container spacing={3} className={classes.search}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Sort By"
            variant="outlined"
            fullWidth
            value={SortOptions}
            onChange={(event) => setSortOption(event.target.value as SortOption)}
          >
            <option value="popularity.desc">Popularity</option>
            <option value="name.asc">Name</option>
            <option value="birthday.desc">Date of Birth</option>
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {filteredActors.map((actor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
