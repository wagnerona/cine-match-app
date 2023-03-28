import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import '../index.css';

export function MovieList({ movies }) {
  return (
   
    <div className="movie-gallery">
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt="movie"
          />
          <div className="overlay">
            <h3>{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
