import Logo from "../assets/Logo.png";

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
      <img className="logo" src={Logo} alt="image-logo" />
      <ul className="list">
        <Link to="/">HOME</Link>
        <Link to="/About">ABOUT</Link>
        <button onClick={handleRandomRecipe}>RANDOM RECIPE</button>
      </ul>
    </div>
  );
}
