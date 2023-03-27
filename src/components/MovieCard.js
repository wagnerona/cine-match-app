import React, { useState } from "react";



function MovieCard(props) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);
// console.log("show me result: ", props.movies);
    
 

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
      <div className="swipe-buttons rounded-md p-4 shadow">
       <button className="leftButton m-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleSwipe("left")}>Swipe left</button>
      </div>
       <div className="movie-details text-center rounded p-4 shadow mt-2">
       
       <h1 className="bg-gradient-to-r my-8 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">{currentMovie.title}</h1>
       <img className="mx-auto w-72 h-128 rounded-md shadow-lg transform hover:scale-105 border-2 border-gray-400" src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt={currentMovie.title} />
  
      <p className='text-gray-700 text-lg movie-detail'>{currentMovie.overview}</p>
      <p className="text-gray-700 text-lg movie-detail"><strong>Release Date:</strong> {currentMovie.release_date}</p>
      <p className="text-gray-700 text-lg movie-detail"><strong>Language:</strong> {currentMovie.original_language}</p>
      <p className="text-gray-700 text-lg movie-detail"><strong>Rating:</strong> {currentMovie.vote_average}</p>
      </div>
     
      {/* <div className="swipe-buttons"> */}
        {/* <button className="leftButton" onClick={() => handleSwipe("left")}>Swipe left</button> */}
        <div className="swipe-buttons rounded-md p-4 shadow">
        <button className="rightButton m-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleSwipe("right")}>Swipe right</button>
        </div>
      {/* </div> */}
      {/* { <div className="shortlist">
        <h3>Shortlist</h3>
        <ul>
          {shortlist.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div> */}
    </div> 
  );
}



export default MovieCard;
