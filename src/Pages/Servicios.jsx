import serviciosBackground from '../assets/imagenes/imagenes/Servicices/background Servicies.png';
import CardCatalogo from '../components/CardCatalogo';
import catalogo1 from '../assets/imagenes/imagenes/Servicices/TrajesALaMedida.png';
import catalogo2 from '../assets/imagenes/imagenes/Servicices/catalogo2.jpg';
import catalogo3 from '../assets/imagenes/imagenes/Servicices/accesorios.png';
import CardServices from '../components/CardServices';
import zapatos from '../assets/imagenes/imagenes/Servicices/zapatos.png';
import corbatas from '../assets/imagenes/imagenes/Servicices/corbatas.png';
import mancuernillas from '../assets/imagenes/imagenes/Servicices/macuernillas.png';
import carteras from '../assets/imagenes/servicios/carteras.jpg';
import pañuelos from '../assets/imagenes/servicios/pañuelos.jpg';
import boinas from '../assets/imagenes/servicios/boinas.jpg';
import Contacto from '../components/gralComponents/Contacto';
import VisitShowroom from '../components/gralComponents/VisitShowroom';
import trajeRayasAzulDelante from "../assets/imagenes/modals/trajes/cruzado/rayasAzul/delante.png"
import trajeRayasAzulDetras from "../assets/imagenes/modals/trajes/cruzado/rayasAzul/detras.png"
import trajeRayasAzulPiezas from "../assets/imagenes/modals/trajes/cruzado/rayasAzul/piezas.png"
import trajeAzulMarinoDelante from "../assets/imagenes/modals/trajes/cruzado/azulMarino/delante.png"
import trajeAzulMarinoDetras from "../assets/imagenes/modals/trajes/cruzado/azulMarino/detras.png"
import trajeAzulMarinoPiezas from "../assets/imagenes/modals/trajes/cruzado/azulMarino/piezas.png"
import trajeTostadoDelante from "../assets/imagenes/modals/trajes/tresPiezas/delante.png"
import trajeTostadoDetras from "../assets/imagenes/modals/trajes/tresPiezas/detras.png"
import trajeTostadoPiezas from "../assets/imagenes/modals/trajes/tresPiezas/piezas.png"

import camisasEsmoquinFrente from "../assets/imagenes/modals/camisas/esmoquin/frente.png"
import camisasEsmoquinPieza from "../assets/imagenes/modals/camisas/esmoquin/pieza.png"

import camisasPremiumAzulClaroFrente from "../assets/imagenes/modals/camisas/premium/azulClaro/frente.png"
import camisasPremiumAzulClaroPieza from "../assets/imagenes/modals/camisas/premium/azulClaro/pieza.png"

import camisasPremiumBlancaOxfordFrente from "../assets/imagenes/modals/camisas/premium/blancaOxford/frente.png"
import camisasPremiumBlancaOxfordPieza from "../assets/imagenes/modals/camisas/premium/blancaOxford/pieza.png"

import accesoriosCorbatasAzulOscuro from "../assets/imagenes/modals/accesorios/corbatas/azulOscuro/frente.png"
import accesoriosCorbatasRojo from "../assets/imagenes/modals/accesorios/corbatas/rojo/frente.png"

