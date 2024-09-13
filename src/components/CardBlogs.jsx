const CardBlogs = ({  title, imageUrl, description,createdAt }) => {
  return (
    <div id="CardBlog" className="relative z-10 md:mx-16">
      <div className="w-full  h-[200px] sm:h-[400px] md:h-[450px]">
        <img className="w-full md:w-2/3 h-full object-cover" src={imageUrl} alt="Blog post" />
      </div>
      <div
        className={`md:absolute relative flex flex-col justify-center bg-white py-4 px-4 w-full md:w-2/4 md:h-2/4  md:top-1/2 md:left-2/3 md:translate-x-[-20%] md:translate-y-[-50%]`}
      >
        <p className="text-[#bcad7e] py-4 font-comissioner font-medium">{createdAt}</p>
        <h4 className="text-gold font-didot py-2 md:text-3xl text-xl ">{title}</h4>
        <p className="text-gray-600 font-commissioner font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default CardBlogs;
