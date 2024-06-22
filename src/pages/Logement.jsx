import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tags } from "../component/Tags";
import { Dropdown } from "../component/Dropdown";
import { Carrousel } from "../component/Carrousel";

export default function Logement() {
  const { id } = useParams();
  const [data, setData] = useState(null);
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
      <Carrousel pictures={data.pictures} title={data.title} />
      <div className="text-content">
        <div className="housing-texts">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
          <Tags tags={data.tags} />
        </div>
        <div className="host">
          <div className="host-text">
            <h3>{data.host.name}</h3>
            <img src={data.host.picture} alt={data.host.name} />
          </div>
          <div className="rating">{renderStars(data.rating)}</div>
        </div>
      </div>
      <div className="dropdown">
        <Dropdown title="Equipments" className="housing-dropdown">
          <ul>
            {data.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
        <div className=" housing-dropdown">
          <Dropdown title="Description">
            <p>{data.description}</p>
          </Dropdown>
        </div>
      </div>
    </section>
  );
}
