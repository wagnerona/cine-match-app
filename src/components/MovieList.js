import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
    <div name="picks" className='w-full md:h-screen bg-[#141d2b] text-white'>
      {shortList.length > 0 ? (
        <div className="grid grid-cols-8 gap-20 pt-20">
          {/* Show the shortlisted movies in the list */}
          {shortList.map((shorty) => (
            <div className="movie relative overflow-hidden cursor-pointer" key={shorty.id}>
              <img className='block max-w-full h-auto transition-transform duration-300 ease-out'
                src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
                alt={shorty.title}
              />
              <div className="overlay">
                <h3>{shorty.title}</h3>
                {/* By clicking this button it will clear the shortlisted movies from gallery and localstorage */}
                <button className="remove bg-red-400 rounded px-2 py-1" onClick={() => handleRemove(shorty.id)}>Remove</button>
              </div>
            </div>
          ))}
          {!isUpdated && <p>Loading...</p>}
        </div>
      ) : (
        // if no movies left in the shortlist this message generates
        <div name="picks" className='w-full md:h-screen bg-[#141d2b] text-white'>
        <div className="mx-[34rem] px-5 flex flex-col justify-center h-full">
          <h1 className="animate-text pb-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl text-center">
            You don't have any movies here yet
          </h1>
          <div className="movie-card p-10">
            <div className="swipe-buttons flex justify-center gap-8">
              <Link to="/form">
                <button className="block w-full rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                >
                  Search for movies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default MovieList;
