import React from "react";
import './Home.css';




export default function Contact() {
   return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Our Gym</h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl">Achieve your fitness goals with us</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-white text-black py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="border-4 border-orange-400 p-2 max-w-xs sm:max-w-md md:max-w-full">
            <img
              src="https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Why Choose Us"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full text-center md:text-left px-4 sm:px-8">
          <h3 className="text-xs sm:text-sm text-orange-400 uppercase font-bold">Know About Us</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Why Choose Us? <span className="text-orange-400">Because We're The Best.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Our state-of-the-art services provide you with the best experience. Whether you're here
            to find the right match or explore options, we've got you covered.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-2">✅ Train with the best experts in the industry.</li>
            <li className="flex items-center gap-2">
              ✅ Our advanced algorithms help you find the perfect match.
            </li>
          </ul>
          <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-all">
            Read More &rarr;
          </button>
        </div>
      </section>

  {/* Contact Section */}
  <div className="landing_page">
    <div className="flex flex-wrap justify-center lg:justify-start min-h-[75px] w-full bg-black px-6 md:px-12 relative">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Gym Background"
      />
      <div className="max-w-[1320px] mx-auto flex flex-wrap py-16 relative z-10 w-full">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center text-white px-4">
          <div className="text-center lg:text-left">
            <p className="text-3xl md:text-4xl font-bold leading-[45px] md:leading-[55px] mb-4">
              Unleash Your Strength - Get in Touch Today!
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-[420px] mb-8">
              Ready to transform your fitness journey? Join our gym and take the first step towards a healthier, stronger you!
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a className="share-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 filter brightness-0 invert sepia saturate-200 hue-rotate-10" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="Twitter" />
              </a>
              <a className="share-icon" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 filter brightness-0 invert sepia saturate-200 hue-rotate-10" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="Instagram" />
              </a>
              <a className="share-icon" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 filter brightness-0 invert sepia saturate-200 hue-rotate-10" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 px-4">
          <form className="bg-gray-900 text-white p-6 md:p-8 max-w-[500px] w-full rounded-md shadow-lg">
            <p className="text-xl md:text-2xl font-bold mb-4">Start Your Fitness Journey</p>
            <p className="text-gray-400 mb-6 md:mb-8">Sign up now and start your fitness journey with us!</p>
            <div className="space-y-4">
              <input className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none" type="text" placeholder="First Name" name="FirstName" />
              <input className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none" type="text" placeholder="Last Name" name="LastName" />
              <input className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none" type="email" placeholder="Email" name="Email" />
              <input className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none" type="text" placeholder="Phone Number" name="PhoneNumber" />
              <textarea className="w-full h-36 bg-gray-800 text-white rounded-md px-4 py-2 placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="Your Fitness Goals" name="Message"></textarea>
              <button className="w-full h-14 bg-red-700 hover:bg-red-600 text-white rounded-md text-lg font-semibold transition-all" type="submit">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="relative overflow-hidden bg-orange-500 py-4">
 
 <div class="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-orange-500 to-transparent z-10"></div>
 

 <div class="marquee flex space-x-16">
   <span class="marquee-text">
     Personal Coach • Online Store • Kids Sports • Martial Arts • Gym Website • Personal Training • Sports Equipment
   </span>
   <span class="marquee-text">
     Personal Coach • Online Store • Kids Sports • Martial Arts • Gym Website • Personal Training • Sports Equipment
   </span>
 </div>

 <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-orange-500 to-transparent z-10"></div>
</div>


    </div>
  );
}
