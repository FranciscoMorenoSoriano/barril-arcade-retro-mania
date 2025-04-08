
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Video } from "lucide-react";

const Videos = () => {
  const videoTutorials = [
    {
      id: 1,
      title: "Introducción al Proyecto Arcade",
      description: "Visión general de cómo construir una máquina arcade con materiales reciclados.",
      embedId: "placeholder-1",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      duration: "12:34"
    },
    {
      id: 2,
      title: "Estructura de la Máquina Arcade",
      description: "Aprende a construir la estructura física de la máquina usando cartón y madera reciclada.",
      embedId: "placeholder-2",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      duration: "08:52"
    },
    {
      id: 3,
      title: "Configuración de Controles",
      description: "Aprende a instalar y programar los botones y joysticks para tu arcade.",
      embedId: "placeholder-3",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22", 
      duration: "15:47"
    },
    {
      id: 4,
      title: "Programación del Juego Donkey Kong",
      description: "Tutorial para cargar y configurar el juego en tu máquina arcade.",
      embedId: "placeholder-4",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      duration: "20:10"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-arcade-dark">
      <NavBar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <h1 className="font-arcade text-3xl md:text-4xl text-arcade-blue mb-8 text-center neon-text">
            VIDEOS TUTORIALES
          </h1>
          
          <p className="font-pixel text-white text-lg mb-12 max-w-3xl mx-auto text-center">
            Aprende paso a paso cómo construir tu propia máquina arcade con materiales reciclados
            a través de nuestros videos tutoriales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videoTutorials.map((video) => (
              <div key={video.id} className="retro-container overflow-hidden group">
                <div className="relative aspect-video mb-4 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Video className="text-arcade-red w-16 h-16" />
                    <span className="absolute bottom-2 right-2 bg-black px-2 py-1 font-pixel text-white">
                      {video.duration}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-arcade text-arcade-yellow text-lg mb-2">
                  {video.title}
                </h3>
                <p className="font-pixel text-white mb-4">
                  {video.description}
                </p>
                <button className="arcade-btn btn-red w-full">
                  VER VIDEO
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 retro-container">
            <h2 className="font-arcade text-2xl text-arcade-green mb-6 text-center">
              SUGERENCIAS DE VIDEOS
            </h2>
            <p className="font-pixel text-white text-center mb-4">
              ¿Tienes alguna idea para un nuevo tutorial? ¡Nos encantaría escucharla!
            </p>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-black border-2 border-arcade-blue p-3 font-pixel text-white"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-black border-2 border-arcade-blue p-3 font-pixel text-white"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Describe el video tutorial que te gustaría ver"
                  rows={4}
                  className="w-full bg-black border-2 border-arcade-blue p-3 font-pixel text-white"
                ></textarea>
              </div>
              <button type="button" className="arcade-btn btn-green w-full">
                ENVIAR SUGERENCIA
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
