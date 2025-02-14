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


const services = [
  {
    title: "Strength Training",
    img: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Increase your power with specialized strength-building exercises.",
  },
  {
    title: "Cardio Workouts",
    img: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg",
    desc: "Improve your stamina and heart health with intense cardio sessions.",
  },
  {
    title: "Personal Training",
    img: "https://images.pexels.com/photos/866019/pexels-photo-866019.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "One-on-one expert guidance tailored to your fitness goals.",
  },
  {
    title: "Weight Loss Programs",
    img: "https://images.pexels.com/photos/18060023/pexels-photo-18060023/free-photo-of-bodybuilder-working-out-on-weight-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Personalized plans to help you lose weight effectively."
  },
  {
    title: "Nutrition Plans",
    img: "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Custom meal plans designed for optimal fitness and health.",
  },

  {
    title: "Nutrition Plans",
    img: "https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Custom meal plans designed for optimal fitness and health.",
  },
];

const trainers = [
  { name: "Sam Cole", role: "Personal Trainer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AV2cwH8IEiYbLVr2BB2qWjIwff8FRvTCYQ&s" },
  { name: "M. Harris", role: "Personal Trainer", img: "trainer2.jpg" },
  { name: "John Haley", role: "Personal Trainer", img: "trainer3.jpg" },
  { name: "Tom Blake", role: "Personal Trainer", img: "trainer4.jpg" },
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


    <section className="py-6 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
      <div className="relative">
      <motion.h2 
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center uppercase tracking-wide relative"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.1 }}
>
  <span className="block text-base sm:text-lg md:text-xl font-medium mt-2 text-gray-500">
    Experienced & Internationally Certified Personal Trainers
  </span>  

  <span className="block mt-3 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 text-2xl sm:text-3xl md:text-4xl">
    The Best Fitness Experience
  </span>  

  <span className="block text-sm sm:text-base md:text-lg font-medium mt-3 sm:mt-4 text-gray-500">
    We’re committed to bringing you the best workout experience.
  </span>
</motion.h2>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden shadow-lg cursor-pointer "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    <div className="relative h-96 overflow-hidden flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/3309775/pexels-photo-3309775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
  ></div>

  {/* Content Section */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative flex flex-col items-start justify-center text-white text-left px-10 bg-black/50 w-1/2 h-full"
  >
  <div className="text-center sm:text-left max-w-sm mx-auto sm:max-w-md">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
    Gyms Don’t Change Lives. People Do.
  </h2>
  <p className="text-sm sm:text-base mt-2 sm:mt-3 max-w-sm">
    Push beyond limits and unlock your full potential.
  </p>
  <button className="mt-2 sm:mt-3 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-white text-black font-semibold uppercase rounded-lg hover:bg-gray-300 transition">
    Read More
  </button>
</div>


  </motion.div>

  {/* Video Section */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative w-1/2 h-full"
  >
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://videos.pexels.com/video-files/18941351/18941351-hd_1080_1920_50fps.mp4"
        type="video/mp4"
      />
    </video>
  </motion.div>
</div>

<section className="bg-white text-black p-8 md:p-16 lg:flex lg:items-center">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <img
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Protein Power Bowl"
          className="rounded-xl w-full max-h-[400px] object-cover shadow-lg"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="lg:w-1/2 lg:pl-10">
        <h3 className="text-yellow-500 text-xl font-bold">Recipes</h3>
        <h2 className="text-4xl font-extrabold mt-3">Protein-packed power bowl</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          A colorful protein-packed power bowl filled with flavorful, meaty grilled satay tofu and an
          array of vibrant veggies on a bed of fluffy quinoa. Completed with a healthy and delicious
          satay dipping sauce and crushed roasted peanuts. Delicious!
        </p>
        
        {/* View Full Recipe Button */}
        <button className="mt-6 border-2 border-yellow-500 text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:text-white transition-all shadow-md">
          View Full Recipe
          <span>&rarr;</span>
        </button>
      </div>
      
      <div className="lg:w-1/3 flex flex-col gap-6 mt-10 lg:mt-0 lg:ml-10">
        <button className="self-start px-8 py-3 border-2 border-yellow-400 text-black font-medium rounded-full hover:bg-yellow-400 hover:text-black transition-all">
          View More Recipes
        </button>
        <div className="flex flex-col gap-4">
          {[
            { name: "High Protein Recipes", img: "https://images.pexels.com/photos/3323687/pexels-photo-3323687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Low Carb Recipes", img: "https://images.pexels.com/photos/9004742/pexels-photo-9004742.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Dairy Free Recipes", img: "https://images.pexels.com/photos/17640941/pexels-photo-17640941/free-photo-of-salad-with-cheese-lettuce-avocado-sauce-and-fried-sweet-potatoes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Vegetarian Recipes", img: "https://images.pexels.com/photos/4109516/pexels-photo-4109516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <p className="text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  



    <section className="bg-white py-16 px-8 text-black">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Meet Our <span className="text-red-500">Trainers</span></h2>
        <p className="mt-2 text-gray-300">At This Part You Can See Some Of Our Trainers And Their Work.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img src={trainer.img} alt={trainer.name} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{trainer.name}</h3>
              <p className="text-gray-400">{trainer.role}</p>
              <a href="#" className="text-red-500 mt-2 inline-block">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
          View All
        </button>
      </div>
    </section>

    
</>
  );
}
