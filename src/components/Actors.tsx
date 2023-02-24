import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ActorCard from './ActorCard';
import { Actor, SearchParams } from '../types/types';
import useFavorites from '../hooks/useFavorite';
import Pagination from '@material-ui/lab/Pagination';

const Actors: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=ae1098c7af94ab11d9a8b077daac4007&page=${currentPage}&${searchParams}`);
      const data = await response.json();
      setActors(data.results);
      setTotalPages(data.total_pages);
    };
    fetchData();
  }, [currentPage, searchParams]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearchParams(value ? { query: value } : {});
  };

  return (
    <div>
      <Typography className='title-actors' variant="h4" component="h2" gutterBottom>
        Actors
      </Typography>
      {/* <input type="text" placeholder="Search actors" onChange={handleSearchChange} /> */}
      {actors.length === 0 && (
        <Typography variant="body1" gutterBottom>
          No actors found.
        </Typography>
      )}
      <Grid className='grid-actor' container spacing={2}>
        {actors.map((actor: Actor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination className='pagination-actors' count={totalPages} page={currentPage} onChange={handlePageChange} />
      )}
    </div>
  );
};

export default Actors;
