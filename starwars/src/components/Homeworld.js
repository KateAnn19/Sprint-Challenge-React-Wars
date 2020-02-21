import React, {useState, useEffect} from "react";
import axios from "axios";

//imports

import Home from "./home";

const Homeworld = props => {
    console.log("This is films props", props);
    let home = props.homeworld;
    // console.log("this is home", home)
    const [homes, setHomes] = useState([]);

    useEffect(() => {
          axios
          .get(home)
          .then(response => {
            console.log("This is the second axios call", response);

            setHomes(response.data.name);
            console.log(homes)
          })
          .catch(error => {console.log("The data was not returned", error)})
        }, [])
    return (
      <div>
        {/* {homes.map((h, index) =>(
          <Home key={index} home={h}/>
        ))} */}
        {/* when using this you get rid of return keyword */}
      </div>
    )




    // for(let i = 0 ; i < home.length ; i++){
    //   useEffect(() => {
    //     axios
    //     .get(home[i])
    //     .then(response => {
    //       setHomes(props.homeworld);
    //     })
    //     .catch(error => {console.log("The data was not returned", error)});
    //   }, [])
    // }

    return(
    <div className="People">
        <h2>Homeworld</h2>
        {/* <p>{props.homeworld}</p> */}
        <p>Homeworld: {home}</p>
    </div>
  );
};





export default Homeworld;