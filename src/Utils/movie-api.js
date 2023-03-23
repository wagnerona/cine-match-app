
export const fetchData = async (Genre, Language, Year) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&language=${Language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${Year}&with_genres=${Genre}&with_watch_monetization_types=flatrate`);
  const data = await response.json();
  return data;
};



// https://api.themoviedb.org/3/discover/movie?api_key=9ecb2171ed5e0635071b94b5d388556c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2010&with_genres=28&with_watch_monetization_types=flatrate
