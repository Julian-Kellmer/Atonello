const CardBlogs = ({ title, imageUrl, description, createdAt }) => {
  return (
    <div id="CardBlog" className="relative md:mx-16 outline outline-red-500 outline-1 ">
      <div className="  sm:h-[400px] md:h-[450px]">
        <img className=" w-auto max-h-full md:w-2/3 object-cover " src={imageUrl} alt="Blog post" />
      </div>
      <div
        className={`md:absolute relative flex flex-col justify-center bg-white py- px-4 w-full md:w-2/4 md:h-3/4  md:top-1/2 md:left-2/3 md:translate-x-[-20%] md:translate-y-[-50%]`}
      >
        <p className="text-[#bcad7e] py-4 font-comissioner font-medium">{createdAt}</p>
        <h4 className="text-gold font-semibold font-didot py-2 md:text-3xl text-xl ">{title}</h4>
        <p className="text-gray-600 font-commissioner font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default CardBlogs;
