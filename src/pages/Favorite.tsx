import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../provider/AuthProvider";
import Grid from "@material-ui/core/Grid";
import {Movie} from "../types/types";
import FavoriteCard from "../components/FavoriteCard";

const Favorite = () => {

    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState<Movie[]>([]);
    const q = query(collection(db, "favorites"), where("userEmail", "==", user?.email));

    const fetchFavorites = async () => {
        const movies = new Array();
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            movies.push(doc.data().movie)
        });
        setMovies(movies)
    };

    useEffect(() => {
        fetchFavorites();

    }, []);

    return (
        <div>
            <h1>My favorites</h1>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <FavoriteCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </div>

    )
};

export default Favorite