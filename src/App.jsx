import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Recipes from "./components/Recipe.jsx";
import Footer from "./components/Footer.jsx";
import About from "./page/About.jsx";
import NotFound from "./page/NotFound.jsx";
import NewRecipeForm from "./components/NewRecipeForm.jsx";
import { HomePrincipal } from "./page/HomePrincipal.jsx";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import recipeData from "/recipe.json";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState(recipeData);
  console.log(recipes);
  if (!recipes) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="containerPrincipal">
        <Sidebar
          recipeData={recipeData}
          recipes={recipes}
          setRecipes={setRecipes}
        />
        <div className="containerRoutes">
          <Routes>
            <Route
              path={"/"}
              element={
                <HomePrincipal
                  recipeData={recipeData}
                  recipes={recipes}
                  setRecipes={setRecipes}
                />
              }
            />
            <Route path={"/about"} element={<About />} />
            <Route path={"*"} element={<NotFound />} />
            <Route
              path={"/recipes/:recipeId"}
              element={
                <Recipes
                  recipeData={recipeData}
                  recipes={recipes}
                  setRecipes={setRecipes}
                />
              }
            />
            <Route
              path={"/NewRecipeForm"}
              element={
                <NewRecipeForm
                  recipeData={recipeData}
                  recipes={recipes}
                  setRecipes={setRecipes}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
