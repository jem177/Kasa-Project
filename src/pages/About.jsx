import aboutIMG from "../assets/images/aboutIMG.png";
import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
function DropdownButton({ label, content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div>
      <button className="about-button" onClick={toggleMenu}>
        {label}
        <img
          src={menuOpen ? arrowUp : arrowDown}
          alt={menuOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
          className="about-arrow"
        />
      </button>
      {menuOpen && <p className="dropdown-text">{content}</p>}
    </div>
  );
}
export default function About() {
  return (
    <section className="about-section">
      <div className="about-background">
        <img src={aboutIMG} alt="about background image" />
      </div>
      <div className="about-menus">
        <div className="about-listeBTN">
          <DropdownButton
            label="Fiabilité"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus harum repudiandae maxime? Illo nobis sequi mollitia. Cumque, eveniet repellendus."
          />
          <DropdownButton
            label="Respect"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus harum repudiandae maxime? Illo nobis sequi mollitia. Cumque, eveniet repellendus."
          />
          <DropdownButton
            label="Service"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus harum repudiandae maxime? Illo nobis sequi mollitia. Cumque, eveniet repellendus."
          />
          <DropdownButton
            label="Sécurité"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus harum repudiandae maxime? Illo nobis sequi mollitia. Cumque, eveniet repellendus."
          />
        </div>
      </div>
    </section>
  );
}
