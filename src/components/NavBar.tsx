
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-4 border-arcade-red bg-black bg-opacity-80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="font-arcade text-arcade-red text-xl md:text-2xl neon-text">
            ARCADE DK
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="font-arcade text-white hover:text-arcade-yellow transition-colors">
            INICIO
          </Link>
          <Link to="/videos" className="font-arcade text-white hover:text-arcade-yellow transition-colors">
            VIDEOS
          </Link>
          <Link to="/controles" className="font-arcade text-white hover:text-arcade-yellow transition-colors">
            CONTROLES
          </Link>
          <Link to="/records" className="font-arcade text-white hover:text-arcade-yellow transition-colors">
            RECORDS
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black p-4 border-t-2 border-arcade-red">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-arcade text-white hover:text-arcade-yellow transition-colors py-2 border-b border-arcade-red"
              onClick={() => setIsOpen(false)}
            >
              INICIO
            </Link>
            <Link 
              to="/videos" 
              className="font-arcade text-white hover:text-arcade-yellow transition-colors py-2 border-b border-arcade-red"
              onClick={() => setIsOpen(false)}
            >
              VIDEOS
            </Link>
            <Link 
              to="/controles" 
              className="font-arcade text-white hover:text-arcade-yellow transition-colors py-2 border-b border-arcade-red"
              onClick={() => setIsOpen(false)}
            >
              CONTROLES
            </Link>
            <Link 
              to="/records" 
              className="font-arcade text-white hover:text-arcade-yellow transition-colors py-2 border-b border-arcade-red"
              onClick={() => setIsOpen(false)}
            >
              RECORDS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
