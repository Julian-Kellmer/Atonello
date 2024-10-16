import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [iconName, setIconName] = useState('menu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIconName((prevName) => (prevName === 'close' ? 'menu' : 'close'));
  }

  function onLinkClick() {
    // Cierra el menú y restablece el ícono a "menu"
    setIsMenuOpen(false);
    setIconName('menu');
  }

  const navItems = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Tienda', href: '/tienda' },
  ];

  return (
    <>
      <header className="bg-[rgb(22,22,22)]">
        <nav className="flex justify-between overflow-hidden">
          <div className="flex flex-col text-center px-8 py-4 md:px-16 text-white">
            <Link to="/" onClick={onLinkClick}>
              <h1 className="text-3xl font-didot">ANTONELLO</h1>
              <h2 className="text-l font-birthstone">Trajes y camisas a medida</h2>
            </Link>
          </div>
          <div
            id="navBar"
            className={`nav-links md:block bg-[#161616] absolute md:relative mt-5 md:min-h-fit top-[8%] left-0 w-full flex items-center justify-center 
              transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 h-[65vh] top-[10vh]' : 'opacity-0 h-0'
              } md:opacity-100 md:h-auto`}>
            <ul className="flex md:flex-row px-5 py-8 flex-col justify-center gap-[6vh] text-xl text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onLinkClick}  // Cierra el menú cuando haces clic
                    className={`text-white py-4 px-8 hover:text-2xl transition-all duration-150 ease-in-out ${
                      location.pathname === item.href
                        ? 'border-b-2 border-[#bbad81] py-2 text-2xl text-[#bbad81]'
                        : ''
                    }`}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className={`text-white py-4 px-8 hover:text-2xl border rounded transition-all duration-150 ease-in-out ${
                    location.pathname === '/citas'
                      ? 'border-b-2 border-[#bbad81] bg-[#bbad81] text-2xl text-white'
                      : ''
                  }`}
                  to="/citas"
                  onClick={onLinkClick}  // Cierra el menú cuando haces clic
                >
                  Citas
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white text-4xl my-auto mr-6 md:hidden flex justify-end">
            <ion-icon onClick={onToggleMenu} name={iconName}></ion-icon>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
