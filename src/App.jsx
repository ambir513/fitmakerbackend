<<<<<<< HEAD
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
import Edit from "./Pages/Edit/Edit";
import Search from "./Pages/Search/Search";
import Verification from "./Pages/Verification/Verification";
import Filter from "./Pages/Filter/Filter";
import Exercise from "./Pages/exercise/Exercise";
import Research from "./Pages/Research/Research";
import Purchase from "./Pages/Purchase/Purchase"
import Card from "./Pages/Purchase/Card"
import Cart from "./Pages/Purchase/Cart"
import Join from "./Pages/Purchase/Join"
import Shop from "./Pages/Purchase/Shop"
import Aifilter from "./Pages/Filter/Aifilter";

function App() {
  const isUserSignIn = !!localStorage.getItem("token")
  let [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 3000)
  }, [])


  return isLoading ? (<Loader />) :
    (<Router>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./assets/Loader"; // Ensure this file exists
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Shop from "./assets/Shop";
import Card from "./assets/Card";
import Join from "./assets/Join";
import Cart from "./assets/Cart";
import Purchase from "./assets/Purchase";


function App() {
  const User = !!localStorage.getItem("token");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); // Empty dependency array to prevent infinite re-renders

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
>>>>>>> a8014084ab8f8e11a7185214e906c89440cb7209
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card/:profileId" element={<Card />} />
        <Route path="/join/:profileId" element={<Join />} />
        <Route path="/cart/:profileId" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart/:profileId" element={<Purchase />} />
        <Route path="/purchase/:profileId" element={<Purchase />} />
        <Route path="/account" element={isUserSignIn ? <Account /> : <Navigate to="/" />} />
        <Route path="/account/edit" element={isUserSignIn ? <Edit /> : <ErrorHandling />} />
        <Route path="/diet-filter" element={isUserSignIn ? <Filter /> : <ErrorHandling />} />
        <Route path="/ai-diet-filter" element={isUserSignIn ? <Aifilter /> : <ErrorHandling />} />
        <Route path="/exercise-filter" element={isUserSignIn ? <Exercise /> : <ErrorHandling />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/research" element={<Research />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="*" element={<ErrorHandling />} />
      </Routes>
      <Footer />
    </Router>)
=======
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="Card/:profileId" element={<Card/>} />
        <Route path="Join/:profileId" element={<Join/>} />
        <Route path="Cart/:profileId" element={<Cart/>} />
        <Route path="Purchase/:profileId" element={<Purchase/>} />
      </Routes>
      <Footer />
    </Router>
  );
>>>>>>> a8014084ab8f8e11a7185214e906c89440cb7209
}

export default App;
