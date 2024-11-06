import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faRecycle } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-gray-100">
      <div id="hero" className="relative w-full h-screen flex overflow-hidden">
        <Image
          src="/bg.jpg"
          alt="Lush green field representing sustainable agriculture"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center z-10 p-4 flex-col">
          <h1 className="text-[3rem] font-bold text-white">
            Innovating for a Sustainable Food Future
          </h1>
          <h3 className="text-[1rem] font-medium text-white">
            EcoVine Technologies is at the forefront of agricultural innovation,
            developing biotechnological solutions to enhance crop resilience,
            reduce water use, and increase yield. Our mission is to help farmers
            grow more, sustainably.
          </h3>
        </div>
      </div>

      {/* Second Hero Section */}
      <div id="hero" className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden bg-yellow-100 justify-between">
  <div className="bg-white w-full md:w-1/3 flex items-center justify-center text-center h-screen pt-[3rem] flex-col"><p className="mb-[1rem] font-bold text-2xl">History</p>
  <p>“Founded in 2024, EcoVine Technologies began as a small research group focused on tackling the challenges of modern agriculture. Today, we’re proud to be leaders in agricultural biotech, delivering scalable solutions for farmers globally.”</p>
    
  </div>
  <div className="bg-green-200 w-full md:w-1/3 flex items-center justify-center text-center h-screen flex-col"><p className="mb-[1rem] font-bold text-2xl">Our Values</p>
  <p className="flex items-center mb-[1rem]"><FontAwesomeIcon icon={faMagnifyingGlass} className="w-[2rem] mr-[1rem] "/> Integrity</p>
  <p className="flex items-center mb-[1rem]"><FontAwesomeIcon icon={faUser} className="w-[2rem] mr-[1rem]"/> Customer-Centricity</p>
  <p className="flex items-center mb-[1rem]"><FontAwesomeIcon icon={faRecycle} className="w-[2rem] mr-[1rem]"/> Sustainability</p>

  <p></p>
  </div>
  <div className="bg-yellow-200 w-full md:w-1/3 flex items-center justify-center text-center h-screen"><p className="mb-[1rem] font-bold text-2xl">Our Values</p></div>
</div>

    </div>
  );
}
