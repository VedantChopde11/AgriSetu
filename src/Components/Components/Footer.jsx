import React from "react"
import {Link} from 'react-router-dom'

import { Sprout, Mail, Phone, MapPin } from 'lucide-react';
import AgriSetuLogo from './AgriSetuLogo.png'

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <img src={AgriSetuLogo} alt="AgriSetu Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                AgriSetu
              </span>
            </div>
            <p className="body-medium mb-4">
              Connecting farmers directly with wholesalers across India. 
              Eliminating middlemen and ensuring fair prices for everyone.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-600" />
                <span className="body-small">contact@agrisetu.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-600" />
                <span className="body-small">+91-9876543210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-3 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="body-small hover:text-green-600 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="body-small hover:text-green-600 transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="body-small hover:text-green-600 transition-colors">Contact</Link></li>
              <li><Link to="/partner" className="body-small hover:text-green-600 transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="heading-3 mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><Link to="/farmer/login" className="body-small hover:text-green-600 transition-colors">Farmer Login</Link></li>
              <li><Link to="/wholesaler/login" className="body-small hover:text-green-600 transition-colors">Wholesaler Login</Link></li>
              <li><Link to="/farmer/signup" className="body-small hover:text-green-600 transition-colors">Join as Farmer</Link></li>
              <li><Link to="/wholesaler/signup" className="body-small hover:text-green-600 transition-colors">Join as Wholesaler</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="body-small">
            © 2025 AgriSetu. All rights reserved. | Connecting Farmer To Market Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
};