import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
// import MoviePicker from "./MoviePicker.js";

function MovieSwiper({ movies, onMovieSubmit }) {

  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);

  const handleShortList = (event) => {
    event.preventDefault();
    // updating the shortlist data
    setChosenMovie([...shortlist, chosenMovie]);
    onMovieSubmit(chosenMovie);
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
        <h1>Swipe right or left to keep or dismiss the movie</h1>
        <div className="movie-card">
          <img src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt={currentMovie.title} />
          <h2>{currentMovie.title}</h2>
          <p>{currentMovie.description}</p>
          <div className="swipe-buttons">
            <button className="leftButton" onClick={() => handleSwipe("left")}>Swipe left</button>
            <button className="rightButton" onClick={() => handleSwipe("right")}>Swipe right</button>
          </div>
          <div className="shortlist">
            <h3>Shortlist</h3>
          </div>
        </div>
        <div>
          <button className="FinishButton block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray hover:bg-transparent hover:text-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            onClick={handleShortList}>
            Done! Take me to my movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieSwiper;