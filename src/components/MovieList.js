import React from 'react';
import '../index.css';

export function MovieList() {
  const storedMovies = localStorage.getItem('movie');
  const getShortList = storedMovies ? JSON.parse(storedMovies) : [];

  return (
    <>   
      <div name="picks" className='w-full md:h-screen text-[#212529]'>
        <div className="movie-gallery pt-20">
          {getShortList.map((shorty) => (
            <div className="movie" key={shorty.id}>
              <img
                src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
                alt={shorty.title}
              />
              <div className="overlay">
                <h3>{shorty.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}