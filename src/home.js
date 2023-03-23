
// import React, { useContext } from "react";
// //import { AppContext } from "./context";
// import { useGlobalContext } from "./context";

import CinemaAgain from "./CinemaAgain";
import { Search } from "./Search";

 const Home = () => {

    //  const name = useContext(AppContext); // get usecontext data
   

  return (
    <>
   <Search />
   <CinemaAgain />

    </>
  );
}
 export default Home;