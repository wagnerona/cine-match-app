import React from "react";
import MovieCard from "./MovieCard.js";
import MoviePicker from "./MoviePicker.js";

function MovieSwiper() {
  return (
    <div className="movie-swiper">
      <h1>Swipe right or left to keep or dismiss the movie</h1>
      <MovieCard />
    </div>
  );
}

export default MovieSwiper;