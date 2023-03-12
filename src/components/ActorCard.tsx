import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Actor } from '../types/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface ActorCardProps {
  actor: Actor;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={"https://image.tmdb.org/t/p/original/" + actor.profile_path} title={actor.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {actor.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {actor.character}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActorCard;
