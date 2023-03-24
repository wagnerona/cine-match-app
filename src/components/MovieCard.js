import React, { useState } from "react";
import movies from "../data/movies.json";
// import { ShortList } from "./Short-list.js";

function MovieCard() {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  function handleSwipe(direction) {
    setSwipeDirection(direction);
    setTimeout(() => {
      // reset swipe direction after some time to show the next card
      setSwipeDirection(null);
      setCurrentMovieIndex(currentMovieIndex + 1);
    }, 500); // 500ms delay before showing the next card
  }

  if (currentMovieIndex >= movies.length) {
    // end of movie list, show some message or redirect to another page
    return <p>No more movies to display</p>;
  }

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="movie-card">
      <img src={currentMovie.imageUrl} alt={currentMovie.title} />
      <h2>{currentMovie.title}</h2>
      <p>{currentMovie.description}</p>
      <div className="swipe-buttons">
        <button
          className="leftButton"
          disabled={swipeDirection === "left"}
          onClick={() => handleSwipe("left")}
        >
          Swipe left
        </button>
        <button
          className="rightButton"
          disabled={swipeDirection === "right"}
          onClick={() => handleSwipe("right")}
        >
          Swipe right
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
