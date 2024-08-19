import traje1 from '../assets/imagenes/traje1.jpg';
import camisa1 from '../assets/imagenes/camisa1.jpg';
import traje2 from '../assets/imagenes/traje2.jpg';

const CardServices = () => {
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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
      {services.map((service, index) => (
        <div key={index} className="bg-[#bbad81]  shadow-lg overflow-hidden">
          <img src={service.imageUrl} alt={service.title} className="w-full h-80 object-cover" />
          <div className="p-6 bg-[#bbad81]">
            <h3 className="text-3xl font-bold mb-2 text-white">{service.title}</h3>
            <p className=" text-xl mb-4 text-white">{service.description}</p>
            <a
              href={service.link}
              className="text-sm font-semibold text-white underline hover:text-white">
              Ver más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardServices;
