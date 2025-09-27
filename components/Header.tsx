
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          EduGame Hub
        </span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
        Discover the best educational games to power up your learning journey.
      </p>
    </header>
  );
};

export default Header;
