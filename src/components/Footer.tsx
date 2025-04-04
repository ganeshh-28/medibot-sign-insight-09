
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-light text-medical-text py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-6 w-6 text-medical-primary" />
              <span className="text-lg font-bold">MediBot SignInsight</span>
            </div>
            <p className="text-sm">
              AI-powered medical consultation platform making healthcare accessible to everyone.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link to="/features" className="text-sm hover:text-primary">Features</Link></li>
              <li><Link to="/chat" className="text-sm hover:text-primary">Chat with MediBot</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-primary">Health Tips</Link></li>
              <li><Link to="#" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link to="#" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: info@medibot.com</li>
              <li className="text-sm">Phone: +1 (555) 123-4567</li>
              <li className="text-sm">Address: 123 Medical Plaza, Health City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 MediBot SignInsight. All rights reserved.</p>
          <p className="text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
