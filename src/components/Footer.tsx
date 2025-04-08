
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-4 border-arcade-green mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-arcade text-arcade-green text-lg mb-2">PROYECTO ARCADE RECICLADO</h2>
            <p className="font-pixel text-white text-sm md:text-base">
              Un proyecto educativo para construir una máquina arcade con materiales reciclados.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Link to="/" className="font-pixel text-white hover:text-arcade-yellow transition-colors">
                Inicio
              </Link>
              <Link to="/videos" className="font-pixel text-white hover:text-arcade-yellow transition-colors">
                Videos
              </Link>
              <Link to="/controles" className="font-pixel text-white hover:text-arcade-yellow transition-colors">
                Controles
              </Link>
              <Link to="/records" className="font-pixel text-white hover:text-arcade-yellow transition-colors">
                Records
              </Link>
            </div>
            <p className="font-pixel text-arcade-blue text-sm">
              &copy; {currentYear} Arcade Donkey Kong Reciclado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
