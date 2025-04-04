
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Stethoscope className="h-8 w-8 text-medical-primary" />
          <span className="text-xl font-bold">MediBot SignInsight</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button>
            <Link to="/chat">Start Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-background border-b md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container flex flex-col gap-4 p-6">
          <Link 
            to="/" 
            className="text-base font-medium hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-base font-medium hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/features" 
            className="text-base font-medium hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/contact" 
            className="text-base font-medium hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link to="/chat" className="w-full text-center">Start Consultation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
