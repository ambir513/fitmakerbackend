import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; 
import { motion } from "framer-motion"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-screen z-50 px-6 py-3 flex items-center justify-between transition-all duration-300
      ${scrolling ? "bg-white shadow-lg border-none" : "bg-transparent border-b border-white/20"}`}
      style={{ maxWidth: "100vw", overflowX: "hidden" }}>


      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center">
          <FaDumbbell className="text-white text-2xl" />
        </div>
        <div>
          <h1 className={`text-3xl font-extrabold tracking-wide ${scrolling ? "text-black" : "text-white"}`}>FitMaker</h1>
          <p className={`text-sm ${scrolling ? "text-gray-600" : "text-gray-200"}`}>Transform Your Body</p>
        </div>
      </div>
      
      {/* Desktop Menu */}
      <ul className={`hidden md:flex gap-8 text-lg font-medium ${scrolling ? "text-black" : "text-white"}`}>
        <li><Link to="/" className="hover:text-red-500 transition duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-red-500 transition duration-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-red-500 transition duration-300">Contact</Link></li>
      </ul>
      
      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <button className={`border-2 px-5 py-2 rounded-lg transition duration-300
          ${scrolling ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" : "border-white text-white hover:bg-white hover:text-black"}`}>
          Login
        </button>
        <button className={`px-5 py-2 rounded-lg transition duration-300 
          ${scrolling ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-black hover:bg-gray-200"}`}>
          Sign Up
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-3xl z-50 ${scrolling ? "text-black" : "text-white"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      
      {/* Backdrop */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>}
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl flex flex-col items-start gap-6 py-8 px-6 z-40 "
      >
        <h2 className="text-xl font-bold text-red-600">Menu</h2>
        <Link to="/" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button className="w-full border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>
          Login
        </button>
        <button className="w-full bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-300" onClick={() => setMenuOpen(false)}>
          Sign Up
        </button>
      </motion.div>
    </nav>
  );
}
