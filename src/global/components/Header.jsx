import React from 'react'
import NavHeader from '../../assets/images/Header.png'

import { useState } from "react";

  

const HeaderPage = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (

    
    <>
        <div>
<nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <img src={NavHeader} alt='Logo Image'/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 ">Contact</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact US</a>
        </div>
      )}
    </nav>



            {/* <div>
                <img src={NavHeader} alt='HederImage'/>
            </div>
            <div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div> */}
        </div>
    
    </>
  )
}

export default HeaderPage