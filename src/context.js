//context <API>
//useContext hook
// provider is delivery boy
//consumer/(usecontext you)

import React, {useContext, useEffect, useState } from "react";

const CinemaURL = `http://www.omdbapi.com/?apikey=a2b72f3d&s=titanic`;

const AppContext = React.createContext();

//provider function 
const AppProvider = ({ children }) => {
 
   const [isREaching, setisREaching] = useState(true);
   const [cine, setCine] = useState ([]); // giving search result in array
   const [isNoMatch, setIsNoMatch] = useState({display: false, cmnt: ""});

    const getCinemas = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json(); // to get data fetching from API it is returning promise
            console.log(data);

            if (data.Response === "True") {

                setCine(data.Search);
                setisREaching(false);
            }
            else {
                setIsNoMatch({
                    display: true,
                    cmnt: data.error,
                });

            }

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getCinemas(CinemaURL);

    }, []);


// passing all object
 return <AppContext.Provider value={{ isREaching, cine, isNoMatch }}> 
    {children}
 </AppContext.Provider>
};

//global custom hooks 

 const useGlobalContext = () => {
     return useContext(AppContext);
 }

export { AppContext, AppProvider, useGlobalContext };