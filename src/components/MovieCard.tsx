import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../types/types';
import Button from "@material-ui/core/Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 466,
    },
  })
);

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

    const classes = useStyles();
    const { user } = useContext(AuthContext)
    const addToFavorite = async (id: number, email: string | null) => {
        console.log("button triggered")
        await addDoc(collection(db, "favorites"), {
            userEmail: email,
            filmId: id
        });
    };


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.release_date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.vote_average}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
            { user &&
                    <Button variant="contained" onClick={() => addToFavorite(movie.id, user.email)}>Favori</Button>
            }
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;