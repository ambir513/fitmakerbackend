import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isUserSignIn = !!localStorage.getItem("token")
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token")
    setTimeout(() => {
      navigate("/login")
    }, 2000)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white shadow-lg border-none`} >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-3" >
          <img src="/assets/FitMaker.png" width={48} className="rounded-lg" alt="logo" />
          <div>
            <h1 className={`text-3xl font-extrabold tracking-wide"text-black`}>FitMaker</h1>
            <p className={`text-sm text-gray-600 `}>Transform Your Body</p>
          </div>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium text-black">
        <li><Link to="/" className="hover:text-red-500 transition duration-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-red-500 transition duration-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-red-500 transition duration-300">Contact</Link></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        {
          isUserSignIn ?
            (<>
              <Link to="/account"><li>Dashdoard</li></Link>
              <button onClick={handleSignOut}>Logout</button>
            </>)
            : (
              <>
                <Link to="/login">
                  <button className="border-2 px-5 py-2 rounded-lg transition duration-300
           border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-5 py-2 rounded-lg transition duration-300 
          bg-red-600 text-white hover:bg-red-700">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl z-50 text-black"
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
        <Link to="/" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300"><h1 onClick={() => setMenuOpen(false)}>Home</h1></Link>
        <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300"><h1 onClick={() => setMenuOpen(false)}>About us</h1></Link>
        <Link to="/contact" className="text-lg font-medium text-gray-800 hover:text-red-500 transition duration-300"><h1 onClick={() => setMenuOpen(false)}>Contact</h1></Link>
        {
          isUserSignIn ?
            (<>
              <Link to="/account"><h1>Dashdoard</h1></Link>
              <button onClick={handleSignOut}>Logout</button>
            </>)
            : (
              <>
                <Link to="/login">
                  <button className="w-full border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-300" onClick={() => setMenuOpen(false)}>
                    Sign Up
                  </button>
                </Link>
              </>
            )
        }
      </motion.div>
    </nav >
  );
}
