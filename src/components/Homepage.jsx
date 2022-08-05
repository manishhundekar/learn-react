import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";
import Student from "./Student";
import StudentForm from "./StudentForm";

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
      {/* {cars.map((car) => {
        return <Car details={car} />;
      })} */}
      {/* <Student studentName={"Ramesh Kumar"}/> */}
      <StudentForm />
    </div>
  );
};

export default Homepage;