import React from "react";
import { Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="flex justify-center items-center space-x-8 p-6 bg-gray-900 border border-gray-600">
        <Link className="relative flex items-center w-40 h-40 hover:scale-110 transition-transform duration-300">
          <img
            src="/logoBNB.jpg"
            alt="BNB Chain"
            className="object-contain w-full h-full border-2 border-gray-500 p-2 bg-gray-800 rounded-lg shadow-lg"
          />
        </Link>
        <span className="text-xl text-gray-400">🔗🔗🔗</span>
        <Link className="relative flex items-center w-40 h-40 hover:scale-110 transition-transform duration-300">
          <img
            src="/logoETH.jpg"
            alt="ETH Chain"
            className="object-contain w-full h-full border-2 border-gray-500 p-2 bg-gray-800 rounded-lg shadow-lg"
          />
        </Link>
        <span className="text-xl text-gray-400">🔗🔗🔗</span>
        <Link className="relative flex items-center w-40 h-40 hover:scale-110 transition-transform duration-300">
          <img
            src="/logoPOL.jpg"
            alt="Polkadot Chain"
            className="object-contain w-full h-full border-2 border-gray-500 p-2 bg-gray-800 rounded-lg shadow-lg"
          />
        </Link>
        <span className="text-xl text-gray-400">🔗🔗🔗</span>
        <Link className="relative flex items-center w-40 h-40 hover:scale-110 transition-transform duration-300">
          <img
            src="/logoSOL.jpg"
            alt="SOL Chain"
            className="object-contain w-full h-full border-2 border-gray-500 p-2 bg-gray-800 rounded-lg shadow-lg"
          />
        </Link>
      </div>

      <nav className="container mx-auto p-4 flex justify-between items-center bg-gray-800 mt-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-white">
            Control Panel Blockchain
          </h1>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/sol" className="text-white hover:text-gray-400">
            SOL Chain
          </Link>
          <Link to="/eth" className="text-white hover:text-gray-400">
            ETH Chain
          </Link>
          <Link to="/bnb" className="text-white hover:text-gray-400">
            BNB Chain
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHeader;
