import React from 'react';
import './App.css';
import StarWarsCharacters from "./components/MovieList";
import logo from "./assets/logo.png";
import {Styledhone, StyledContainer} from "./components/styled";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledContainer>
        <img className="logo" src={logo} alt="star wars official logo"/>
        <Styledhone className="Header">SWAAPI PEOPLE</Styledhone>
        <StarWarsCharacters />
      </StyledContainer>
    </div>
  );
}

export default App;