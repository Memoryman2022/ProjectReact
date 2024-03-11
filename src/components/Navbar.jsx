import Logo from "../assets/Logo.png";
import test from "../../images/main.png";
import test2 from "../../images/1.webp";

import { Link, useNavigate } from "react-router-dom";
export default function Navbar({ recipes }) {
  const navigate = useNavigate();

  function handleRandomRecipe() {
    if (recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      console.log(randomRecipe);
      navigate(`/recipes/${randomRecipe.id}`);
    }
  }

  return (
    <div className="navbar">
      <img className="logo" src={test} alt="image-logo" />
      <ul className="list">
        <button className="home-btn">
          <Link to="/">HOME</Link>
        </button>
        <button className="about-btn">
          <Link to="/About">ABOUT</Link>
        </button>
        <button className="random-btn" onClick={handleRandomRecipe}>
          RANDOM RECIPE
        </button>
      </ul>
    </div>
  );
}
