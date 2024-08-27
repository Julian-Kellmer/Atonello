import backgroundImage from '../assets/imagenes/fondosDePaginas/background-nosotros.jfif';
import localImage from '../assets/imagenes/nosotros/local.png';
import antonelloProfile from '../assets/imagenes/nosotros/Antonello-profile.jfif';
import antonelloTest from '../assets/imagenes/nosotros/antoneloTest.jfif';
import card1 from '../assets/imagenes/nosotros/card1.jfif';
import card2 from '../assets/imagenes/nosotros/card2.jfif';
import card3 from '../assets/imagenes/nosotros/card3.jfif';
import CardNosotros from '../components/CardNosotros';
import Contacto from '../components/gralComponents/Contacto';
import VisitShowroom from '../components/gralComponents/VisitShowroom';




const Nosotros = () => {
  const cardData = [
    {
      imgUrl: card1,
      text: 'Con más de 40 años en la industria, Antonello ha establecido una reputación de excelencia y lujo. Nuestra historia está marcada por un compromiso constante con la innovación y la satisfacción del cliente, convirtiéndonos en un referente en el mundo de la sastrería de alta gama.',
      title: 'Nuestro Legado'
    },
    {
      imgUrl: card2,
      text: 'En Antonello, creemos en la elegancia atemporal y la artesanía de alta calidad. Cada prenda que confeccionamos refleja nuestra dedicación a estos valores, asegurando que cada cliente reciba un producto único y hecho a la medida.',
      title: 'Nuestra Filosofía'
    },
    {
      imgUrl: card3,
      text: 'En Antonello, creemos en la elegancia atemporal y la artesanía de alta calidad. Cada prenda que confeccionamos refleja nuestra dedicación a estos valores, asegurando que cada cliente reciba un producto único y hecho a la medida.',
      title: 'Nuestra Filosofía'
    }]
  return (
    <main className='bg-[#fbf8f3]'>
      <div
        id="hero"
        className="bg-cover bg-center bg-no-repeat h-screen bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="h-screen bg-gradient-to-t from-black to-transparent flex flex-col justify-end pb-40">
          <div className="text-white text-start px-16">
            <h1 className="text-5xl md:text-9xl my-2 font-serif mx-4">Nuestra Historia</h1>
            <p className="text-lg md:text-xl w-full md:w-1/2 pt-8">
              Hace cuatro décadas, Antonello ha sido sinónimo de elegancia, calidad y tradición en
              el mundo de la sastrería. Fundada por Antonello, nuestra boutique ha crecido para
              convertirse en un referente de la moda masculina, ofreciendo trajes a medida, camisas
              personalizadas y una selección exclusiva de accesorios.
            </p>
          </div>
        </div>
      </div>

      <div className="md:h-72 bg-black"></div>
      <figure className="relative h-72 md:h-96 w-full  -mt-36 md:-mt-48">
        <img src={localImage} alt="Imagen de la tienda" className="mx-auto object-cover w-3/4 h-full" />
      </figure>

      <section className='px-16 py-32' >
        <div >
          <div className='flex flex-col'></div>
          <h2 className='font-serif  text-6xl'>Nuestra mision</h2>
          <p className='w-2/3 py-8 '>
            En Antonello, nuestra misión es transformar la manera en que los hombres se visten, proporcionando trajes y prendas que no solo se ajusten perfectamente, sino que también reflejen el estilo y la personalidad de cada cliente. Nos enorgullece ser parte de los momentos más importantes en la vida de nuestros clientes, desde bodas y galas hasta reuniones de negocios y eventos especiales.</p>
        </div>
        <div className='relative w-full '>
          <img src={antonelloProfile} alt="" className='md:w-[700px] ' />
          <div className='bg-white absolute left-[30%] top-[30%] w-3/5  '>
            <p className='px-8 py-8'>Antonello Martínez nació en una pequeña ciudad, donde desde muy joven mostró un gran interés por la moda y el diseño. Tras años de aprendizaje, Antonello decidió llevar su pasión y habilidades a un nuevo nivel. En busca de nuevos horizontes y oportunidades, se trasladó y fundó su propia sastrería en 1984. <br /> <br />

              Con un enfoque en la calidad artesanal y la atención meticulosa a los detalles, Antonello rápidamente se ganó una reputación por sus trajes impecables y su dedicación al cliente. Su visión siempre ha sido ofrecer prendas que no solo se ajusten perfectamente, sino que también cuenten una historia personal y única para cada cliente. Hoy en día, aunque Antonello ha pasado el testigo a la nueva generación, su legado y valores continúan siendo el corazón de nuestra boutique</p>
            <div className='bg-[#bbad81] w-full h-4'></div>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-start px-16 py-8">
        <div className="w-full md:w-1/2 pr-8">
          <h3 className="text-6xl font-serif mb-8">Nuestros Valores</h3>
          <ul className="space-y-8">
            <li>
              <p className=" text-xl">
                <span className="font-bold text-[#bbad81] text-2xl mr-2">Calidad:</span>
                Utilizamos solo las mejores telas y materiales, seleccionados cuidadosamente de las casas más prestigiosas como Dormeuil, Zignone, Holland and Sherry y Stefano Ricci.
              </p>
            </li>
            <li>
              <p className=" text-xl"><span className="font-bold text-gold mr-2 text-[#bbad81] text-2xl">Personalización:</span>Cada prenda es única y hecha a la medida, adaptándose a las necesidades y gustos específicos de cada cliente. </p>
            </li>
            <li>
              <p className="text-xl">
                <span className="font-bold mr-2 text-[#bbad81] text-2xl">Tradición:</span>
                Combinamos técnicas de sastrería clásica con innovaciones modernas para ofrecer productos atemporales y contemporáneos.
              </p>
            </li>
            <li>
              <p className="text-xl">
                <span className="font-bold  mr-2 text-[#bbad81] text-2xl">Excelencia en el Servicio:</span>
                Nos dedicamos a proporcionar una experiencia excepcional, desde la primera consulta hasta la entrega final del traje.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <img src={antonelloTest} alt="Valores de Antonello" className="w-full h-auto object-cover" />
        </div>
      </section>

      <article className="flex justify-center w-full py-24">
        {cardData.map((data, index) => (
          <CardNosotros
            key={index}
            title={data.title}
            text={data.text}
            imgUrl={data.imgUrl}
          />
        ))}
      </article>

      <Contacto />
      <VisitShowroom />

    </main> 
  );
};
export default Nosotros;
