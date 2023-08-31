import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../../components";
import { Home, Bambu, Nosotros, Plantas, Servicios, Insumos, Pruebas } from "../../pages";
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


  return (
    <>
      <BrowserRouter basename="/bambu">
        <Header />
        <Routes>

          <Route path="/" Component={Home} />
          <Route path="/bambu" Component={Bambu} exact />
          <Route path="/nosotros" Component={Nosotros} exact />
          <Route path="/plantas" Component={Plantas} exact />
          <Route path="/servicios" Component={Servicios} exact />
          <Route path="/insumos" Component={Insumos} exact />
          <Route path="/pruebas" Component={Pruebas} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
