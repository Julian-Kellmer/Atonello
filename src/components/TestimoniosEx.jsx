const TestimoniosEx = ({ name, subName, description, images, index }) => {
  return (
    <div className="pb-24 mt-8">
      <div className="flex gap-8 px-16 py-8 justify-around">
        {/* Render only the first image on mobile, all images on larger screens */}
        {images.map((image, idx) => (
          <img
            key={idx}
            className={`h-auto object-contain ${idx === 0 ? 'block' : 'hidden'} md:block md:w-[30%]`}
            src={image}
            alt={`Testimonio ${name} ${idx}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-cols-[2fr_1fr_2fr] gap-8 items-center mx-auto py-4">
        {/* Left Column: Name and SubName */}
        <div className={`flex flex-col text-center ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-3'}`}>
          <h3 className="md:text-8xl text-[2rem] font-didot">{name}</h3>
          <div className="font-commissioner">
            <p className="text-xl md:px-32 pt-8 font-medium leading-relaxed">
              <span className="text-3xl text-Dorado">"</span> {subName}
              <span className="text-2xl text-Dorado">"</span>
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] h-full bg-[#bbad7e] mx-auto order-2"></div>

        {/* Right Column: Description */}
        <div className={`px-8 bg-[#f2efea] ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
          <p className="md:text-xl text-lg md: py-8 pl-8 pt-8 font-commissioner leading-relaxed text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniosEx;
