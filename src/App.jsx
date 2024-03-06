import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Recipies from "./components/Recipe.jsx";
import Footer from "./components/Footer.jsx";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Recipies />
			<Footer />
		</div>
	);
}

export default App;
