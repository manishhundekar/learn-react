// export const getAPIStudentsData = () => {
//   return [
//     {
//       age: "21",
//       firstName: "Gopal",
//       gender: "Male",
//       lastName: "Kumar",
//     },
//   ];
// };

// export const getAPIStudentsData = () => {
//   const data = [
// {
//   age: "21",
//   firstName: "Gopal",
//   gender: "Male",
//   lastName: "Kumar",
// },
//   ];
//   return new Promise((resolve, reject) => {
//     resolve(data);
//     // reject("Error Data not found")
//   });
// };

export const getAPIStudentsData = () => {
  return fetch(
    "https://axis-react-learn-default-rtdb.firebaseio.com/students.json"
  );
};
