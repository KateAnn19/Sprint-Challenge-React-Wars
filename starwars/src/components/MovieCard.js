import React from "react";
import { StyledDiv, StyledAddress } from "./styled";

//--------------------------------------------------------
//Keep Just What's Above for it to work
//----------------------------------------------------------

//---------------------------------------------------------
//New Changes Start Here
//----------------------------------------------------------
// import Picture from "./url.js";
// import Explanation from  "./explanation.js"
// import PictureTitle from "./title.js"
// import Date from "./date.js"

//--------------------------------------------------------------
//local imports
//---------------------------------------------------------------

import Homeworld from "./Homeworld"
// import './Components/App.css';


const MovieCard = props => {
  console.log("these are the props", props);
  return (
    <div className="Individuals">
      <h2>{props.data.name}</h2>
      <div>
      <p>Height: {props.data.height}</p>
      <p>Hair Color: {props.data.hair_color}</p>
      <p>Skin Color: {props.data.skin_color}</p>
      <p>Gender: {props.data.gender}</p>
      <p>Birthday: {props.data.birth_year}</p>
      <p>Weight: {props.data.mass}</p>
      {/* <Homeworld/> */}
      {/* <Homeworld homeworld= {props.data.homeworld}/> */}
      </div>
    </div>
  );
};

export default MovieCard;