import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Bambu, Nosotros, Plantas, Servicios, Insumos } from "./pages";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bambu" element={<Bambu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/insumos" element={<Insumos />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
