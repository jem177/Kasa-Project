import aboutIMG from "../assets/images/aboutIMG.png";
import { Dropdown } from "../component/Dropdown";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-background">
        <img src={aboutIMG} alt="about background image" />
      </div>
      <div className="about-menus">
        <div className="about-listeBTN">
          <Dropdown title="Fiabilité" className="about-button">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              repellendus harum repudiandae maxime? Illo nobis sequi mollitia.
              Cumque, eveniet repellendus.
            </p>
          </Dropdown>
          <Dropdown title="Respect" className="about-button">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              repellendus harum repudiandae maxime? Illo nobis sequi mollitia.
              Cumque, eveniet repellendus.
            </p>
          </Dropdown>
          <Dropdown title="Service" className="about-button">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              repellendus harum repudiandae maxime? Illo nobis sequi mollitia.
              Cumque, eveniet repellendus.
            </p>
          </Dropdown>
          <Dropdown title="Sécurité" className="about-button">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              repellendus harum repudiandae maxime? Illo nobis sequi mollitia.
              Cumque, eveniet repellendus.
            </p>
          </Dropdown>
        </div>
      </div>
    </section>
  );
}
