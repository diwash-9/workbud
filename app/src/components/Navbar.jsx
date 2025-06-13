import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          Workout Buddy
        </Link>
        {/* You can add navigation links here in the future */}
        {/* <nav>
          <ul className="flex gap-6 text-gray-700">
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Navbar;
