import React from "react";
import ReactDOM from "react-dom";
//import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header, Footer, App } from "./components";
// import { Home, Bambu, Nosotros, Plantas, Servicios, Insumos } from "./pages";
import { App } from "./components";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/styles.scss";

// import { gsap } from 'gsap';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<div>HOLA SITE 2</div>);

// document.getElementById("main").innerText = "chau";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
