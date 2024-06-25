import { useState, useRef } from "react";

export function Dropdown({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdowns ${isOpen ? "open" : ""} ${className}`}
    >
      <h3 onClick={toggleDropdown}>
        {title}
        <i class="fa-solid fa-chevron-up"></i>
      </h3>
      {isOpen && (
        <div className={`dropdown-text ${isOpen ? "open" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
