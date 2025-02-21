import React from "react";
import {FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section - Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Yugal. All rights reserved.
        </div>

        {/* Center Section - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/Yugal2003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yugal-kumbhare-7b9825284/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/yugal___6832/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </a>
        </div>

        {/* Right Section - Links */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          <a href="#" className="hover:text-white px-2">Privacy Policy</a> | 
          <a href="#" className="hover:text-white px-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;