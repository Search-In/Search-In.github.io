import React from "react";
import facebook from "../images/image13.png"
import insta from "../images/image14.png"
import twitter from "../images/image15.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg">Product</h3>
            <ul className="mt-2">
              <li>Web-App</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Information</h3>
            <ul className="mt-2">
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="mt-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Social</h3>
            <ul className="mt-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
          <p>Search-In Estore</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Terms</a>
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Cookies</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white text-xl hover:text-gray-400">
              <img src= {facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-400">
              <img src= {insta} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-400">
              <img src= {twitter} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
