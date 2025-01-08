import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import p1 from '../assets/HarshSharma.jpg'
import p2 from '../assets/Sarubh2.png'

const AcesCommunityForm = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    if (titleElement && subtitleElement) {
      titleElement.classList.add('animate-slideDown');
      subtitleElement.classList.add('animate-fadeIn');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white relative overflow-hidden px-4 sm:px-6">
      {/* Title Section with responsive text sizes */}
      <div className="relative z-10">
        <div className="text-center font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-8 sm:mt-12 opacity-0 animate-slideDown" ref={titleRef}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            ACES COMMUNITY DAY
          </span>
        </div>

        {/* Description Section with responsive padding */}
        <div className="text-center text-gray-300 max-w-2xl mx-auto mt-6 sm:mt-8 mb-8 sm:mb-12 opacity-0 animate-fadeIn" ref={subtitleRef}>
          <p className="text-base sm:text-lg px-4">
            Join us for ACES Community Day 2025, a landmark celebration of 25 events and 5 years of ACES! Happening on January 21st and 22nd, 2025.
          </p>
          <p className="text-base sm:text-lg mt-4 px-4">
            This two-day event promises engaging sessions on tech, learning, and entertainment.
          </p>
        </div>
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 justify-items-center">
        <div className="card w-full max-w-xs sm:w-72 h-72 bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 group">
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden">
            <img 
              src={p1} 
              alt="Event Photo" 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
            <h2 className="font-bold mt-4 text-center">Harsh Sharma</h2>
            <h4 className="text-gray-300 text-center">Youtuber & Speaker</h4>
          </div>
        </div>

        <div className="card w-full max-w-xs sm:w-72 h-72 bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 group">
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden">
            <img 
              src={p2} 
              alt="Event Photo" 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
            <h2 className="font-bold mt-4 text-center">Saurabh Bhosale</h2>
            <h4 className="text-gray-300 text-center">Storytelling & Stand-Up Comedy</h4>
          </div>
        </div>
      </div>

      {/* Responsive Info Sections */}
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
          <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Day 1 - Community Activities
          </h3>
          <div className="text-gray-400 leading-relaxed text-sm sm:text-base">
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li><strong>9:00 AM – 10:00 AM:</strong> Registration & Entry</li>
              <li><strong>10:00 AM – 1:00 PM:</strong> Guest Speaking Session by Harsh Sharma <br />
                <span className="text-gray-500">Topic: AI and Prompt Engineering - Insights on generative AI and industry applications.</span>
              </li>
              <li><strong>1:00 PM – 2:00 PM:</strong> Lunch Break</li>
              <li><strong>2:00 PM – 4:30 PM:</strong> Interactive Session with Harsh Sharma <br />
                <span className="text-gray-500">Practical applications and Q&A session.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
          <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Day 2 - Workshops and Sessions
          </h3>
          <div className="text-gray-400 leading-relaxed text-sm sm:text-base">
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li><strong>9:00 AM – 10:00 AM:</strong> Registration & Entry</li>
              <li><strong>10:00 AM – 1:00 PM:</strong> Peer-to-Peer Learning Session on UI/UX Design <br />
                <span className="text-gray-500">Hands-on design activities in collaboration with the MIT Institute of Design.</span>
              </li>
              <li><strong>1:00 PM – 2:00 PM:</strong> Lunch Break</li>
              <li><strong>2:00 PM – 4:30 PM:</strong> Storytelling & Stand-Up Comedy Session by Saurabh Bhosale</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive Form Section */}
      <div className="relative z-10 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center">
            <Link to="/register" className="group">
              <h3 className="text-sm sm:text-base font-medium bg-[#1C1C1C] px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-white/20">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400">
                  REGISTRATION FORM
                </span>
              </h3>
            </Link>
          </div>

          <div className="container mx-auto mt-8 sm:mt-12">
            <div className="bg-[#1C1C1C] backdrop-blur-md 
                           border border-white/10 rounded-2xl sm:rounded-3xl 
                           shadow-2xl transition-all duration-500
                           hover:border-white/20 hover:shadow-purple-500/10 hover:scale-[1.01]">
              <div className="p-4 sm:p-6">
                <div className="w-full min-h-[400px] sm:min-h-[600px] bg-transparent rounded-lg overflow-hidden">
                  <iframe 
                    className="w-full h-[400px] sm:h-[590px] border-none"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScjvLZAc0VqkMGaVVYB3M41-QRwfU8i6WFbj7gZ8-3EBTCnoQ/viewform?embedded=true"
                    title="Aces Community Day Registration Form"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center group">
              <p className="text-xs sm:text-sm text-gray-400 transform transition-all duration-300 group-hover:text-gray-300 cursor-pointer px-4">
                Don't miss this milestone event at the 6th Floor Auditorium, IT Building, MIT-ADT University!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards 0.5s;
        }
      `}</style>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex justify-center items-center p-4">
      <AcesCommunityForm />
    </div>
  );
};

export default RegisterPage;
