// import React, { useState } from "react";
// import movies from "../data/movies.json";


// function MovieCard({movies}) {
//   const [swipeDirection, setSwipeDirection] = useState(null);
//   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//   const [shortlist, setShortlist] = useState([]);

//   function handleSwipe(direction) {
//     if (direction === "right") {
//       const currentMovie = movies[currentMovieIndex];
//       setShortlist([...shortlist, currentMovie]); // add current movie to shortlist
//     }
//     setCurrentMovieIndex(currentMovieIndex + 1); // show next movie
//   }


//   if (currentMovieIndex >= movies.length) {
//     // end of movie list, show some message or redirect to another page
//     return <p>No more movies to display</p>;
//   }

//   const currentMovie = movies[currentMovieIndex];

//   return (
//     <div className="movie-swiper">
//       <h1>Swipe right or left to keep or dismiss the movie</h1>
//       <div className="movie-card">
//         <img src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt={currentMovie.title} />
//         <h2>{currentMovie.title}</h2>
//         <p>{currentMovie.description}</p>
//         <div className="swipe-buttons">
//           <button className="leftButton" onClick={() => handleSwipe("left")}>Swipe left</button>
//           <button className="rightButton" onClick={() => handleSwipe("right")}>Swipe right</button>
//         </div>
//         <div className="shortlist">
//           <h3>Shortlist</h3>
//           <ul>
//             {shortlist.map((movie) => (
//               <li key={movie.id}>{movie.title}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default MovieCard;