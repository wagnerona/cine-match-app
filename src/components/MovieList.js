import React from 'react';
import movieData from '../data/movies.json';
import '../index.css';
// import {webpack} from 'Webpack';


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
