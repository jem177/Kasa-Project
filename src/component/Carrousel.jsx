import { useState } from "react";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";

export function Carrousel({ pictures, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <img
            className="arrow arrow-left"
            src={arrowLeft}
            onClick={handlePrevImage}
            alt="Previous"
          />
          <img
            className="arrow arrow-right"
            src={arrowRight}
            onClick={handleNextImage}
            alt="Next"
          />
        </>
      )}
      <img
        className="carousel-img"
        src={pictures[currentImageIndex]}
        alt={`${title} ${currentImageIndex + 1}`}
      />
    </div>
  );
}
