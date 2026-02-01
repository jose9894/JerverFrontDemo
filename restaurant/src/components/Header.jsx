import {Link} from "react-router-dom";
import Logo from "../assets/Alo-pizza_logo.png";
import "../styles/components.css";


function Header() {
  return (
    <div className="Header-container">
      <div className="Nav-container">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/menu">Menu</Link>
      </div>
      <div className="Logo-container">
        <img src={Logo} className="logo" alt="Alo Pizza logo" />
      </div>
    </div>
  );
}

export default Header;
