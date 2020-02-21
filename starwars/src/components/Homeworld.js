import React, {useState, useEffect} from "react";
import axios from "axios";

const Homeworld = props => {
    //console.log("This is films props", props);
    //let home = props.homeworld;
    //console.log("this is home", home)
    //const [homes, setHomes] = useState();

    // useEffect(() => {
    //       axios
    //       .get(home)
    //       .then(response => {
    //         console.log(response);

    //         // setHomes(props.homeworld);
    //       })
    //       .catch(error => {console.log("The data was not returned", error)})
    //     }, [])
    return (
      <div>
        <h2>This is Homeworld</h2>
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

    //return(
    // <div className="People">
    //     <h2>Homeworld</h2>
    //     {/* <p>{props.homeworld}</p> */}
    //     <p>Homeworld: {home}</p>
    // </div>
  //);
};





export default Homeworld;