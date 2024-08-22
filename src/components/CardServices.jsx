const CardServices = ({ description, title, imageUrl, index }) => {
  return (
    <div key={index} className="transition-all duration-300 ease-in-out md:hover:scale-110 group">
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover bg-no-repeat" />
      <div className="p-6 bg-[#BCAD7E] md:group-hover:bg-[#fbf8f3] transition-colors duration-300 flex flex-col  gap-8">
        <h3 className="text-3xl font-bold mb-2 text-white md:group-hover:text-[#002b55] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xl mb-4 text-white md:group-hover:text-black transition-colors duration-300">
          {description}
        </p>
        <dir>

          <a className="text-sm font-semibold text-white  py-4 px-8 bg-[#bcad7e]">
            Ver más
          </a>
        </dir>
      </div>
    </div>
  );
};

export default CardServices;
