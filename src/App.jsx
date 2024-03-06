import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Recipes from "./components/Recipe.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import NotFound from "./page/NotFound.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
