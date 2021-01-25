import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap in index.js // we can use bootstarp or reactstrap
import "alertifyjs/build/css/alertify.min.css"; //import from alertify
import { BrowserRouter } from "react-router-dom";
//index.js is our main Component
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
