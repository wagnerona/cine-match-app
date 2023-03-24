import React, { useState } from "react";
import movies from "../data/movies.json";


function MovieCard() {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);

    
 

  function handleSwipe(direction) {
    // setSwipeDirection(direction);
    // setTimeout(() => {
    //   // reset swipe direction after some time to show the next card
    //   setSwipeDirection(null);
    //   setCurrentMovieIndex(currentMovieIndex + 1);
    // }, 500); // 500ms delay before showing the next card
  }

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
    <div className="movie-card">
      <img src={currentMovie.imageUrl} alt={currentMovie.title} />
      <h2>{currentMovie.title}</h2>
      <p>{currentMovie.description}</p>
      <div className="swipe-buttons">
        <button className="leftButton" onClick={() => handleSwipe("left")}>Swipe left</button>
        <button className="rightButton" onClick={() => handleSwipe("right")}>Swipe right</button>
      </div>
      <div className="shortlist">
        <h3>Shortlist</h3>
        <ul>
          {shortlist.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default MovieCard;
