import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage 
        ? 'bg-white shadow-lg backdrop-blur-sm' 
        : 'bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-white shadow-md border border-gray-100' 
                : 'bg-white/95 backdrop-blur-sm shadow-lg border border-white/20'
            }`}>
              <img 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1749742780/SSDIPL_LOGO-removebg-preview_t69d6x.png" 
                alt="SSDIPL Logo" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className={`text-base lg:text-lg font-bold transition-all duration-300 ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>
                Sri Sai Drillers & Infrastructure
              </h1>
              <p className={`text-xs lg:text-sm transition-all duration-300 ${
                isScrolled || !isHomePage ? 'text-blue-600 font-medium' : 'text-blue-100 drop-shadow-md'
              }`}>
                Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:scale-105 ${
                  location.pathname === item.href
                    ? (isScrolled || !isHomePage ? 'text-blue-600 bg-blue-50' : 'text-blue-200 bg-white/10')
                    : (isScrolled || !isHomePage 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10 backdrop-blur-sm')
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;