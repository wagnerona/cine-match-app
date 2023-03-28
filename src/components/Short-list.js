// import React from "react";
// import { MoviePicker } from './MoviePicker.js';

// export function ShortList({ movies, shortList, setShortList }) {
//     const shortListedMovies = movies.filter(entry => 
//         shortList.includes(entry.id) );

//     function removeFromShortList(id) {
//         setShortList(shortList.filter(i => i !== id))

//     }

//     const hasMovies = shortListedMovies.length > 0
//     return (
//     <div className="short-list">
//         <h2>{ hasMovies ? "Your shortlist: " : "Click on a movie to shortlist it" }</h2>
//         { hasMovies && (
//            <MovieList 
//                 MoviesList={shortListedMovies}
//                 onItemClick={removeFromShortList} /> 
//         )}
//         <hr />
        
//     </div>
//     );
// }
