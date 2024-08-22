import footerImage from '../../assets/imagenes/footerbg.jpg';

const VisitShowroom = () => {
  return (
    <div
      className="flex-col flex md:flex-row bg-cover bg-no-repeat justify-center "
      style={{
        backgroundImage: `url(${footerImage})`,
      }}>
      <div className="flex flex-col py-24 gap-4  text-white items-center  flex-1">
        <h5 className="text-6xl ">visita nuestro</h5>
        <h4 className="md:text-7xl text-4xl ">SHOWROOM</h4>
      </div>
      <div className="flex flex-col text-white   flex-1 py-24 text-center items-center">
        <h5 className="text-2xl px-8">
          Hamburgo 213, juarez Cuauhtemoc,
          <br /> 06600 CDMX
        </h5>
        <button className="py-4 px-8 max-w-44 text-lg my-6 bg-[#BCAD7E]">Ver ubicacion</button>
      </div>
    </div>
  );
};
export default VisitShowroom;
