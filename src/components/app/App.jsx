import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Home, Bambu, Nosotros, Plantas, Servicios, Insumos } from '../../pages';


import Lenis from '@studio-freight/lenis'

//lenis
const App = () => {

  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false
  });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);


  return (
    <>
      <BrowserRouter>
       
          <Header />
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/bambu" Component={Bambu} exact />
            <Route path="/nosotros" Component={Nosotros} exact />
            <Route path="/plantas" Component={Plantas} exact />
            <Route path="/servicios" Component={Servicios} exact />
            <Route path="/insumos" Component={Insumos} exact />
          </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
};

export default App;
