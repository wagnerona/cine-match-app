import React from 'react';
import  movieData from '../data/movies.json';
import '../index.css';
// import {webpack} from 'Webpack';


export function MovieCards() {

    return (
        <div className="movie-gallery">
          {movieData.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={movie.imageUrl} alt={movie.title} />
              <div className="overlay">
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      );
    ;
}

