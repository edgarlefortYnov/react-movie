import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Tab, Tabs } from '@material-ui/core';
import FavoriteMovies from './FavoriteMovies';
import FavoriteActors from './FavoriteActors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Favorite: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="favorite tabs">
          <Tab label="Favorite Movies" id="favorite-movies-tab" aria-controls="favorite-movies-panel" />
          <Tab label="Favorite Actors" id="favorite-actors-tab" aria-controls="favorite-actors-panel" />
        </Tabs>
      </AppBar>
      <Box hidden={value !== 0}>
        <FavoriteMovies />
      </Box>
      <Box hidden={value !== 1}>
        <FavoriteActors />
      </Box>
    </div>
  );
};

export default Favorite;
