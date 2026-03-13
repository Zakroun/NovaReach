import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/projects" element={<><Navbar /><Projects /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
      </Routes>
    </>
  )
}

export default App
