import React from 'react';
import movieData from '../data/movies.json';
import '../index.css';
// import {webpack} from 'Webpack';


export function MovieList({ movies }) {
  return (
    <div name="picks" className='w-full md:h-screen text-[#212529]'>
      <div className="movie-gallery pt-20">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="overlay">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
