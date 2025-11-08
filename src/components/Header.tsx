import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl text-gray-900">Smart Thinkers</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#process" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Process</a>
              <a href="#impact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Impact</a>
              <a href="#attendance" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Live Attendance</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Features</a>
              <a href="#process" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Process</a>
              <a href="#impact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Impact</a>
              <a href="#attendance" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Live Attendance</a>
              <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;