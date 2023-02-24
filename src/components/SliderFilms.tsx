import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Slider from 'react-slick';
import { Movie } from '../types/types';

const SliderFilms = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ae1098c7af94ab11d9a8b077daac4007')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      <h2>Films populaires</h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderFilms;
