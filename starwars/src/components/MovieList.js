import React, { useState, useEffect } from "react";
import axios from "axios";

//local imports
import MovieCard from "./MovieCard";


//-------------------------------------------------------
//Keep Just what's above to make it work 
//---------------------------------------------------------


function StarWarsCharacters() {
  const [characters, setData] = useState([]);
  useEffect(() => {
      axios
      .get(`https://swapi.co/api/people/`)
      
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {console.log("The data was not returned", error)});
  }, [])
  return (
    <div className="People">
      {characters.map(person => (
        <MovieCard key={person.name} data={person}/>
      ))}
    </div>
  );
}

export default StarWarsCharacters;