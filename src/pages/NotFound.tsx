
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-arcade-dark p-4">
      <div className="text-center retro-container max-w-lg">
        <h1 className="text-4xl font-arcade text-arcade-red mb-4 neon-text">ERROR 404</h1>
        <p className="text-xl text-white font-pixel mb-8">
          ¡Game Over! Esta página no existe en nuestro arcade.
        </p>
        <div className="mb-8 flex justify-center">
          <div className="pixelated w-32 h-32 bg-black p-2 border-4 border-arcade-yellow">
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 flex">
                <div className="w-1/3 bg-arcade-red"></div>
                <div className="w-1/3 bg-arcade-blue"></div>
                <div className="w-1/3 bg-arcade-green"></div>
              </div>
              <div className="h-4 bg-black"></div>
              <div className="h-4 bg-arcade-yellow"></div>
            </div>
          </div>
        </div>
        <Link to="/" className="arcade-btn btn-blue inline-block">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
