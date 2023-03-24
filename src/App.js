import React from 'react';
import './App.css';
import Categories from './pages/Categories';
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';
import Navbar from './components/navBar';
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Categories />
    <Short-list />
    <MovieSwiper />
    <hr />
    <MovieList />
    
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

      
