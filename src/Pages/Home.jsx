import { useState, useEffect } from 'react';
import backgroundImage from '../assets/imagenes/imagenes/home/background.png';
import nuestraHistoria from '../assets/imagenes/imagenes/home/nuestraHistoria.png';
import CardServices from '../components/CardServices';
import Contacto from '../components/gralComponents/Contacto';
import blog1 from '../assets/imagenes/blog1.jpg';
import blog2 from '../assets/imagenes/blog2.jpg';
import CardBlogs from '../components/CardBlogs';
import traje1 from '../assets/imagenes/traje1.jpg';
import camisa1 from '../assets/imagenes/camisa1.jpg';
import traje2 from '../assets/imagenes/traje2.jpg';
import CarruselBrands from '../components/gralComponents/CarruselBrands';
import VisitShowroom from '../components/gralComponents/VisitShowroom';
import Carrusel from '../components/Carrusel';
import { Link } from 'react-router-dom';



const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("https://antonello-panel-7mcg.onrender.com/api");
      const data = await response.json();

      const formattedData = data.map(post => {
        const date = new Date(post.createdAt);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 

        const formattedDate = `${year}/${month}/${day}`; 

        return { ...post, createdAt: formattedDate }; 
      });

      setPosts(formattedData);
    };

    fetchBlogs();
  }, []);

  const blogs = [
    {
      fecha: 'fecha',
      titulo: 'La guía definitiva para elegir un traje a medida.',
      imageUrl: blog1,
      description: 'Descubre cómo elegit el traje perfecto que se ajuste a tu estilo y ocasión.',
    },
    {
      fecha: 'fecha',
      titulo: 'Tendencia en moda masculina para el 2024.',
      imageUrl: blog2,
      description: 'Explora las últimas tendencias en moda masculina.',
    },
  ];
  const services = [
    {
      title: 'Trajes a la medida',
      description:
        'Cada traje es una obra de arte diseñada exclusivamente para ti, asegurando un ajuste perfecto y un estilo impecable.',
      imageUrl: traje1,
      link: '#',
      slides: [{
        modalTitle: 'Traje Cruzado',
        modalDescription: 'El traje cruzado es un símbolo de sofisticación y estilo clásico. Con su diseño distintivo de solapas superpuestas y dos filas de botones, este tipo de traje ofrece un ajuste estructurado y una presencia imponente. Ideal para ocasiones formales y eventos importantes, el traje cruzado proyecta autoridad y elegancia, asegurando que te destaques con un look atemporal y refinado.',
        colors: ['Rayas Azul', 'Azul Marino'],
        materials: ['Lino', 'Mezcla Lana']
      },
      {
        modalTitle: 'Traje de 3 PIEZAS',
        modalDescription: ' Perfecto para bodas, eventos formales y ocasiones especiales, el traje de 3 piezas permite un look versátil, ya que el chaleco puede llevarse con o sin la chaqueta, ofreciendo opciones tanto para momentos más formales como para un toque elegante en reuniones más relajadas.',
        colors: ['Tostado'],
        materials: ['Lino'],
      }]
    },
    {
      title: 'Camisas a la medida',
      description:
        'Nuestras camisas a la medida combinan elegancia y comodidad, con los mejores materiales para un acabado excepcional.',
      imageUrl: camisa1,
      link: '#',
      slides: [{
        modalTitle: 'Camisas PREMIUM',
        modalDescription: 'Descubre nuestra colección de camisas premium, confeccionadas con los tejidos más finos y una precisión impecable. Cada camisa está diseñada para ofrecerte una comodidad sin igual y un ajuste perfecto, haciendo que cada ocasión especial sea aún más memorable',
        colors: ['Blanca Oxford', 'Azul claro'],
        materials: ['Algodon', 'Algodon']
      },
      {
        modalTitle: 'Camisas Para Esmoquin',
        modalDescription: 'Nuestro exclusivo rango de camisas esmoquin está diseñado para destacar en eventos de gala y ocasiones formales. Con detalles refinados y un ajuste a medida, estas camisas aseguran que te veas impecable y elegante en cada celebración.',
        colors: ['Blanco'],
        materials: ['Lino'],
      }]
    },
    {
      title: 'Accesorios',
      description:
        'Complementa tu look con nuestros accesorios de lujo seleccionados para complementar tu estilo único.',
      imageUrl: traje2,
      link: '#',
      slides: [{
        modalTitle: 'Accesorios CORBATAS',
        modalDescription: 'Eleva tu estilo con nuestras corbatas de alta gama. Hechas de seda y otros materiales lujosos, cada corbata ofrece un acabado elegante y sofisticado, ideal para complementar cualquier conjunto con un toque de distinción.',
        colors: ['Azul Oscuro', 'Rojo'],
        materials: ['Seda', 'Seda']
      },
      {
        modalTitle: 'Accesorios MANCUERNILLAS',
        modalDescription: 'Nuestras mancuernillas son el toque final perfecto para tu traje. Diseñadas con elegancia y precisión, aportan un detalle sutil pero impactante a tu atuendo, reflejando un estilo refinado y un gusto impecable.',
        colors: ['Mancuernillas ryan '],
        materials: ['Plata'],
      }]
    },
  ];

  return (
    <main>
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="h-screen  bg-gradient-to-t from-black to-trasparent flex items-center justify-around bg-left  flex-col">
          <div className="text-white text-center   ">
            <h1 className="text-5xl md:text-9xl my-2 font-didot mx-4">ANTONELLO</h1>
            <h3 className=" text-xl md:text-6xl font-birthstone">Trajes y camisas a medida</h3>
          </div>
          <div className="text-white text-xl font-regular text-center bg-[#bbad81] py-2 px-6 hover:text-2xl hover:rounded transition-all duration-200 ease-in-out font-commissioner">
            <button> <Link to="/citas">Agendar cita </Link></button>
          </div>
          <div className=" flex flex-col items-center  ">
            <span className="text-white font-commissioner">Explora nuestra colección</span>
            <svg
              className="text-[#bbad81] cursor-pointer m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="#bbad81"
              stroke="#bbad81"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M16 15l-4 4" />
              <path d="M8 15l4 4" />
            </svg>
          </div>
        </div>
      </div>

      <div className=" md:h-72 bg-black "></div>
      <div id="servicios" className="mt-[-15rem] md:mx-8 mx-4">
        <h2 className=" text-6xl  md:text-8xl font-didot text-white"> Servicios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {services.map((service, index) => (
            <CardServices
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              link={service.link}
              slides={service.slides}
            />
          ))}
        </div>
      </div>
      <section className="flex flex-col relative md:flex-row items-start justify-center py-16  md:mt-[17rem]  md:mx-8">
        <figure className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
          <img
            className="w-full h-auto max-w-4lg object-cover border-4 border-[#bbad81]"
            src={nuestraHistoria}
            alt="Nuestra Historia"
          />
        </figure>
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 items-start">
          <span className="block text-xl md:text-5xl font-birthstone md:text-right md:mr-24 ">Nuestra</span>
          <h2 className="md:text-8xl text-4xl font-didot text-left md:text-right text-[#333]  ">
            HISTORIA
          </h2>

          <div className='md:absolute relative md:left-[40%] md:top-[45%] md:w-3/6 text-left bg-[#bbad7f] py-4 px-6 font-comissioner   '>

            <p className="mt-6 md:text-lg leading-relaxed  text-white">
              Río Bravo by Antonello es una boutique de sastrería, camisería y accesorios para
              caballeros con cuatro décadas de experiencia en el mercado. Como una empresa familiar,
              nos hemos destacado por ofrecer las mejores telas y la confección más refinada del país.
            </p>
            <p className="mt-4 md:text-lg leading-relaxed  text-white">
              Nuestros diseños personalizados y la calidad excepcional de nuestros materiales y mano
              de obra son reconocidos a nivel mundial. Por ello, representamos las marcas más
              exclusivas de telas y accesorios, como lo son Dormeuil, Zignone, Holland & Sherry, y
              Stefano Ricci.
            </p>
          </div>
        </div>
      </section>

      <Contacto />

      <div className="bg-black flex w-full hidden md:block asasasa">
        <Carrusel />
      </div>

      <div className="  bg-[#fbf8f3] flex flex-col py-8 ">
        <h2 className="text-6xl font-didot my-8 mx-auto py-8">Blog</h2>

        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 py-8 ">
          {console.log(posts)}
          {posts.map((post, index) => (
            <CardBlogs
              key={index}
              createdAt={post.createdAt}
              title={post.title}
              imageUrl={post.imageUrl}
              description={post.description}
            />
          ))}
        </div>
        {/* <button className="border bg-[#BCAD7E] text-white py-4 px-8 rounded font-commissioner font-semibold my-4">
          <Link to="/blog">Ver más</Link>
        </button> */}
      </div>

      <VisitShowroom />


    </main>
  );
};

export default Home;
