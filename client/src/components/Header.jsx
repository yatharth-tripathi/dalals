import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Librarinas</Link>
        </div>
        <div className="flex items-center">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Find your library"
              className="py-2 px-4 bg-gray-700 text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 mt-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a7 7 0 100-14 7 7 0 000 14zm6.293-1.293l3.004 3.004-1.414 1.414-3.004-3.004a7 7 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="ml-4 space-x-4">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white hover:underline"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white hover:underline"
            >
              Profile
            </Link>
            <Link
              to="/signin"
              className="text-gray-300 hover:text-white hover:underline"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-gray-300 hover:text-white hover:underline"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
