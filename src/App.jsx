import "./web.css";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./views/AboutMe";
import Home from "./views/Home";
import ContactMe from "./views/ContactMe";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Specialization from "./views/Specialization";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/specialization" element={<Specialization />} />
    </Routes>
  );
};

export default App;
