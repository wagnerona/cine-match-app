// import React, { useState } from 'react';
// import movieData from '../data/movies.json';
// import '../index.css';

// export function MovieList({ movies }) {
//   const getShortList = JSON.parse(localStorage.getItem('movie')) || [];
//   const [shortList, setShortList] = useState(getShortList);
// // 
//   const handleRemove = (id) => {
//     const updatedList = shortList.filter((item) => item.id !== id);
//     setShortList(updatedList);
//     localStorage.setItem('movie', JSON.stringify(updatedList));
//   };

//   return (
//     <div name="picks" className='w-full md:h-screen text-[#212529]'>
//       <div className="movie-gallery pt-20">
//         {/* Show the shortlisted movies in the list */}
//         {shortList.map((shorty) => (
//           <div className="movie" key={shorty.id}>
//             <img
//               src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
//               alt={shorty.title}
//             />
//             <div className="overlay">
//               <h3>{shorty.title}</h3>
//               {/* By clicking this button it will clear the shortlisted movies from gallery and localstorage */}
//               <button className="remove" onClick={() => handleRemove(shorty.id)}>𝘅</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import movieData from '../data/movies.json';
import '../index.css';

export function MovieList({ movies }) {
  const getShortList = JSON.parse(localStorage.getItem('movie')) || [];
  const [shortList, setShortList] = useState(getShortList);

  const handleRemove = (id) => {
    const updatedList = shortList.filter((item) => item.id !== id);
    setShortList(updatedList);
    localStorage.setItem('movie', JSON.stringify(updatedList));
  };

  return (
    <div name="picks" className='w-full md:h-screen text-[#212529]'>
      {shortList.length > 0 ? (
        <div className="movie-gallery pt-20">
          {/* Show the shortlisted movies in the list */}
          {shortList.map((shorty) => (
            <div className="movie" key={shorty.id}>
              <img
                src={`http://image.tmdb.org/t/p/w185${shorty.poster_path}`}
                alt={shorty.title}
              />
              <div className="overlay">
                <h3>{shorty.title}</h3>
                {/* By clicking this button it will clear the shortlisted movies from gallery and localstorage */}
                <button className="remove" onClick={() => handleRemove(shorty.id)}>𝘅</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // if no movies left in the shortlist this message generates
        <div className="movie-message pt-20">
          <div className="no-movies">
            <p>No movies in the shortlist!</p>
             <Link to="/home" className="btn">Go back to home page</Link> 
          </div>
        </div>
      )}
    </div>
  );
}