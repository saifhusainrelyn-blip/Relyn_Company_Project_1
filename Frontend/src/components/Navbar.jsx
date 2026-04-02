// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Book Now', path: '/book-now' },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-sm absolute top-0 left-0 right-0 z-50 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-white font-normal transition-colors duration-300 hover:text-orange-500 ${
                    isActive ? 'text-orange-500' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#FF7656] text-white px-6 py-3 rounded-lg font-medium border-2 border-orange-500
                         hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in bg-black/80 backdrop-blur-sm rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-white font-normal transition-colors duration-300 
                     hover:text-orange-500 px-2 py-1 ${
                      isActive ? 'text-orange-500' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium border-2 border-orange-500
                           hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;