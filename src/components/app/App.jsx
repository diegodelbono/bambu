import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../../components';
import { Home, Bambu, Nosotros, Plantas, Servicios, Insumos } from '../../pages';
const App = () => {

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
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
