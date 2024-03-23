/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Carrusel.scss";
import images from "./images";

const Carousel = () => {
  const [index, setIndex] = useState({ p: 0, c: 1, n: 2 });

  const Back = () => {
    setIndex((prevState) => {
      const newIndex = {
        p: prevState.p > 0 ? prevState.p - 1 : images.length - 1,
        c: prevState.c > 0 ? prevState.c - 1 : images.length - 1,
        n: prevState.n > 0 ? prevState.n - 1 : images.length - 1,
      };
      return newIndex;
    });
  };

  const Next = () => {
    setIndex((prevState) => {
      const newIndex = {
        p:
          prevState.p < images.length - 1
            ? prevState.p + 1
            : (prevState.p = -1),
        c:
          prevState.c < images.length - 1
            ? prevState.c + 1
            : (prevState.c = -1),
        n:
          prevState.n < images.length - 1
            ? prevState.n + 1
            : (prevState.n = -1),
      };
      return newIndex;
    });
  };

  return (
    <div className="carrusel">
      <div className="carrusel-conteiner ">
        <button onClick={Back}>P</button>
        <ImageConteiner imagen={images[index.p]} className="Previus" />
        <ImageConteiner imagen={images[index.c]} className="Current" />
        <ImageConteiner imagen={images[index.n]} className="Next" />
        <button onClick={Next}>N</button>
      </div>
      <div>index</div>
    </div>
  );
};

export default Carousel;
function ImageConteiner({ imagen, className }) {
  return (
    <div key={imagen.index} className={"carrusel-image"}>
      <img src={imagen.imagen} alt={imagen.nombre} className={className} />
    </div>
  );
}
