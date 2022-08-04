import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";

const Homepage = () => {
  const cars = [
    {
      brand: "Hyundai",
      model: "i20",
      color: "White",
    },
    {
      brand: "Maruti",
      model: "Swift",
      color: "Red",
    },
    {
      brand: "Honda",
      model: "City",
      color: "Green",
    },
  ];

  return (
    <div>
      {cars.map((car) => {
        return <Car details={car} />;
      })}
    </div>
  );
};

export default Homepage;