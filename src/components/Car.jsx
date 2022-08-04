import React from "react";
import { useState } from "react";

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
      </button>
    </div>
  );
};

export default Car;
