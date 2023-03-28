import React, { useState } from "react";



function MovieCard(props) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);
 console.log("show me result: ", props.movies);
    
 

  function handleSwipe(direction) {
   
  }

  function handleSwipe(direction) {
    if (direction === "right") {
      const currentMovie = props.movies[currentMovieIndex];
      setShortlist([...shortlist, currentMovie]); // add current movie to shortlist
    }
    setCurrentMovieIndex(currentMovieIndex + 1); // show next movie
  }


  if (currentMovieIndex >= props.movies.length) {
    // end of movie list, show some message or redirect to another page
    return <p>No more movies to display</p>;
  }

  const currentMovie = props.movies[currentMovieIndex];
  console.log("show me result: ", currentMovie);
    
  return (
    <div className="movie-card">
       
       <div className="movie-details">
       
       <h1>{currentMovie.title}</h1>
       <img className="mx-auto w-72 h-128" src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt={currentMovie.title} />
   
      <p className="movie-detail">{currentMovie.overview}</p>
      <p className="movie-detail"><strong>Release Date:</strong> {currentMovie.release_date}</p>
      <p className=" movie-detail"><strong>Language:</strong> {currentMovie.original_language}</p>
      <p className=" movie-detail"><strong>Rating:</strong> {currentMovie.vote_average}</p>
     </div> 
     
       <div className="swipe-buttons"> 
       <button className="leftButton" onClick={() => handleSwipe("left")}>Previous</button>
        <button className="rightButton" onClick={() => handleSwipe("right")}>Go Next</button>
        </div>

    </div> 
  );
}



export default MovieCard;
