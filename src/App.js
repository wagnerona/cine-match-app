import React from 'react';
import './App.css';
import Categories from './pages/Categories';
// import { Routes, Route } from 'react-router-dom'.
import { MovieCards } from './Components/MovieCards.js';

function App() {
  return (
    <>
    <div className="App">
      Hello
    </div>
    <Categories />
    <MovieCards />
    </>
  );
}

export default App;
