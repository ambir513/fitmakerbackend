import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import './index.css';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
     
      <Route path="/contact" element={<Contact/>} />
    </Routes>
   <Footer/>
  </Router>

  )
}

export default App