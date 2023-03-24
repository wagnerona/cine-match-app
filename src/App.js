import React from 'react';
import './App.css';
import Categories from './pages/Categories';
// import { Routes, Route } from 'react-router-dom'
import { MovieCards } from './components/MovieCard.js';
import Navbar from './components/navBar';
import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';


function App() {
  return (
    <div className='app'>

      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/movie-gallery' element={<MovieCards />} />
      </Routes>

    </div>
  );
}

export default App;




