import React from "react";
import { useGlobalContext } from './context';



  const CinemaAgain = () => {
    const { cine } = useGlobalContext();
  
  return 
  <>
{cine.map((cine) => {
  return (<div>
    <h1> {cine.title} </h1>
  </div>
  );

})}
  
  </>
    
};

export default CinemaAgain;