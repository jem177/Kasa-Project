import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo " src={Logo} alt="Logo" />
      </Link>

      <nav className="navBar">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  );
}
