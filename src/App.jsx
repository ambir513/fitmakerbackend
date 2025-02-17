import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader/Loader";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/Signup/Signup";
import Account from "./Pages/Dashboard/Account";
import ErrorHandling from "./Pages/Error/ErrorHandling";
import Login from "./Pages/Login/Login";

function App() {
  const isUserSignIn = !!localStorage.getItem("token")
  let [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 3000)
  })

  return isLoading ? (<Loader />) :
    (<Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={isUserSignIn ? <Account /> : <Navigate to="/login" />} />
        <Route path="*" element={<ErrorHandling />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>)
}

export default App