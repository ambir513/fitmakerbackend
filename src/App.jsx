import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./assets/Loader"; // Ensure this file exists
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";

function App() {
  const User = !!localStorage.getItem("token");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []); // Empty dependency array to prevent infinite re-renders

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
