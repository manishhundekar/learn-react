import React from "react";
import { useState } from "react";

const StudentForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    console.log("Change in Form Data")
    // console.log(event)
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })
    console.log(formData)
  }

  return (
    <div>
      <form>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default StudentForm;
