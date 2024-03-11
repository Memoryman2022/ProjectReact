import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar({ recipeArray }) {
  const navigate = useNavigate();

  const handleRandomRecipe = () => {
    if (recipes.length > 0) {
      const randomIndex = Math.floor(MAth.random() * recipes.length);
      const randomRecipe = recipes[randomindex];
      navigate(`/recipes/${randomRecipe.id}`);
    }
  };
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
