import React, { useState } from "react";
import { getAPIStudentsData } from "../util/api";

const Student = () => {
  const studentStyle = {
    border: "2px solid black",
    margin: "10%",
    padding: "20px",
  };

//   1. Hardcoded Data
  const student =  {
    age: "21",
    firstName: "Gopal",
    gender: "Male",
    lastName: "Kumar",
  }

//   const [student, setStudent] = useState({
//     age: "",
//     firstName: "",
//     gender: "",
//     lastName: "",
//   });

//   getAPIStudentsData()
//     .then((respose) => {
//       console.log(respose);
//       setStudent(respose[0])
//     })
//     .catch((err) => {
//       console.log(err);
//     });

  return (
    <div style={studentStyle}>
      <h3>{student.firstName}</h3>
      <h3>{student.lastName}</h3>
      <h3>{student.gender}</h3>
      <h3>{student.age}</h3>
    </div>
  );
};

export default Student;
