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

  const handleRemove = (id) => {
    const updatedList = shortList.filter((item) => item.id !== id);
    setShortList(updatedList);
    localStorage.setItem('movie', JSON.stringify(updatedList));
  };

  return (
    <div name="picks" className='w-full md:h-screen text-[#212529]'>
      {shortList.length > 0 ? (
        <div className="movie-gallery pt-20">
          {/* Show the shortlisted movies in the list */}
          {shortList.map((shorty) => (
            <div className="movie" key={shorty.id}>
              <img
                src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
                alt={shorty.title}
              />
              <div className="overlay">
                <h3>{shorty.title}</h3>
                {/* By clicking this button it will clear the shortlisted movies from gallery and localstorage */}
                <button className="remove" onClick={() => handleRemove(shorty.id)}>𝘅</button>
              </div>
            </div>
          ))}
          {!isUpdated && <p>Loading...</p>}
        </div>
      ) : (
        // if no movies left in the shortlist this message generates
        <div className="movie-message pt-20">
          <div className="no-movies">
            <p>No movies in the shortlist!</p>
           <p className="btn px-5 transform hover:scale-110 hover:bg-red-300 rounded-full transition duration-500">🔺Click Home🔺</p> 
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
