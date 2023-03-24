import React from 'react';
import './App.css';
import Categories from './pages/Categories';
// import { Routes, Route } from 'react-router-dom'
import { MovieList } from './components/MovieList.js';
import MovieSwiper from './components/MovieSwiper.js';


function App() {
  return (
    <>
    <Categories />
    <Short-list />
    <MovieSwiper />
    <hr />
    <MovieList />
    
    </>
  );
}

export default App;
