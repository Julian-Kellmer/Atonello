import footerImage from '../../assets/imagenes/footerbg.jpg';

const VisitShowroom = () => {
  return (
    <div
      className="flex-col  flex md:flex-row bg-cover bg-no-repeat justify-center py-16 px-4 "
      style={{
        backgroundImage: `url(${footerImage})`,
      }}>
      <div className="flex flex-col md:py-16 py-16 gap-4  text-white items-center flex-1">
        <h5 className="md:text-8xl text-4xl font-didot  "> <span className='font-birthstone text-9xl'>Visita</span> nuestro</h5>
        <h4 className="md:text-7xl text-4xl font-didot">SHOWROOM</h4>
      </div>
      <div className="flex flex-col text-white gap-8 flex-1 py-16  text-center items-center justify-center">
        <h5 className="text-3xl px-8 font-commissioner">
          Hamburgo 213, Colonia juarez <br /> Cuauhtemoc,
           06600 CDMX
        </h5>
        <button className="py-2 px-16  text-xl  bg-[#BCAD7E]">Ver ubicacion</button>
      </div>
    </div>
  );
};
export default VisitShowroom;
