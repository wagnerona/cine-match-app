import React, { useState } from 'react';
import './App.css';
import Form from './pages/Form';
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';
import Navbar from './components/navBar';
import { Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import movieId from "./data/movie-ids.json"
//import MovieSearch from './components/MovieSearch';
import MovieCard from './components/MovieCard';


function App() {

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({ Genre: "", Language: "", Year: "" });
  // add
  const [selectedMovie, setSelectedMovie] = useState(null);



  // Handle form submission
  const handleSubmit = (data) => {
    // Find the genre ID based on the selected genre name
    const genreID = movieId.find(
      (element) => element.name.toLowerCase() === data.genre.toLowerCase()
    ).id;

    // Make API call with form data and genre ID
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&language=${data.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${data.year}&with_genres=${genreID}&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
    // Store form data in state
    setFormData(data);
  };
// add
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Navbar />
      <Home />
      <Form onSubmit={handleSubmit} />
      <Short-list />
      <MovieSwiper movies={movies}/>
      
      <hr />
      {/* add */}
      {selectedMovie ? (
        <MovieCard
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
      //  <MovieList movies={movies} /> 
       <MovieList movies={movies} onSelect={handleMovieSelect} />
       )}
    </>
  );
}

export default App;



{/* <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/movie-gallery' element={<MovieCards />} />
      </Routes> */}


