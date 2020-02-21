import React from 'react';
import './App.css';
import StarWarsCharacters from "./components/MovieList";
import logo from "./assets/logo.png";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <div className="LogoContainer">
        <img className="logo" src={logo} alt="star wars official logo"/>
        <h1 className="Header">SWAAPI PEOPLE</h1>
        <StarWarsCharacters />
      </div>
    </div>
  );
}

export default App;