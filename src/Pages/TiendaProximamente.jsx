import React, { useState, useEffect } from 'react';
import blogBackground from "../assets/imagenes/imagenes/blogs/backgground.png";
import CardBlogs from "../components/CardBlogs";
import Contacto from "../components/gralComponents/Contacto";
import VisitShowroom from "../components/gralComponents/VisitShowroom";



const TiendaProximamente = () => {
  

 
  
  return (
    <main className="bg-[#fbf8f3]">
 <div
        id="hero"
        className="bg-cover bg-center bg-no-repeat h-screen bg-fixed"
        style={{
          backgroundImage: `url(${blogBackground})`,
        }}>
        <div className="h-screen bg-gradient-to-t from-black to-transparent flex flex-col justify-end md:pb-40">
          <div className="text-white text-start px-4 md:px-16">
            <h1 className="text-5xl md:text-9xl my-2 font-didot md:mx-4">Tienda Proximamente</h1>
            <p className="text-lg md:text-xl w-full md:w-1/2 py-8">
              Mantente atento a la apertura de nuestro ecomerce y peparate para elevar tu estilo con nuestras prendar y casemires exclusivos.
            </p>
          </div>
        </div>
      </div>

      



      
      <Contacto />
      <VisitShowroom />
    </main>
  );
};
export default TiendaProximamente;
