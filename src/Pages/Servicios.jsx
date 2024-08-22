import serviciosBackground from '../assets/imagenes/fondosDePaginas/background-servicios.jpg';
import CardCatalogo from '../components/CardCatalogo';
import catalogo1 from '../assets/imagenes/catalogo1.jpg';
import catalogo2 from '../assets/imagenes/catalogo2.jpg';
import catalogo3 from '../assets/imagenes/catalogo3.jpg';
import CardServices from '../components/CardServices';
import zapatos from '../assets/imagenes/servicios/zapatos.jpg';
import corbatas from '../assets/imagenes/servicios/corbatas.jpg';
import mancuernillas from '../assets/imagenes/servicios/mancuernillas.jpg';
import carteras from '../assets/imagenes/servicios/carteras.jpg';
import pañuelos from '../assets/imagenes/servicios/pañuelos.jpg';
import boinas from '../assets/imagenes/servicios/boinas.jpg';
import Contacto from '../components/gralComponents/Contacto';
import VisitShowroom from '../components/gralComponents/VisitShowroom';

const services = [
  {
    title: 'Zapatos',
    description:
      'Nuestros zapatos combinan estilos y comodidad, fabricados con los mejores materiales para asegurar durablilidad y elegancia en cada paso.',
    imageUrl: zapatos,
    link: '#',
  },
  {
    title: 'Corbatas',
    description:
      'Descubre nuestra coleccion de corbatas, diseñadas para añadir un toque de sofisticacion a tu atuendo, con patrones y telas exclusivas.',
    imageUrl: corbatas,
    link: '#',
  },
  {
    title: 'Mancuernillas',
    description:
      'Realza tu estilo con nuestras mancuernillas de lujo, elaboradas con metales preciosos y diseños únicos para un acabado perfecto.',
    imageUrl: mancuernillas,
    link: '#',
  },
  {
    title: 'Carteras',
    description:
      'Nuestras carteras de cuero están hechas a mano, combinando funcionalidad y elegancia para acompañarte en tu día a día con estilo.',
    imageUrl: carteras,
    link: '#',
  },
  {
    title: 'Pañuelos',
    description:
      'Añade un toque distintivo a tu traje con nuestros pañuelos de bolsillo, disponibles en una variedad de colores y texturas para cada ocasión.',
    imageUrl: pañuelos,
    link: '#',
  },
  {
    title: 'Boinas',
    description:
      'Completa tu look con nuestras boinas de alta calidad, diseñadas para ofrecerte un estilo clásico y atemporal con un ajuste perfecto.',
    imageUrl: boinas,
    link: '#',
  },
];
const infoCatalogos = [
  {
    titulo: 'TRAJES A LA MEDIDA',
    descripcion:
      'Cada traje es una obra de arte diseñada exclusivamente para ti, asegurando un ajuste perfecto y un estilo impecable. Utilizamos las mejores telas y técnicas de confección para crear un traje que refleje tu personalidad y clase. ',
    imgUrl: catalogo1,
  },
  {
    titulo: 'TRAJES A LA MEDIDA',
    descripcion:
      'Cada traje es una obra de arte diseñada exclusivamente para ti, asegurando un ajuste perfecto y un estilo impecable. Utilizamos las mejores telas y técnicas de confección para crear un traje que refleje tu personalidad y clase. ',
    imgUrl: catalogo2,
  },
  {
    titulo: 'TRAJES A LA MEDIDA',
    descripcion:
      'Cada traje es una obra de arte diseñada exclusivamente para ti, asegurando un ajuste perfecto y un estilo impecable. Utilizamos las mejores telas y técnicas de confección para crear un traje que refleje tu personalidad y clase. ',
    imgUrl: catalogo3,
  },
];

const Servicios = () => {
  return (
    <main className='overflow-hidden'>
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed bg-center "
        style={{
          backgroundImage: `url(${serviciosBackground})`,
        }}>
        <div className="h-screen bg-gradient-to-t from-black to-transparent flex justify-center items-center bg-left flex-col ">
          <div className="text-white text-start w-full max-w-screen-lg px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full space-y-4 md:space-y-0 ">
              <div className="md:w-2/3">
                <h1 className="text-5xl md:text-9xl font-serif mb-4">SERVICIOS</h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  En Antonello, ofrecemos una experiencia de sastrería única, con atención
                  meticulosa a cada detalle. Desde trajes a medida y camisas personalizadas hasta
                  accesorios exclusivos, nuestros servicios están diseñados para realzar tu estilo y
                  confianza. Descubre la excelencia de la confección artesanal y la calidad
                  incomparable que solo una boutique de lujo puede ofrecer.
                </p>
              </div>
              <button className="mt-8 md:mt-0 md:ml-auto bg-[#bbad81] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#a59870] transition-all duration-200 ease-in-out">
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-72 bg-black flex items-center justify-center">
        <h2 className="text-white font-serif text-7xl md:text-9xl">Catálogo</h2>
      </div>

      <article>
        <div className="flex flex-col w-full">
          {infoCatalogos.map((infoCatalogo, index) => (
            <CardCatalogo
              key={index}
              index={index}
              titulo={infoCatalogo.titulo}
              description={infoCatalogo.descripcion}
              imgUrl={infoCatalogo.imgUrl}
            />
          ))}
        </div>
      </article>

      <article className="flex flex-col relative my-16">
        <div id="servicios" className="px-8">
          <h2 className="text-6xl md:text-8xl font-serif text-black">Otros Servicios</h2>
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
      </article>

      <Contacto />
      <VisitShowroom />

      
    </main>
  );
};

export default Servicios;


