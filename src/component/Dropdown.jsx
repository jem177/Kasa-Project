import { useState } from "react";

export function Dropdown({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`dropdowns ${isOpen ? "open" : ""} ${className}`}>
      <h3 onClick={toggleDropdown}>
        {title}
        <i className="fa-solid fa-chevron-up"></i>
      </h3>
      {isOpen && (
        <div className={`dropdown-text ${isOpen ? "open" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
