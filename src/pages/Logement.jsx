import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrowRight from "../assets/images/arrowRight.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import starFilled from "../assets/images/star-filled.svg";
import starEmpty from "../assets/images/star-empty.svg";
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
        <img
          key={i}
          src={i <= rating ? starFilled : starEmpty}
          alt={i <= rating ? "filled star" : "empty star"}
          className="star"
        />
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
      <div>
        <h1>{data.title}</h1>
        <p>
          {data.location}
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="host">
        <h3>{data.host.name}</h3>
        <img src={data.host.picture} alt={data.host.name} />
        <div className="rating">{renderStars(data.rating)}</div>
      </div>
      <div>
        <h3
          onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
          style={{ cursor: "pointer" }}
        >
          Equipments{" "}
          <img
            src={isEquipmentsOpen ? arrowUp : arrowDown}
            alt={
              isEquipmentsOpen ? "Flèche vers le haut" : "Flèche vers le bas"
            }
            className="about-arrow"
          />
        </h3>
        {isEquipmentsOpen && (
          <ul>
            {data.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          style={{ cursor: "pointer" }}
        >
          Description
          <img
            src={isDescriptionOpen ? arrowUp : arrowDown}
            alt={
              isDescriptionOpen ? "Flèche vers le haut" : "Flèche vers le bas"
            }
            className="about-arrow"
          />
        </h3>
        {isDescriptionOpen && <p>{data.description}</p>}
      </div>
    </section>
  );
}
