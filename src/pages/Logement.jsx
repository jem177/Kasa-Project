import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/data/location.json")
      .then((response) => response.json())
      .then((data) => {
        const cardData = data.find((item) => item.id.toString() === id);
        if (!cardData) {
          navigate("/error");
        } else {
          setData(cardData);
        }
      });
  }, [id, navigate]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={
            i <= rating ? "fa-solid fa-star" : "fa-solid fa-star star-empty"
          }
        ></i>
      );
    }
    return stars;
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="card-detail">
      <div className="carousel">
        {data.pictures.length > 1 && (
          <img
            className="arrow arrow-left"
            src={arrowLeft}
            onClick={handlePrevImage}
          ></img>
        )}
        <img
          className="carousel-img"
          src={data.pictures[currentImageIndex]}
          alt={`${data.title} ${currentImageIndex + 1}`}
        />
        {data.pictures.length > 1 && (
          <img
            className="arrow arrow-right"
            src={arrowRight}
            onClick={handleNextImage}
          ></img>
        )}
      </div>
      <div className="text-content">
        <div className="housing-texts">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host">
          <div className="host-text">
            <h3>{data.host.name}</h3>
            <img src={data.host.picture} alt={data.host.name} />
          </div>
          <div className="rating">{renderStars(data.rating)}</div>
        </div>
      </div>
      <div className="housing-dropdown">
        <div className="equipment dropdown">
          <h3 onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
            Equipments
            <img
              src={isEquipmentsOpen ? arrowUp : arrowDown}
              alt={
                isEquipmentsOpen ? "Flèche vers le haut" : "Flèche vers le bas"
              }
              className="about-arrow"
            />
          </h3>
          {isEquipmentsOpen && (
            <ul className="dropdown-text">
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="description dropdown">
          <h3 onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            Description
            <img
              src={isDescriptionOpen ? arrowUp : arrowDown}
              alt={
                isDescriptionOpen ? "Flèche vers le haut" : "Flèche vers le bas"
              }
              className="about-arrow"
            />
          </h3>
          {isDescriptionOpen && (
            <p className="dropdown-text">{data.description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
