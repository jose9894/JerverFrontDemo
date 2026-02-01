import "../styles/components.css";
import Logo from "../assets/Alo-pizza_logo.png";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="copyright-container">
        <p>Copyright © {new Date().getFullYear()} Alo Pizza</p>
      </div>
      <div className="Logo-container">
        <img src={Logo} className="logo" alt="JoeDev logo" />
      </div>
    </div>
  );
}

export default Footer;
