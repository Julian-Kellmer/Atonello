const CardBlogs = ({ fecha, titulo, imageUrl, description }) => {
  return (
    <div id="CardBlog" className="relative my-8 z-10 mx-16">
      <div className="w-full h-[350px]">
        <img className="w-full md:w-1/2 h-full object-cover" src={imageUrl} alt="Blog post" />
      </div>
      <div
        className={`absolute flex flex-col justify-center  bg-white py-4 px-4 w-full md:w-2/4 md:h-3/4 
          top-[90%] left-[25%] transform translate-x-[-10%] translate-y-[-50%] 
          md:top-1/2 md:left-1/2 md:translate-x-[-30%] md:translate-y-[-50%]`}
      >
        <p className="text-red-500">{fecha}</p>
        <h4 className="text-gold font-serif">{titulo}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardBlogs;
