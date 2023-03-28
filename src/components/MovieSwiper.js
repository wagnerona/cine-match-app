import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
// import MoviePicker from "./MoviePicker.js";
import { Link } from "react-router-dom";


function MovieSwiper({ movies, onMovieSubmit }) {

  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);

  const handleShortList = () => {
    // event.preventDefault();
    // updating the shortlist data
    // setChosenMovie([...shortlist, chosenMovie]);
    onMovieSubmit(shortlist);
    console.log(shortlist);
    const jsonShortlist = JSON.stringify(shortlist);
    const storedShortlist = localStorage.setItem('movie', jsonShortlist);
     // Check if movieStorageData is not null and parse JSON string
  const parsedStoredShortlist = storedShortlist ? JSON.parse(storedShortlist) : null;

  // Check if parsedMovieStorageData is an array, if not, create an array with the single movie object
  const movieArray = Array.isArray(parsedStoredShortlist) ? parsedStoredShortlist : [parsedStoredShortlist];
    

  };


  function handleSwipe(direction) {
    if (direction === "right") {
      const currentMovie = movies[currentMovieIndex];
      setShortlist([...shortlist, currentMovie]); // add current movie to shortlist
    }
    setCurrentMovieIndex(currentMovieIndex + 1); // show next movie
  }


  if (currentMovieIndex >= movies.length) {
    // end of movie list, show some message or redirect to another page
    return <p>No more movies to display</p>;
  }

  const currentMovie = movies[currentMovieIndex];


  return (
    <div name="picks" className='w-full md:h-screen text-[#212529]'>
      <div className="mx-auto px-8 flex flex-col justify-center h-full">
        <h1>Swipe right to keep or left to dismiss the movie</h1>
        <div className="movie-card">
          <img src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt={currentMovie.title} />
          <h2>{currentMovie.title}</h2>
          <p>{currentMovie.description}</p>
          <div className="swipe-buttons">
            <button className="leftButton" onClick={() => handleSwipe("left")}>Swipe left</button>
            <button className="rightButton" onClick={() => {
              handleSwipe("right");
            }}>Swipe right</button>

          </div>
          <div className="shortlist">
            <h3>Shortlist</h3>
          </div>
        </div>
        <div>
          <Link to="/my-movies">
          <button className="FinishButton block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray hover:bg-transparent hover:text-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            onClick={handleShortList}>
            Done! Show me my movies
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieSwiper;