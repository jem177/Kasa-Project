import Card from "../component/Card";
import homeIMG from "../assets/images/homeIMG.png";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("/src/data/location.json")
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <section className="main-section">
      <div className="title-section">
        <img className="title-IMG" src={homeIMG} alt="" />
        <h1 className="title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="container-cards">
        {location.slice(0, 6).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            cover={item.cover}
          />
        ))}
      </div>
    </section>
  );
}
