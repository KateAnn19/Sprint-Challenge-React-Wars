import React from "react";


let Home = props => {
    // console.log("these are the props", props);
    return (
      <div className="Individuals">
        <h2>{props.home.name}</h2>
      </div>
    );
  };


  export default Home;