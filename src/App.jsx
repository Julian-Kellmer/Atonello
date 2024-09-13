import { useState } from 'react';
import Header from './components/gralComponents/Header';
import Footer from './components/gralComponents/Footer';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import Servicios from './Pages/Servicios';
import Testimonios from './Pages/testimonios';
import Nosotros from './Pages/Nosotros';
import Blog from './Pages/Blog';
import Citas from './Pages/Citas';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/testimonios" element={<Testimonios/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/citas" element={<Citas/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
