import React from 'react';
import './App.css';
import Categories from './pages/Categories';
// import { Routes, Route } from 'react-router-dom'
import { MovieCards } from './components/MovieCard.js';


function App() {
  return (
    <>
    <Categories />
    <MovieCards />
    </>
  );
}

export default App;
