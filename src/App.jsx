import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Recipies from "./components/Recipe.jsx";
// import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Navbar />
      <Sidebar />
      <Recipies />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
