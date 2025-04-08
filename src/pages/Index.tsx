
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-arcade-dark bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-no-repeat bg-cover bg-fixed bg-blend-color-burn">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-arcade text-4xl md:text-6xl text-arcade-yellow mb-8 leading-tight neon-text animate-arcade-blink">
              ARCADE DONKEY KONG RECICLADO
            </h1>
            <p className="font-pixel text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
              Un proyecto educativo para aprender a construir tu propia máquina arcade 
              con materiales reciclados inspirada en el clásico Donkey Kong.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/videos" className="arcade-btn btn-red">
                VER VIDEOS
              </Link>
              <Link to="/controles" className="arcade-btn btn-blue">
                CONTROLES
              </Link>
              <Link to="/records" className="arcade-btn btn-yellow">
                RECORDS
              </Link>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="retro-container max-w-4xl mx-auto">
              <h2 className="font-arcade text-2xl md:text-3xl text-arcade-green mb-8 text-center">
                SOBRE EL PROYECTO
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-arcade text-arcade-yellow text-lg mb-4">
                    MATERIALES RECICLADOS
                  </h3>
                  <p className="font-pixel text-white text-lg mb-6">
                    Aprende a reutilizar y dar nueva vida a materiales que normalmente
                    irían a la basura. Construimos nuestra máquina arcade con cartón,
                    madera recuperada y componentes electrónicos básicos.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-arcade text-arcade-yellow text-lg mb-4">
                    PROGRAMACIÓN DIDÁCTICA
                  </h3>
                  <p className="font-pixel text-white text-lg mb-6">
                    Aprenderás conceptos básicos de electrónica y programación
                    mientras construyes tu propia versión del clásico juego Donkey Kong.
                    ¡Sin experiencia previa necesaria!
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="font-arcade text-arcade-red text-lg mb-4">
                  BENEFICIOS EDUCATIVOS
                </h3>
                <ul className="font-pixel text-white text-lg space-y-2">
                  <li>🎮 Desarrollo de habilidades técnicas y creativas</li>
                  <li>🌱 Conciencia medioambiental y reutilización</li>
                  <li>🧠 Pensamiento lógico y resolución de problemas</li>
                  <li>🛠️ Diseño, construcción y prueba de sistemas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-black bg-opacity-70">
          <div className="container mx-auto text-center">
            <h2 className="font-arcade text-2xl md:text-3xl text-arcade-pink mb-6">
              ¡COMIENZA TU AVENTURA ARCADE!
            </h2>
            <p className="font-pixel text-white text-xl mb-8 max-w-2xl mx-auto">
              Explora nuestros recursos y comienza a construir tu propia máquina arcade
              con materiales reciclados. ¡Diversión y aprendizaje garantizados!
            </p>
            <Link to="/videos" className="arcade-btn btn-green inline-block">
              COMENZAR AHORA
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
