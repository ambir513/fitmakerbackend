import React from 'react'
import img from './ff1.Webp'

function Shop() {
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

      <div class="font-[sans-serif] bg-white p-4 mx-auto max-w-[1400px]">
      <h2 class="text-xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8">Premium Threads</h2>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://img.freepik.com/premium-photo/aerobic-fitness-equipment-ab-roller-core-workouts_881299-103286.jpg?w=740" alt="Product 1"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Lexicon Luxe - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$100.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://static.vecteezy.com/system/resources/previews/033/748/834/non_2x/gym-fitness-blank-white-t-shirt-on-the-floor-with-dumbbells-and-a-metallic-water-bottle-mockup-template-ai-generated-photo.jpg" alt="Product 2"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Adjective Attire - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$120.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://files.oaiusercontent.com/file-Ns8FtVeoiqyrHw38dEZUbM?se=2025-02-19T22%3A21%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9165911d-2fc6-44e5-a72c-f8a945fb8ba6.webp&sig=cTSt6DD/f4V6IBvYxaFdD3ChabGH7MpbO0Xp0FOYNAY%3D" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">ThreadCraft Vibes - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://images.meesho.com/images/products/451439571/fgw69_1200.jpg" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Verbal Vogue Tees - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$120.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://img.freepik.com/premium-photo/helpful-elliptical-machine-isolated-white-background_787273-50793.jpg?w=740" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Jargon Jungle - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$150.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://img.freepik.com/free-photo/close-up-many-metal-dumbbells-rack-sport-fitness-center_1153-4629.jpg?t=st=1740004139~exp=1740007739~hmac=f9275bac093702956df9c7e97e259e75c0f7d7ff98521684ac88a146246e9f0d&w=1060" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Syllable Streetwear - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://img.freepik.com/free-photo/dumbbell-jump-rope-weights-barbell_23-2147688544.jpg?t=st=1740004268~exp=1740007868~hmac=02cd41bcca40b0b365836da09f8e9a188b8ccd65d7cbcae67c0cd690f63048fa&w=1060" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Syllable Streetwear - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img src="https://img.freepik.com/free-photo/perfectly-ordered-compositions-view_23-2149872090.jpg?t=st=1740004427~exp=1740008027~hmac=8b7a663fc04f8b526ad6d74ec66322fec09b6720c7493edb14361f92d7ee7670&w=1060" alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
          </div>

          <div class="p-4 relative">
            <div class="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
              <button type="button" title="Add to wishlist" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </button>
              <button type="button" title="Add to cart" class="bg-transparent outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative bg-white">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Syllable Streetwear - Tshirt</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
   
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
        <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Summer Sale<br />Up to 70% off.</h2>

        <p class="mb-8 max-w-md text-gray-400">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div class="mt-auto">
          <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Save now</a>
        </div>
      </div>
     

      <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
        <img src = {img} loading="lazy" alt="Photo by Dom Hill" class="h-full w-full object-cover object-center" />
      </div>
      
    </div>
  </div>
</div>

<div class="font-[sans-serif] bg-gray-100">
      <div class="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Shop proteins</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://www.guardian.in/cdn/shop/files/Artboard1_18025de0-e866-4bde-9754-3436880c887e.jpg?v=1734090960&width=800" alt="Product 1"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Sole Elegance</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$10</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://www.guardian.in/cdn/shop/files/Artboard_4_d6a86797-ea51-440d-a644-9942ca69b4d4.png?v=1739966971&width=800" alt="Product 2"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Urban Sneakers</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$12</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://plantigo.in/cdn/shop/files/BrazilianChoc1kg-15_1.png?v=1715636839&width=700" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Velvet Boots</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$14</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://s.alicdn.com/@sc04/kf/Hd27b483656b54f42a118c7f76b393b1bC.jpg_720x720q50.jpg" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Summit Hiking</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$12</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://img10.hkrtcdn.com/37432/prd_3743149-MuscleBlaze-Biozyme-Performance-Whey-3.85-lb-Triple-Chocolate_o.jpg" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Zenith Glow</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$15</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://www.bigmusclesnutrition.com/cdn/shop/files/goldwheyinformedchoice-09-removebg-preview_360x.png?v=1719816486" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Echo Elegance</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$14</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://images-cdn.ubuy.co.in/64396160db5e3d3ee762aaa6-per4m-protein-whey-powder-67-servings.jpg" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Pumps</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$14</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>

          <div class="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
            <div class="mb-4 bg-gray-100 rounded p-2">
              <img src="https://www.bodybuildingindia.com/cdn/shop/products/Muscle-Mantra-Pro-Series-Best-Whey-XT-Muscle-Mantra-42799834.jpg?v=1739108505&width=600" alt="Product 3"
                class="aspect-[33/35] w-full object-contain" />
            </div>

            <div>
              <div class="flex gap-2">
                <h5 class="text-base font-bold text-gray-800">Blaze Burst</h5>
                <h6 class="text-base text-gray-800 font-bold ml-auto">$14</h6>
              </div>
              <p class="text-gray-500 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="flex items-center gap-2 mt-4">
                <div
                  class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <button type="button" class="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default Shop