import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="image-logo" />
      <ul className="list">
        <Link to="/">home</Link>
        <Link to="/About">About</Link>
      </ul>
    </div>
  );
}
