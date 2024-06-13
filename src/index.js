//importing the necessary modules from React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // importing the main app component - where all our information is

const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
