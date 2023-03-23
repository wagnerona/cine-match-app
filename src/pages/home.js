import React from 'react';
import Navbar from './pages/components/Navbar';
import logoImage from './pages/images/logo2.png';

const Home = () => {
  return (
    <div className="homepage">
        <Navbar />
        <div className="logo-background">
          <img src={logoImage} alt="Logo"/>
          <button className="center-button">Let's go!</button>
          
          
          
        </div>
      </div>
    );
  }



export default Home