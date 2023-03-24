import React from 'react';
import  movieData from '../data/movies.json';
import '../index.css';
// import {webpack} from 'Webpack';


export function MovieCards() {

    return (
        <div name="movie-gallery" className="movie-gallery mx-10">
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
    
}
