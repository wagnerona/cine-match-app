import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import MovieSearch from './MovieSearch';

import '../index.css';

//made a list of movie fetching from api and added description, Release date, Language and Rating from MovieSearch(). 
// export function MovieList({ movies }) {
//   return (
    
//     <div className="movie-gallery">
    
//       {movies.map((movie) => (
//         <Link to={`/movies/${movie.id}`} key={movie.id}>
//           <div className="overlay">
//           <MovieSearch movie={movie} />
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
//   }
  
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


 