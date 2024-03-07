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

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="containerPrincipal">
				<Sidebar />
				<div className="containerRoutes">
					<Routes>
						<Route path={"/"} element={<HomePrincipal />} />
						<Route path={"/about"} element={<About />} />
						<Route path={"*"} element={<NotFound />} />
						<Route path={"/recipes/:recipeId"} element={<Recipes />} />
						<Route path={"/NewRecipeForm"} element={<NewRecipeForm />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
