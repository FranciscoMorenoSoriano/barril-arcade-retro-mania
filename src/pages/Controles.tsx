
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ControlButton from "../components/ControlButton";
import JoystickControl from "../components/JoystickControl";
import { Joystick } from "lucide-react";

const Controles = () => {
  return (
    <div className="min-h-screen flex flex-col bg-arcade-dark">
      <NavBar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <h1 className="font-arcade text-3xl md:text-4xl text-arcade-green mb-8 text-center neon-text">
            CONTROLES DEL JUEGO
          </h1>
          
          <p className="font-pixel text-white text-lg mb-12 max-w-3xl mx-auto text-center">
            Conoce todos los controles de nuestra máquina arcade y su funcionalidad
            dentro del juego Donkey Kong.
          </p>
          
          <div className="retro-container mb-12">
            <h2 className="font-arcade text-2xl text-arcade-yellow mb-8 text-center">
              PANEL DE CONTROL
            </h2>
            
            <div className="bg-black border-4 border-arcade-red p-8 relative overflow-hidden">
              {/* Panel background design */}
              <div className="absolute top-0 left-0 w-full h-2 bg-arcade-yellow"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-arcade-yellow"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-around items-center gap-12 py-8">
                {/* Joystick */}
                <JoystickControl />
                
                {/* Buttons Group */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  <ControlButton 
                    label="A" 
                    description="Saltar" 
                    color="red" 
                  />
                  <ControlButton 
                    label="B" 
                    description="Martillo" 
                    color="blue" 
                  />
                  <ControlButton 
                    label="X" 
                    description="Acción especial" 
                    color="green" 
                  />
                  <ControlButton 
                    label="Y" 
                    description="Pausa" 
                    color="yellow" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Control Functions Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="retro-container">
              <h3 className="font-arcade text-xl text-arcade-blue mb-4">
                MOVIMIENTOS BÁSICOS
              </h3>
              <ul className="font-pixel text-white space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-yellow">→</span>
                  <span>Mover a la derecha - Avanza hacia la derecha</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-yellow">←</span>
                  <span>Mover a la izquierda - Retrocede hacia la izquierda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-yellow">↑</span>
                  <span>Subir escaleras - Sube cuando estás sobre una escalera</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-yellow">↓</span>
                  <span>Bajar escaleras - Baja cuando estás sobre una escalera</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-red">A</span>
                  <span>Saltar - Salta para evitar barriles y enemigos</span>
                </li>
              </ul>
            </div>
            
            <div className="retro-container">
              <h3 className="font-arcade text-xl text-arcade-red mb-4">
                ACCIONES ESPECIALES
              </h3>
              <ul className="font-pixel text-white space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-blue">B</span>
                  <span>Martillo - Recoge y usa el martillo para destruir barriles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-green">X</span>
                  <span>Acción especial - Interactúa con objetos del escenario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-arcade-yellow">Y</span>
                  <span>Pausa - Pausa el juego durante la partida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-white">START</span>
                  <span>Iniciar juego - Comienza una nueva partida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-white">SELECT</span>
                  <span>Seleccionar - Cambia opciones en el menú</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Tips Section */}
          <div className="retro-container">
            <h2 className="font-arcade text-2xl text-arcade-pink mb-6 text-center">
              CONSEJOS DE JUEGO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-arcade text-arcade-yellow text-lg mb-4">
                  PRINCIPIANTES
                </h3>
                <ul className="font-pixel text-white space-y-2">
                  <li>• Practica el timing de los saltos</li>
                  <li>• Aprende los patrones de los barriles</li>
                  <li>• Utiliza las escaleras para esquivar</li>
                  <li>• El martillo te hace invencible temporalmente</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-arcade text-arcade-yellow text-lg mb-4">
                  AVANZADOS
                </h3>
                <ul className="font-pixel text-white space-y-2">
                  <li>• Salta sobre los barriles para puntos extra</li>
                  <li>• Completa niveles rápido para bonus</li>
                  <li>• Memoriza los puntos de aparición de objetos</li>
                  <li>• Aprende rutas óptimas en cada nivel</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-arcade-blue bg-opacity-20 border-2 border-arcade-blue">
              <div className="flex items-center gap-2 mb-2">
                <Joystick className="text-arcade-yellow w-6 h-6" />
                <h3 className="font-arcade text-arcade-yellow text-lg">
                  RECUERDA
                </h3>
              </div>
              <p className="font-pixel text-white">
                Los controles de nuestra máquina arcade están diseñados para ser intuitivos y
                fáciles de usar, siguiendo el estilo de las máquinas clásicas de Donkey Kong.
                ¡Practica y domina los controles para conseguir las mejores puntuaciones!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Controles;
