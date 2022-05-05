import React from 'react';
import ReactDOM from 'react-dom';

// bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';



ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const name = "John Smith"
// const element = <h1>Hello, {name } </h1>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Mini Activity
// Create a variable that is object which contains properties firstName and lastName

// Using a function, join the firstName and lastName and dsiplay it in the browser using ReactDom.render()

// let person = {
//   firstName: "Johann",
//   lastName: "Bleza"
// }

// const fullName = () => {
//   return  <h1> {person.firstName} {person.lastName} </h1>
// }

// ReactDOM.render(
//   fullName(),
//   document.getElementById('root')
// );

