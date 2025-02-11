import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  { video: "https://videos.pexels.com/video-files/4438086/4438086-hd_1920_1080_25fps.mp4" },
  { video: "https://videos.pexels.com/video-files/18573489/18573489-hd_1920_1080_25fps.mp4" },
  { video: "https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4" },
];


const categories = [
  {
    title: "No Equipment",
    image: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
  },
  {
    title: "Weight Training",
    image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg",
  },
  {
    title: "Cardio Workouts",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
  },
  {
    title: "Yoga & Flexibility",
    image: "https://images.pexels.com/photos/3823041/pexels-photo-3823041.jpeg",
  },
  {
    title: "HIIT Training",
    image: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
  },
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
    <section className="relative w-full h-[730px] flex items-center justify-start px-12 overflow-hidden">
      {/* Video Slides */}
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
          className="text-5xl md:text-6xl sm:text-4xl font-extrabold uppercase tracking-wider leading-tight drop-shadow-lg"
        >
          Transform Your Life At
        </motion.h1>
        {/* Subheading */}
        <motion.h2 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-4xl sm:text-2xl font-bold uppercase mt-2 drop-shadow-lg"
        >
          HomeFit Zone
        </motion.h2>
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: -30 }} 
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
          className="mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-bold uppercase shadow-lg tracking-wide transform transition-transform duration-300 hover:scale-105"
        >
          Start Your Journey [+]
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

    <section className="px-8 py-16 relative overflow-hidden ">
      <h1 className="text-black text-4xl font-extrabold uppercase text-center mb-12 tracking-wide">Workout Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              src={cat.image}
              alt={cat.title}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:backdrop-blur-2xl">
              <h2 className="text-white text-2xl font-bold uppercase tracking-wide text-center drop-shadow-lg">
                {cat.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
</>
  );
}
