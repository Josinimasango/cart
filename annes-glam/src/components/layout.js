import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the icons

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="bg-zinc-200 min-h-screen flex flex-col justify-between">
      {/* Top Section with Black Background */}
      <div className="bg-black text-white">
        <main
          className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
            statusTabCart === false ? '' : '-translate-x-56'
          }`}
        >
          <Header />
        </main>
      </div>

      {/* Bottom Section with White Background */}
      <div className="bg-violet-100 flex-grow">
        <main
          className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
            statusTabCart === false ? '' : '-translate-x-56'
          }`}
        >
          <Outlet />
        </main>
      </div>

      <CartTab />
      <div className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our store! We are dedicated to bringing you the latest and greatest products at unbeatable prices. Our mission is to provide you with a seamless shopping experience and exceptional customer service. Explore our wide range of products and find exactly what you need to enhance your lifestyle. Thank you for choosing us, and we look forward to serving you!
        </p>
      </div>

      {/* Footer with contact details and social media icons */}
      <footer className="bg-gray-800 text-white py-6 mt-10 w-full">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">Email: contact@annesglam.com</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Josinimasango/Annes-Glam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/NelisiweJosini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nelisiwe-masango-831b1a278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;



