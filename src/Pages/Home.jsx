import backgroundImage from '../assets/imagenes/background-home.png';

import nuestraHistoria from '../assets/imagenes/historia1.jpg';
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

const Home = () => {
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
    },
    {
      title: 'Camisas a la medida',
      description:
        'Nuestras camisas a la medida combinan elegancia y comodidad, con los mejores materiales para un acabado excepcional.',
      imageUrl: camisa1,
      link: '#',
    },
    {
      title: 'Accesorios',
      description:
        'Complementa tu look con nuestros accesorios de lujo seleccionados para complementar tu estilo único.',
      imageUrl: traje2,
      link: '#',
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
            <h1 className="text-5xl md:text-9xl my-2 font-serif mx-4">ANTONELLO</h1>
            <h3 className="text-xl md:text-4xl">Trajes y camisas a medida</h3>
          </div>
          <div className="text-white text-xl font-semibold text-center bg-[#bbad81] py-2 px-6 hover:text-2xl hover:rounded transition-all duration-200 ease-in-out">
            <button>Agendar cita</button>
          </div>
          <div className=" flex flex-col items-center  ">
            <span className="text-white">Explora nuestra colección</span>
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
      <div id="servicios" className="mt-[-15rem] mx-8">
        <h2 className=" text-6xl  md:text-8xl font-serif text-white"> Servicios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {services.map((service, index) => (
            <CardServices
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              link={service.link}
            />
          ))}
        </div>
      </div>

      <section className="flex flex-col relative md:flex-row items-start justify-center py-16  my-[17rem] mx-8">
        <figure className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
          <img
            className="w-full h-auto max-w-4lg object-cover border-4 border-[#bbad81]"
            src={nuestraHistoria}
            alt="Nuestra Historia"
          />
        </figure>
        <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 items-start">
          <span className="block text-xl md:text-5xl font-serif text-right mr-24 ">Nuestra</span>
          <h2 className="text-8xl font-serif text-right text-[#333] mr-48">
            HISTORIA
          </h2>

          <div className='absolute left-[40%] top-[45%] w-3/6 text-left bg-[#bbad7f] py-4 px-8 '>

            <p className="mt-6 text-lg leading-relaxed  text-white">
              Río Bravo by Antonello es una boutique de sastrería, camisería y accesorios para
              caballeros con cuatro décadas de experiencia en el mercado. Como una empresa familiar,
              nos hemos destacado por ofrecer las mejores telas y la confección más refinada del país.
            </p>
            <p className="mt-4 text-lg leading-relaxed  text-white">
              Nuestros diseños personalizados y la calidad excepcional de nuestros materiales y mano
              de obra son reconocidos a nivel mundial. Por ello, representamos las marcas más
              exclusivas de telas y accesorios, como lo son Dormeuil, Zignone, Holland & Sherry, y
              Stefano Ricci.
            </p>
          </div>
        </div>
      </section>

      <Contacto />

      <div className="bg-black  h-64">
        <h1 className="text-white"> experiencias de clientes</h1>
      </div>

      <div className="flex flex-col items-center  bg-[#fbf8f3]">
        <h2 className="text-6xl font-serif my-8">Blog</h2>

        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-16 md:gap8 my-8 mx-16">
          {blogs.map((blog, index) => (
            <CardBlogs
              key={index}
              fecha={blog.fecha}
              titulo={blog.titulo}
              imageUrl={blog.imageUrl}
              description={blog.description}
            />
          ))}
        </div>
        <button className="border bg-[#BCAD7E] text-white py-4 px-8 rounded font-semibold my-4">
          Ver más
        </button>
      </div>

      <VisitShowroom />

      <CarruselBrands />
    </main>
  );
};

export default Home;
