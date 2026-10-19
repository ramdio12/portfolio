import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./Components/Footer";
import "./App.css";
import { useEffect } from "react";
import Contact from "./Pages/Contact";

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <>
      <HelmetProvider>
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
