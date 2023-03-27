import React, { useState } from 'react';
import './App.css';
import Form from './pages/Form';
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';
import Navbar from './components/navBar';
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import movieId from "./data/movie-ids.json"
import languageShort from "./data/languages.json"


function App() {

  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({ Genre: "", Language: "", Year: "" });
  const [shortListMovie, setShortListMovie] = useState([]);

  //handle shortlist submit
  const handleMovieSubmit = (chosenMovie) => {
    setShortListMovie(chosenMovie)
  };


  // Handle form submission
  const handleSubmit = (data) => {
    // Find the genre ID based on the selected genre name
    let genreID;
    if (data.genre) {
      genreID = movieId.find(
        (element) => element.name.toLowerCase() === data.genre.toLowerCase()
      ).id;
    } else {
      genreID = "";
    }

    let langShort;
    if (data.language) {
      langShort = languageShort.find(
        (e) => e.language.toLowerCase() === data.language.toLowerCase()
      ).short;
    } else {
      langShort = "";
    }

    // Make API call with form data and genre ID
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${data.year}&with_genres=${genreID}&with_original_language=${langShort}&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
    // Store form data in state
    setFormData(data);
  };

  return (
    <>
      <Navbar />
      <Home />
      <Form onSubmit={handleSubmit} />
      <Short-list />
      <MovieSwiper 
      movies={movies} onMovieSubmit={handleMovieSubmit} />
      <hr />
      <MovieList movies={shortListMovie} />

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


