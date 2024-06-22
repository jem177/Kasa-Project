import { useState, useEffect, useRef } from "react";
import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";

export function Dropdown({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdowns ${isOpen ? "open" : "closed"} ${className}`}
    >
      <h3 onClick={toggleDropdown}>
        {title}
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
          className="dropdown-arrow"
        />
      </h3>
      {isOpen && (
        <div className={`dropdown-text ${isOpen ? "open" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
