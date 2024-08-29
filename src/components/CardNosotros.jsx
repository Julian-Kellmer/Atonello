const CardNosotros = ({ imgUrl, title, text }) => {
    return (
      <div className="bg-transparent  max-w-[350px] mx-16 flex flex-col items-center text-center p-4 scale-110">
        <div className="relative w-full">
          {/* Contenedor de la Imagen con Fondo Dorado en la Mitad Inferior */}
          <div className="w-full h-48 relative flex flex-col justify-end">
            <img
              className="rounded-full w-[165px] h-[165px] object-cover mx-auto absolute left-1/2 transform -translate-x-1/2 mt-[-25px] top-0"
              src={imgUrl}
              alt={title}
            />
            <div className="bg-[#BCAD7E] text-center py-2 flex justify-center items-end w-full h-3/6 mt-[-2rem]">
              <h3 className="text-xl font-serif text-white">{title}</h3>
            </div>
          </div>
        </div>
  
        {/* Contenido del Texto */}
        <div className="p-6 bg-white">
          <p className="text-gray-600 text-base">{text}</p>
        </div>
      </div>
    );
  };
  
  export default CardNosotros;
  