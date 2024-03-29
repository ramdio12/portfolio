import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
