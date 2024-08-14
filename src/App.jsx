import { useState } from 'react';

import './App.css';

function App() {
  const [iconName, setIconName] = useState("menu")
  function onToggleMenu() {
    // Cambia el icono entre "menu" y "close"
    setIconName((prevName) => (prevName === 'menu' ? 'close' : 'menu'));
  }

  return (
    <main>
      <header class="bg-[#161616]">
        <nav class="flex justify-between">
          <div class="flex flex-col px-16 py-4 text-white">
            <h1 class="text-4xl font-bold">ANTONELLO</h1>
            <h2 class="text-xl font-medium">Trajes y camisas a medida</h2>
          </div>
          <div class="absolute md:min-h-fit md:static top-[-100%] min-h-[60vh] left-0 w-full flex items-center md:justify.end">
            <ul class="flex md:flex-row px-5 py-8 m-4 flex-col flex-grow justify-end md:gap-24 gap-[4vh]">
              <li>
                <a href="/" class="text-white py-4 px-8">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/" class="text-white py-4 px-8">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="/" class="text-white py-4 px-8">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/" class="text-white py-4 px-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" class="text-white py-4 px-8 md:border">
                  Citas
                </a>
              </li>
            </ul>
          </div>
          <ion-icon
            onClick={onToggleMenu}
            name={iconName}
            class="text-white text-4xl md:hidden cursor-pointer mt-8 mr-4"></ion-icon>
        </nav>
      </header>
    </main>
  );
}

export default App;
