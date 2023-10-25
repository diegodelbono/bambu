import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "../../components";
import {
  Home,
  Especies,
  Nosotros,
  Usos,
  Servicios,
  Insumos,
} from "../../pages";
import Lenis from "@studio-freight/lenis";

import $ from "jquery";
window.$ = $;
window.jQuery = $;

//lenis
const App = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/especies" Component={Especies} exact />
          <Route path="/nosotros" Component={Nosotros} exact />
          <Route path="/usos" Component={Usos} exact />
          <Route path="/servicios" Component={Servicios} exact />
          <Route path="/insumos" Component={Insumos} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
