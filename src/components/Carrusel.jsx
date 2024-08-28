import React, { useEffect } from "react";
import "../carrusel.css";
import carrusel1 from "../assets/imagenes/carrusel/carrusel-1.jfif";
import carrusel2 from "../assets/imagenes/carrusel/carrusel-2.jfif";
import carrusel3 from "../assets/imagenes/carrusel/carrusel-3.jfif";

const Carrusel = () => {
  useEffect(() => {
    const galleryContainer = document.querySelector(".gallery-container");
    const galleryControlsContainer = document.querySelector(".gallery-controls");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const galleryControls = ["previous", "next"];

    class Carousel {
      constructor(container, items, controls) {
        this.CarouselContainer = container;
        this.CarouselControls = controls;
        this.CarouselArray = [...items];
      }

      updateGallery() {
        this.CarouselArray.forEach((el) => {
          el.classList.remove("gallery-item-1", "gallery-item-2", "gallery-item-3");
        });

        this.CarouselArray.slice(0, 3).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }

      setCurrentState(control) {
        if (control.className.includes("gallery-controls-previous")) {
          this.CarouselArray.unshift(this.CarouselArray.pop());
        } else {
          this.CarouselArray.push(this.CarouselArray.shift());
        }
        this.updateGallery();
      }

      setControls() {
        // Limpia los controles existentes
        galleryControlsContainer.innerHTML = '';

        this.CarouselControls.forEach((control) => {
          const button = document.createElement("button");
          button.className = `gallery-controls-${control}`;
          button.innerText = control.charAt(0).toUpperCase() + control.slice(1);
          galleryControlsContainer.appendChild(button);
        });
      }

      useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
          control.addEventListener("click", (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    exampleCarousel.setControls();
    exampleCarousel.useControls();

    return () => {
      // Cleanup event listeners if needed
      galleryControlsContainer.childNodes.forEach((control) => {
        control.removeEventListener("click", () => {});
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="gallery w-full items-center">
      <div className="gallery-container flex mx-auto items-center h-[400px] max-w-[1000px] relative">
        <img src={carrusel1} className="gallery-item gallery-item-1" data-index="1" alt="" />
        <img src={carrusel2} className="gallery-item gallery-item-2" data-index="2" alt="" />
        <img src={carrusel3} className="gallery-item gallery-item-3" data-index="3" alt="" />
      </div>
      <div className="gallery-controls"></div>
    </div>
  );
};

export default Carrusel;
