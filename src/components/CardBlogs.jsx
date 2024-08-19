const CardBlogs = ({ fecha, titulo, imageUrl, description }) => {
    return (
      <div id="CardBlog" className="relative">
        <div className="w-full h-[350px]">
          <img className="w-full h-full object-cover" src={imageUrl} alt="Blog post" />
        </div>
        <div
          className="absolute flex flex-col justify-center w-full bg-white py-4 px-4"
          style={{ top: '90%', left: '25%', transform: 'translate(-10%, -50%)' }}
        >
          <p className="text-red-500">{fecha}</p>
          <h4 className="text-gold font-serif">{titulo}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardBlogs;
  