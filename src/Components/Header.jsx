// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="p-1 text-3xl font-bold">Avijit Maity</h1>
        <p className="text-lg p-1">SDE</p>
         <p className="p-1">avisrabon22@gmail.com</p>
         <p className="p-1">7289083782 , 7363089888</p>
        <nav className="mt-4">
          <ul className="flex space-x-4 p-1">
            <li><a href="#education" className="hover:text-gray-300">Education</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#weblinks" className="hover:text-gray-300">Social links</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
