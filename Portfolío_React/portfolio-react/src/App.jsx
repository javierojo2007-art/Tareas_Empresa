import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Estudios from "./components/Estudios";
import Github from "./components/Github";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function cambiarTema() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button className="boton-tema" onClick={cambiarTema}>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Header />
      <Navbar />
      <main>
        <SobreMi />
        <Proyectos />
        <Estudios />
        <Github />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
