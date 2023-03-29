import React, { useState, useEffect } from 'react';
import '../index.css';

export function MovieList({ movies }) {
  const [shortList, setShortList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const storedShortList = JSON.parse(localStorage.getItem('movie'));
    setShortList(storedShortList);
  }, []);

  useEffect(() => {
    setIsUpdated(true);
  }, [shortList]);

  return (
    <div name="picks" className='w-full md:h-screen text-[#212529]'>
      <div className="movie-gallery pt-20">
        {isUpdated && shortList.map((shorty) => (
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
        {!isUpdated && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default MovieList;
