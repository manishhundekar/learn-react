import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  const carStyle = {
    border: "2px solid black",
    margin: "10%",
    padding: "20px",
  };

  const car = props.details;

  //Return stateVariable and Func to update stateVariable
  const [carSpeed, setCarSpeed] = useState(0);

  return (
    <div style={carStyle}>
      <h3>{car.brand}</h3>
      <h3>{car.model}</h3>
      <h3>{car.color}</h3>
      <button
        onClick={() => {
          setCarSpeed(carSpeed + 10);
        }}
      >
        Accelerate
      </button>
      <h3>Speed : {carSpeed}KMPH</h3>
      <button
        onClick={() => {
          setCarSpeed(carSpeed - 10);
        }}
      >
        Brake
      </button> <br />
      <a href="/studentform">CLICK HERE TO GO TO STUDENT FORM USING ANCHOR TAG</a> <br />
      <Link to="/studentform"> 
         CLICK HERE TO GO TO STUDENT FORM USING LINK COMPONENT
      </Link>
    </div>
  );
};

export default Car;
