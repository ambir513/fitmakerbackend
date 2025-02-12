import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import video1 from "../assets/T1.mp4";
import video2 from "../assets/T2.mp4";
import video3 from "../assets/T3.mp4";

const slides = [
  { video: video1 },
  { video: video2 },
  { video: video3 },
];




export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
    <section className="relative w-full h-[730px] flex items-center justify-center px-12 overflow-hidden">
      {slides.map((slide, index) => (
        <motion.video
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={index === current ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={slide.video} type="video/mp4" />
        </motion.video>
      ))}



      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Overlay Container */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl sm:text-4xl  uppercase tracking-wider leading-tight drop-shadow-lg"
        >
          Transform Your Life At
        </motion.h1>
        {/* Subheading */}
        <motion.h2 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-4xl sm:text-2xl uppercase mt-2 drop-shadow-lg"
        >
          HomeFit Zone
        </motion.h2>
        {/* Description */}
        <motion.p 
          initial={{ opacity: 10, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg sm:text-sm text-gray-300 mt-4 max-w-2xl drop-shadow-md"
        >
          Your Ultimate Home Workout Destination
        </motion.p>
        {/* Call-to-Action Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg  uppercase shadow-lg tracking-wide transform transition-transform duration-300 hover:scale-105"
        >
          Start Your Journey 
        </motion.button>
      </div>






        

      {/* Auto-slide change */}
      <motion.div
        className="absolute bottom-10 right-12 text-white text-sm cursor-pointer"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
      >
        Next Slide →
      </motion.div>
    </section>


    <div className="bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full max-w-3xl mx-auto md:mx-0">
  {/* Main Image Section */}
  <div className="relative rounded-lg overflow-hidden border-[6px] border-l-orange-600 shadow-xl">
    <img
      src="https://images.pexels.com/photos/3757645/pexels-photo-3757645.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Gym Workout"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Text Overlay for a Futuristic Look */}
  <div className="absolute top-5 left-5 bg-gray-900 text-white px-4 py-2 text-lg font-semibold uppercase tracking-wide shadow-md">
    Train Like a Beast
  </div>
</div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-gray-900">
            Transform Your Body
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join our fitness community and take your health to the next level. Our
            expert trainers, state-of-the-art equipment, and science-backed
            programs ensure you get the best results possible.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-md">
                ✓
              </span>
              <p className="text-gray-700 text-lg font-medium">Personalized Training</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-md">
                ✓
              </span>
              <p className="text-gray-700 text-lg font-medium">Advanced Equipment</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-md">
                ✓
              </span>
              <p className="text-gray-700 text-lg font-medium">Nutrition Guidance</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-full shadow-md">
                ✓
              </span>
              <p className="text-gray-700 text-lg font-medium">Community Support</p>
            </div>
          </div>
          <motion.a
            href="#"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            Join Now
          </motion.a>
        </motion.div>
      </div>
    </div>
    


    
</>
  );
}
