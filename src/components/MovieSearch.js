import React from 'react';

// MovieSearch() function fetching details of the specific movie when searching by it's Genre, Year and Language  
        function MovieSearch({ movie }) {
           
            const overviewSentences = movie.overview.split('. ');
           const shortOverview = overviewSentences.slice(0, 5).join('. ');

            return (
              
           <div className="movie-card relative flex flex-col m-2 border border-gray-300 p-4 bg-white transform hover:rotate-y-2 transition-transform duration-300 perspective-1000 hover:shadow-lg hover:bg-blue-100">
           <div className="movie-title flex justify-center items-center">
           <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 transform hover:scale-105 transition-transform duration-300">{movie.title}</h3>
           </div>
           <div className="movie-poster flex justify-center items-center">
           <img
           className="w-72 h-128 rounded-md shadow-lg transform hover:scale-105 border-2 border-gray-400"
           src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
           alt={movie.title}
           />
             </div>
               <div className="movie-details rounded p-4 shadow mt-2">
               <p className="text-gray-700 text-lg movie-detail"><strong>Description:</strong> {shortOverview}</p>
               <p className="text-gray-700 text-lg movie-detail"><strong>Release Date:</strong> {movie.release_date}</p>
               <p className="text-gray-700 text-lg movie-detail"><strong>Language:</strong> {movie.original_language}</p>
               <p className="text-gray-700 text-lg movie-detail"><strong>Rating:</strong> {movie.vote_average}</p>
               </div> 
            
               </div>
        
              );
             }
  
export default MovieSearch;