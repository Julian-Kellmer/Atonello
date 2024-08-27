import backgroundImage from "../assets/imagenes/fondosDePaginas/background-citas.jfif"
import CarruselBrands from "../components/gralComponents/CarruselBrands"
const Citas = () => {
  return (
    <main className='bg-[#faf8f2]'>
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="h-screen  bg-gradient-to-t from-black to-trasparent flex items-center justify-around bg-left  flex-col">
          <div className="text-white text-center  flex flex-col gap-4 ">
            <h1 className="text-5xl md:text-9xl my-2 font-serif mx-4 ">CITAS</h1>
            <div className="text-white text-xl font-semibold text-center max bg-[#bbad81] py-2 px-16 hover:text-2xl hover:rounded transition-all duration-200 ease-in-out">
              <button>Agendar cita</button>
            </div>
          </div>

          <div className=" flex flex-col items-center  ">
            <span className="text-white">Ver más</span>
            <svg
              className="text-[#bbad81] cursor-pointer m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="#bbad81"
              stroke="#bbad81"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M16 15l-4 4" />
              <path d="M8 15l4 4" />
            </svg>
          </div>
        </div>
      </div>

      <div className=" md:h-72 bg-black "></div>
      <section className="md:py-16 md:px-16 mt-[-15rem] flex gap-16 " >
        <div className="flex flex-col w-2/3">
          <div className=" md:h-[600px] border">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7203543967503!2d-99.16883849999999!3d19.424485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff49ebfe78d1%3A0xde519efdd0326270!2zSGFtYnVyZ28gMjEzLCBKdcOhcmV6LCBDdWF1aHTDqW1vYywgMDY2MDAgQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses!2sar!4v1724780769551!5m2!1ses!2sar" width={"100%"} height={"100%"}>
            </iframe>
          </div>
          <div className="flex justify-between py-8">
            <button className="bg-black py-6 px-8 rounded text-white"> Ver ubicacion</button>
            <p className="text-2xl text-[#a19166] text-end">Hamburgo 213, Juarez Cuauhthémoc,<br /> 06600 CDMX</p>
          </div>
        </div>
        <div className=" flex flex-col w-1/3 text-xl justify-center items-center pt-8" >
          <div className="flex flex-col text-center pb-8">

            <h5 className="font-serif text-6xl pt-12 pb-4">Horario</h5>

            <p ><b> Luneas a viernes</b></p>
            <p className="pb-8 text-[#a19166] ">08:00 am- - 06:00 pm</p>

            <p  > <b> Sabado</b></p>
            <p className="pb-8 text-[#a19166] ">09:00 am- - 02:00 pm</p>
          </div>
          <div className="flex flex-col text-center">

            <h5 className="font-serif text-6xl pb-4">Teléfono</h5>
            <p className="pb-4 text-[#a19166]"> <b className="text-black">Cel.</b> 55 92 33 12</p>
            <p className="text-[#a19166]"><b className="text-black">Tel.</b>55 30 58 02 15</p>
          </div>
        </div>
      </section>
      <CarruselBrands/>
    </main>
  )
}
export default Citas