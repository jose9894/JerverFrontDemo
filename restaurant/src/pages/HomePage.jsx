import { FaMapLocationDot } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { LuAlarmClockCheck } from "react-icons/lu";
import "../styles/HomePage.css";

function Home() {
  return (
    <div className="Home-container">
      <div className="intro-container">
      <p className="name-tag">Alo pizza & Kebab</p>
      <p>De ringer... Vi bringer</p>
      <p>Mad ud af huset</p>
      </div>
      <div className="border">
        <div className="text-container">
          <p>Om os</p>
        </div>
        <div className="card-container">
          <div className="card">
            <p className="card-text">Vi er placeret ved <br />Silkeborgvej 60, 8000 Aarhus C</p>
            <FaMapLocationDot />
          </div>
          <div className="card">
            <p className="card-text">Vi laver alt fra Pizza, Pita til tyrkisk Pide</p>
            <MdRestaurantMenu/>
          </div>
          <div className="card">
            <p className="card-text">Vi har åbent alle dage <br /> fra 16:00 til 21:00</p>
            <LuAlarmClockCheck/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
