import React from "react";
import logoImage from './pages/images/logo2.png';


function NavTabs(props) {
  return (
    <nav>
        <div className="logo">
          <img src={logoImage} alt="Logo"/>
        </div>

    <ul className="nav nav-tabs">
     
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#favouriteMovie"
          onClick={() => props.handlePageChange("favouriteMovie")}
          className={props.currentPage === "Favourite Moive" ? "nav-link active" : "nav-link"}
        >
          Favourite Movie
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#recommendation"
          onClick={() => props.handlePageChange("recommendation")}
          className={props.currentPage === "recommendation" ? "nav-link active" : "nav-link"}
        >
          Recommendation
        </a>
      </li>
     
    </ul>
    </nav>
  );
}

export default NavTabs;
