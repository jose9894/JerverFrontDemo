import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components.css";


function Layout() {
  return (
    <div className="Layout-container">
        <Header />
      <div className="Content-container">
        <Outlet />
      </div>
        <Footer/>
    </div>
  );
}

export default Layout;
