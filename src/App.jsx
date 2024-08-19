import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Servicios from './Pages/servicios';
import Testimonios from './Pages/testimonios';
import Nosotros from './Pages/nosotros';
import Blog from './Pages/blog';
import Citas from './Pages/citas';

function App() {
  
  return (
    <Router>
      <Header/>
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
