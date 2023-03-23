import React from 'react';
import './App.css';
// import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import { MovieCards } from './Components/MovieCards';

function App() {
  return (
    <>
    <h1>hello App</h1>
    <Header />
    <MovieCards />
   
     </>
  );
}

export default App;
