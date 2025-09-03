import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import AgriSetuLogo from './AgriSetuLogo.png'

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="nav-header">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center space-x-2">
          <img src={AgriSetuLogo} alt="AgriSetu Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            AgriSetu
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'text-green-600' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/farmer/login" className="btn-primary">
            Farmer Login
          </Link>
          <Link to="/wholesaler/login" className="btn-orange">
            Wholesaler Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link to="/farmer/login" className="bg-black " onClick={() => setIsMenuOpen(false)}>
                Farmer Login
              </Link>
              <Link to="/wholesaler/login" className="bg-black" onClick={() => setIsMenuOpen(false)}>
                Wholesaler Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};