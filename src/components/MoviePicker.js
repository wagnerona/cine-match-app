import React from "react";
import { movies } from "../data/movies.json";

export function MoviePicker({ movies,  shortList, setShortList }) {

    
    
    function addToShortList(id) {
      setShortList([...shortList, id])
    }
    return (
        <MovieList movieList={movies} onItemClick={addToShortList} />
        );
}

export default MoviePicker;