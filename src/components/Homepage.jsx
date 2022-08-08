import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";
import StudentForm from "./StudentForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Student";

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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Student />} />
          <Route exact path="/car" element={<Car details={cars[0]} />} />
          <Route exact path="/studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Homepage;
