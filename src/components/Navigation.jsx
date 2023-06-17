import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-ff351e">
      <ul className="flex items-center justify-between py-4 ml-9 mr-9">
        <li className="flex items-center">
          {/* Logo teks */}
          <div className="text-white font-bold text-lg">Akhtar APP</div>
        </li>
        <li className="flex space-x-4">
          {/* Elemen <li> */}
          <Link to="/" className="px-3 text-white">
            Home
          </Link>
          <Link to="/about" className="px-3 text-white">
            About
          </Link>
          <Link to="/contact" className="px-3 text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
