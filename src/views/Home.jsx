// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Landing Page</h1>
        <a
          href="https://tailwindcss.com/"
          target="blank"
          className="py-2 px-4 bg-ff351e text-white font-semibold rounded-md"
        >
          Cek Tailwind
        </a>
      </div>
    </div>
  );
};

export default Home;
