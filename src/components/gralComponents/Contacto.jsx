import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    const templateParams = {
      from_email: email,
    };

    emailjs.send(
      'service_d3pe5ob', 
      'template_ktu1mz3',  
      templateParams,
      'w0qdp6mhuSS8BSVoY' 
    ).then((result) => {
      console.log(result);
      alert('Correo enviado exitosamente');
      setIsLoading(false); 
    }, (error) => {
      console.log(error);
      alert('Hubo un error al enviar el correo');
      setIsLoading(false); 
    });

    setEmail(''); 
  };

  return (
    <section className="bg-Marmol flex flex-col text-center justify-center items-center px-8">
      <h1 className="text-black font-didot text-4xl md:text-7xl py-16">CONTACTANOS</h1>
      <div className='px-4 text-sm md:text-lg font-comissioner'>
        <p> Estamos aquí para ayudarte a lucir tu mejor versión </p>
        <p> Para preguntas, citas o más información sobre nuestros servicios. Contáctanos </p>
      </div>
      <p className='px-4 text-sm md:text-lg font-comissioner'>Nuestro equipo estará encantado de asistirte</p>
      <form onSubmit={handleSubmit} className='flex gap-4 items-center py-16'>
        <span className='font-regular font-commissioner text-xl'>Correo:</span>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isLoading ? "Cargando..." : "Ingresa tu correo"}  
          required
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          disabled={isLoading} 
        />
        <button 
          type="submit" 
          className='bg-white py-2 px-6 rounded text-gray-300 hover:text-gray-800 hover:transition-all duration-300 ease-in-out'
          disabled={isLoading}  
        >
          {isLoading ? "Enviando..." : "Enviar"}  
        </button>
      </form>
    </section>
  );
};

export default Contacto;
