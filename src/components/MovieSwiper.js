import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




function MovieSwiper({ movies, onMovieSubmit }) {

  // const [swipeDirection, setSwipeDirection] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [shortlist, setShortlist] = useState([]);
  // const [storage, setStorage] = useEffect();

  const handleShortList = () => {
    // event.preventDefault();
    // updating the shortlist data
    // setChosenMovie([...shortlist, chosenMovie]);
    onMovieSubmit(shortlist);
    console.log(shortlist);
    const storedShortlist = localStorage.getItem('movie'); // retrieve existing data from localStorage
        let parsedStoredShortlist = null;
          if (storedShortlist) {
              parsedStoredShortlist = JSON.parse(storedShortlist); // parse existing data if present
              }
  
        const movieArray = Array.isArray(parsedStoredShortlist) ? parsedStoredShortlist : (parsedStoredShortlist ? [parsedStoredShortlist] : []); // check if parsed data is an array and create an array with single movie object if not
        const combinedData = [...movieArray, ...shortlist]; // combine existing and new data
          localStorage.setItem('movie', JSON.stringify(combinedData)); // save combined data to localStorage  
        // }, [shortlist]);
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
    <div name="picks" className='w-full md:h-screen bg-[#141d2b] text-white'>
      <div className="mx-[34rem] px-5 flex flex-col justify-center h-full">
        <h1 className="animate-text pb-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl text-center">
          Our picks for you
        </h1>
        <h2 className="text-center pb-16 ">Swipe right to add to your movie list, or left to skip. Once done click "Done!" to see your movie list</h2>
        <div className="movie-card">
          <div className="movie-details grid grid-rows-3 grid-flow-col gap-4">

            <div className="row-span-3">
              <img className="w-72 h-128 rounded-lg shadow-lg" src={`http://image.tmdb.org/t/p/w342${currentMovie.poster_path}`} alt={currentMovie.title} />
            </div>

            <div className="col-span-2">
              <h2 className="movie-detail text-2xl content-center ">{currentMovie.title}</h2>
            </div>

            <div className="row-span-2 col-span-2">
              <p className="movie-detail">{currentMovie.overview}</p>
              <p className="movie-detail"><strong>Release Date:</strong> {currentMovie.release_date}</p>
              <p className=" movie-detail"><strong>Language:</strong> {currentMovie.original_language}</p>
              <p className=" movie-detail"><strong>Rating:</strong> {currentMovie.vote_average}</p>
            </div>

          </div>
          <div className="swipe-buttons flex justify-center gap-10 pt-24">
            <button
              className="leftButton rounded border border-blue-600 bg-[#b45050] px-12 py-3 text-sm font-medium text-white hover:bg-[#b4505070] hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={() => handleSwipe("left")}
            >Swipe left
            </button>
            <Link to="/my-movies">
              <button className="FinishButton block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray hover:bg-transparent hover:text-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                onClick={handleShortList}>
                Done! Show me my movie list
              </button>
            </Link>
            <button className="rightButton rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-[#50b49b86] hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" onClick={() => handleSwipe("right")}>Swipe right</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSwiper;