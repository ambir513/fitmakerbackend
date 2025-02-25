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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
}

export default App