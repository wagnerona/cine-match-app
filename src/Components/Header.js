import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (                
     <header>
      <h3>Header page</h3>
        <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        {/* <NavLink to="/projectGallery">Projects</NavLink> */}
        {/* <NavLink to="/project">Project</NavLink> */}
        </nav>
        </header>
         )};



export default Header;