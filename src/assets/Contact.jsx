import React from "react";

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
              src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600"
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
    </div>
  );
}
