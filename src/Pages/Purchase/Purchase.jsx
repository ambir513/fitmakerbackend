import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { profileId } = useParams();

  // 7 gym-related products with detailed data
  const products = [
    {
      id: 1,
      name: "PowerFit Gym Membership",
      price: "$17.00",
      rating: 4,
      reviews: 150,
      items: [
        { name: "1-Month Membership", price: "$17.00" },
        { name: "Gym Towel", price: "$5.00" },
        { name: "Water Bottle", price: "$3.00" },
      ],
      tax: "$2.00",
      total: "$27.00",
      description: "Join PowerFit Gym for a month of unlimited access to top-tier equipment, classes, and fitness assessments.",
    },
    {
      id: 2,
      name: "StrengthCore Membership",
      price: "$25.00",
      rating: 5,
      reviews: 200,
      items: [
        { name: "1-Month Strength Training", price: "$25.00" },
        { name: "Protein Shaker", price: "$7.00" },
        { name: "Resistance Band", price: "$5.00" },
      ],
      tax: "$3.00",
      total: "$40.00",
      description: "Unlock your strength potential with StrengthCore's specialized training and premium gear.",
    },
    {
      id: 3,
      name: "FlexFit Yoga Plan",
      price: "$20.00",
      rating: 4,
      reviews: 120,
      items: [
        { name: "1-Month Yoga Classes", price: "$20.00" },
        { name: "Yoga Mat", price: "$10.00" },
        { name: "Meditation Guide", price: "$2.00" },
      ],
      tax: "$2.50",
      total: "$34.50",
      description: "Find balance and flexibility with FlexFit's yoga-focused membership, including exclusive classes.",
    },
    {
      id: 4,
      name: "CardioBlast Membership",
      price: "$22.00",
      rating: 4,
      reviews: 180,
      items: [
        { name: "1-Month Cardio Access", price: "$22.00" },
        { name: "Heart Rate Monitor", price: "$8.00" },
        { name: "Energy Drink Voucher", price: "$3.00" },
      ],
      tax: "$2.80",
      total: "$35.80",
      description: "Boost your cardio game with CardioBlast's high-energy membership and performance tools.",
    },
    {
      id: 5,
      name: "EliteFit Premium Plan",
      price: "$35.00",
      rating: 5,
      reviews: 250,
      items: [
        { name: "1-Month Elite Access", price: "$35.00" },
        { name: "Personal Training Session", price: "$15.00" },
        { name: "Gym Bag", price: "$10.00" },
      ],
      tax: "$4.00",
      total: "$64.00",
      description: "Experience elite fitness with personalized training and premium perks at EliteFit.",
    },
    {
      id: 6,
      name: "CorePulse Gym Pass",
      price: "$18.00",
      rating: 3,
      reviews: 90,
      items: [
        { name: "1-Month Core Training", price: "$18.00" },
        { name: "Core Workout Guide", price: "$4.00" },
        { name: "Sweatband", price: "$2.00" },
      ],
      tax: "$2.20",
      total: "$26.20",
      description: "Strengthen your core with CorePulse's focused membership and essential fitness gear.",
    },
    {
      id: 7,
      name: "VitalityFit Membership",
      price: "$30.00",
      rating: 4,
      reviews: 160,
      items: [
        { name: "1-Month Full Access", price: "$30.00" },
        { name: "Nutrition Plan", price: "$10.00" },
        { name: "Fitness Tracker Voucher", price: "$5.00" },
      ],
      tax: "$3.50",
      total: "$48.50",
      description: "Revitalize your fitness journey with VitalityFit's comprehensive membership and wellness tools.",
    },

    {
        id: 8,
        name: "VitalityFit Membership",
        price: "$30.00",
        rating: 4,
        reviews: 160,
        items: [
          { name: "1-Month Full Access", price: "$30.00" },
          { name: "Nutrition Plan", price: "$10.00" },
          { name: "Fitness Tracker Voucher", price: "$5.00" },
        ],
        tax: "$3.50",
        total: "$48.50",
        description: "Revitalize your fitness journey with VitalityFit's comprehensive membership and wellness tools.",
      },
    ];
  


  const product = products.find((p) => p.id === parseInt(profileId)) || products[0];

  return (
    <div className="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          {/* Progress Steps */}
          <div className="flex items-start">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-800 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">1</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-800"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-gray-800">Membership Details</h6>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-800 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">2</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-300"></div>
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-bold text-gray-800">Billing</h6>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-200 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-bold">3</span>
                </div>
              </div>
              <div className="mt-2">
                <h6 className="text-sm font-bold text-gray-300">Confirm</h6>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          <form className="mt-16 max-w-lg">
            <h2 className="text-2xl font-extrabold text-gray-800">Payment Method</h2>

            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              <div className="flex items-center">
                <input type="radio" className="w-5 h-5 cursor-pointer" id="card" defaultChecked />
                <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                  <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                  <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>

            <div className="grid gap-4 mt-8">
              <input
                type="text"
                placeholder="Cardholder's Name"
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
              />

              <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 ml-3"
                  viewBox="0 0 291.764 291.764"
                >
                  <path
                    fill="#2394bc"
                    d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                  />
                  <path
                    fill="#efc75e"
                    d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="Card Number"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{' '}
                  <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              >
                Back
              </button>
              <button
                type="submit"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
              >
                Pay {product.total}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-4xl font-extrabold text-gray-800">{product.total}</h2>

          <ul className="text-gray-800 mt-8 space-y-4">
            {product.items.map((item, index) => (
              <li key={index} className="flex flex-wrap gap-4 text-sm">
                {item.name} <span className="ml-auto font-bold">{item.price}</span>
              </li>
            ))}
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">{product.tax}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
              Total <span className="ml-auto">{product.total}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Purchase
;