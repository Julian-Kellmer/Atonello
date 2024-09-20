import { useState } from 'react';
import Header from './components/gralComponents/Header';
import Footer from './components/gralComponents/Footer';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import Servicios from './Pages/Servicios';
import Testimonios from './Pages/Testimonios';
import Nosotros from './Pages/Nosotros';
import Blog from './Pages/Blog';
import Citas from './Pages/Citas';
import TiendaProximamente from './Pages/TiendaProximamente';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/testimonios" element={<Testimonios/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/tienda" element={<TiendaProximamente/>} />
        <Route path="/citas" element={<Citas/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