import accesoriosMancuerillas from "../assets/imagenes/modals/accesorios/mancuernillas/frente.png"

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
    slides: [{
      modalTitle: 'Traje Cruzado',
      modalDescription: 'El traje cruzado es un símbolo de sofisticación y estilo clásico. Con su diseño distintivo de solapas superpuestas y dos filas de botones, este tipo de traje ofrece un ajuste estructurado y una presencia imponente. Ideal para ocasiones formales y eventos importantes, el traje cruzado proyecta autoridad y elegancia, asegurando que te destaques con un look atemporal y refinado.',
      colors: ['Rayas Azul', 'Azul Marino'],
      materials: ['Lino', 'Mezcla Lana'],
      colorImages: [
        [trajeRayasAzulDelante, trajeRayasAzulDetras, trajeRayasAzulPiezas],
        [trajeAzulMarinoDelante, trajeAzulMarinoDetras, trajeAzulMarinoPiezas]
      ]
    },
    {
      modalTitle: 'Traje de 3 PIEZAS',
      modalDescription: ' Perfecto para bodas, eventos formales y ocasiones especiales, el traje de 3 piezas permite un look versátil, ya que el chaleco puede llevarse con o sin la chaqueta, ofreciendo opciones tanto para momentos más formales como para un toque elegante en reuniones más relajadas.',
      colors: ['Tostado'],
      materials: ['Lino'],
      colorImages: [
        [trajeTostadoDelante, trajeTostadoDetras, trajeTostadoPiezas],
        [trajeTostadoDelante, trajeTostadoDetras, trajeTostadoPiezas]
      ]
    }]
  },
  {
    titulo: 'CAMISAS A LA MEDIDA',
    descripcion:
      'Nuestras camisas a la medida combinan elegancia y comodidad, con los mejores materiales para un acabado excepcional. Disfruta de una prenda única que se adapta perfectamente a ti. ',
    imgUrl: catalogo2,
    slides: [{
      modalTitle: 'Camisas PREMIUM',
      modalDescription: 'Descubre nuestra colección de camisas premium, confeccionadas con los tejidos más finos y una precisión impecable. Cada camisa está diseñada para ofrecerte una comodidad sin igual y un ajuste perfecto, haciendo que cada ocasión especial sea aún más memorable',
      colors: ['Blanca Oxford', 'Azul claro'],
      materials: ['Algodon', 'Algodon'],
      colorImages: [
        [camisasPremiumBlancaOxfordFrente, camisasPremiumBlancaOxfordPieza, camisasPremiumBlancaOxfordFrente],
        [camisasPremiumAzulClaroFrente, camisasPremiumAzulClaroPieza, camisasPremiumAzulClaroFrente]
      ]
    },
    {
      modalTitle: 'Camisas Para Esmoquin',
      modalDescription: 'Nuestro exclusivo rango de camisas esmoquin está diseñado para destacar en eventos de gala y ocasiones formales. Con detalles refinados y un ajuste a medida, estas camisas aseguran que te veas impecable y elegante en cada celebración.',
      colors: ['Blanco'],
      materials: ['Lino'],
      colorImages: [
        [camisasEsmoquinFrente, camisasEsmoquinPieza, camisasEsmoquinFrente],
        [camisasEsmoquinPieza, camisasEsmoquinFrente, camisasEsmoquinPieza]
      ]
    }]
  },
  {
    titulo: 'Accesorios',
    descripcion:
      'Completa tu look con nuestros accesorios de lujo, seleccionados para complementar tu estilo único. Desde mancuernillas y corbatas hasta pañuelos y boinas, cada accesorio está diseñado con atención al detalle.',
    imgUrl: catalogo3,
    slides: [{
      modalTitle: 'Accesorios CORBATAS',
      modalDescription: 'Eleva tu estilo con nuestras corbatas de alta gama. Hechas de seda y otros materiales lujosos, cada corbata ofrece un acabado elegante y sofisticado, ideal para complementar cualquier conjunto con un toque de distinción.',
      colors: ['Azul Oscuro', 'Rojo'],
      materials: ['Seda', 'Seda'],
      colorImages: [
        [accesoriosCorbatasAzulOscuro, accesoriosCorbatasAzulOscuro, accesoriosCorbatasAzulOscuro],
        [accesoriosCorbatasRojo, accesoriosCorbatasRojo, accesoriosCorbatasRojo]
      ]
    },
    {
      modalTitle: 'Accesorios MANCUERNILLAS',
      modalDescription: 'Nuestras mancuernillas son el toque final perfecto para tu traje. Diseñadas con elegancia y precisión, aportan un detalle sutil pero impactante a tu atuendo, reflejando un estilo refinado y un gusto impecable.',
      colors: ['Mancuernillas ryan'],
      materials: ['Plata'],
      colorImages: [
        [accesoriosMancuerillas, accesoriosMancuerillas, accesoriosMancuerillas],
        [accesoriosMancuerillas, accesoriosMancuerillas, accesoriosMancuerillas]
      ]
    }]
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
                <h1 className="text-5xl md:text-9xl  font-didot mb-4">SERVICIOS</h1>
                <p className="text-lg md:text-xl font-commissioner leading-relaxed">
                  En Antonello, ofrecemos una experiencia de sastrería única, con atención
                  meticulosa a cada detalle. Desde trajes a medida y camisas personalizadas hasta
                  accesorios exclusivos, nuestros servicios están diseñados para realzar tu estilo y
                  confianza. Descubre la excelencia de la confección artesanal y la calidad
                  incomparable que solo una boutique de lujo puede ofrecer.
                </p>
              </div>
              <button className="mt-8 md:mt-0 md:ml-auto bg-[#bbad81] text-white py-3 px-3 font-commissioner  text-xl hover:bg-[#a59870] transition-all duration-200 ease-in-out">
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-72 bg-black flex items-center justify-center">
        <h2 className="text-white font-didot text-7xl md:text-9xl">Catálogo</h2>
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
              slides={infoCatalogo.slides}
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


