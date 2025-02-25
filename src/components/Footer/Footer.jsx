import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className='z-10'>
        <div className="w-full h-fit md:p-20 p-10 sm:p-15 flex-col md:flex-col lg:p-20 flex lg:flex-col sm:flex-col justify-center items-center">
          <div className="flex flex-col sm:flex md:flex gap-10 md:gap-[20px] lg:flex-row md:flex-wrap sm:flex-wrap lg:flex-wrap sm:gap-[25px] lg:gap-[50px]">
            <div className="flex flex-col gap-1.5 lg:w-[500px] lg:flex-wrap">
              <div className="flex items-center gap-2">
                <img src="/logo2.svg" alt="" width={75} />
                <p className='lg:mt-1 mt-1 lg:text-xl sm:text-lg text-lg font-light'> FitMaker Fitness</p>
              </div>
              <div className="lg:mt-5 md:mt-5 sm:mt-5 mt-4">
                <p className='text-textColor font-light'>Largest Gym In Dwarka With Premium Graded Equipments With Steam, Cafe, Zumba, Dance, Yoga, Strength, Cardio And Many More. Experience world-class training with certified professionals, personalized workout plans, and a vibrant fitness community to help you achieve your goals.</p>
              </div>
            </div>
            <div className="lg:flex-row flex sm:flex-row flex-wrap gap-x-28 gap-y-20 sm:ml-0 ml-2 lg:flex-wrap lg:gap-[100px] sm:gap-[60px] sm:mt-10 lg:mt-0 md:mt-10 md:gap-[80px]">
              <div className="flex flex-col gap-[15px] font-light">
                <p className='text-textColor'>MENU</p>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link>Connection</Link>
              </div>
              <div className="flex flex-col gap-[15px] font-light">
                <p className='text-textColor'>OVERVIEW</p>
                <Link>Membership</Link>
                <Link>Yearly Plan</Link>
                <Link>Security</Link>
                <Link>Feature</Link>
              </div>
              <div className="flex flex-col gap-[15px] font-light">
                <p className='text-textColor'>Company</p>
                <Link>About us</Link>
                <Link>Queries</Link>
                <Link>Location</Link>
                <Link>Trainer</Link>
              </div>
              <div className="flex flex-col gap-[15px] font-light">
                <p className='text-textColor'>SOCIALS</p>
                <Link>Instagram</Link>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>LinkedIn</Link>

              </div>
            </div>
          </div>
          <div className="border-t-2 w-full border-stock mt-20">
            <p className='text-textColor text-center mt-10 font-light'>&copy; 2025 FitMaker <Link>All rights reserved.</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
