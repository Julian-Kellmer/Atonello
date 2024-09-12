import footerImage from '../../assets/imagenes/footerbg.jpg';

const VisitShowroom = () => {
  return (
    <div
      className="flex-col flex md:flex-row bg-cover bg-no-repeat justify-center  px-4"
      style={{
        backgroundImage: `url(${footerImage})`,
      }}>
      <div className="flex flex-col md:py-24 py-16 gap-4  text-white items-center  flex-1">
        <h5 className="md:text-6xl text-4xl font-didot  "> <span className='font-birthstone'>Visita</span> nuestro</h5>
        <h4 className="md:text-7xl text-4xl font-didot">SHOWROOM</h4>
      </div>
      <div className="flex flex-col text-white   flex-1 py-24 text-center items-center">
        <h5 className="text-2xl px-8 font-commissioner">
          Hamburgo 213, juarez Cuauhtemoc,
          <br /> 06600 CDMX
        </h5>
        <button className="py-4 px-8 max-w-44 text-lg my-6 bg-[#BCAD7E]">Ver ubicacion</button>
      </div>
    </div>
  );
};
export default VisitShowroom;
