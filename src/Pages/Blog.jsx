import React, { useState, useEffect } from 'react';
import blogBackground from "../assets/imagenes/imagenes/blogs/backgground.png";
import CardBlogs from "../components/CardBlogs";
import blog1 from "../assets/imagenes/blog1.jpg";
import blog2 from "../assets/imagenes/blog2.jpg";
import Contacto from "../components/gralComponents/Contacto";
import VisitShowroom from "../components/gralComponents/VisitShowroom";

const blogsArr = [
  {
    createdAt: "fecha",
    title: "La guía definitiva para elegir un traje a medida.",
    imageUrl: blog1,
    description:
      "Descubre cómo elegit el traje perfecto que se ajuste a tu estilo y ocasión.",
  },
  {
    createdAt: "fecha",
    title: "Tendencia en moda masculina para el 2024.",
    imageUrl: blog2,
    description: "Explora las últimas tendencias en moda masculina.",
  },
  {
    createdAt: "fecha",
    title: "Tendencia en moda masculina para el 2024.",
    imageUrl: blog2,
    description: "Explora las últimas tendencias en moda masculina.",
  },
  {
    createdAt: "fecha",
    title: "Tendencia en moda masculina para el 2024.",
    imageUrl: blog2,
    description: "Explora las últimas tendencias en moda masculina.",
  },
  {
    createdAt: "fecha",
    title: "Tendencia en moda masculina para el 2024.",
    imageUrl: blog2,
    description: "Explora las últimas tendencias en moda masculina.",
  },
  {
    createdAt: "fecha",
    title: "Tendencia en moda masculina para el 2024.",
    imageUrl: blog2,
    description: "Explora las últimas tendencias en moda masculina.",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const response = await fetch("https://antonello-panel.onrender.com/api");
//       const data = await response.json();
//       console.log(data)
//       setBlogs(data);
//     };

//     fetchBlogs();

//   }, []);
// console.log(blogs)
  return (
    <main className="bg-[#fbf8f3]">
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed bg-center "
        style={{
          backgroundImage: `url(${blogBackground})`,
        }}
      >
        <div className="h-screen bg-gradient-to-t from-[#002B55] to-transparent flex justify-center items-center bg-left flex-col">
          <div className="text-white text-start w-full max-w-screen-lg px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full space-y-4 md:space-y-0 ">
              <div className="md:w-2/3">
                <h1 className="text-5xl md:text-9xl font-serif mb-4">BLOG</h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  En Antonello, ofrecemos una experiencia de sastrería única,
                  con atención meticulosa a cada detalle. Desde trajes a medida
                  y camisas personalizadas hasta accesorios exclusivos, nuestros
                  servicios están diseñados para realzar tu estilo y confianza.
                  Descubre la excelencia de la confección artesanal y la calidad
                  incomparable que solo una boutique de lujo puede ofrecer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:h-72 bg-[#002B55]"></div>



      <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-16 md:gap8 my-8 mx-16 md:mt-[-10rem]">
        {blogsArr.map((blog, index) => (
          <CardBlogs
            key={index} // Usa un identificador único para las keys
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            createdAt={blog.createdAt}
          />
        ))}
      </div>
      <Contacto />
      <VisitShowroom />
    </main>
  );
};
export default Blog;
