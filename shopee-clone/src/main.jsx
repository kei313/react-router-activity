import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Header from "./components/Header.jsx";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
