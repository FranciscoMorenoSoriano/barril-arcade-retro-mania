
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Award } from "lucide-react";

interface HighScore {
  id: number;
  name: string;
  score: number;
  level: number;
  date: string;
}

const Records = () => {
  const [newName, setNewName] = useState("");
  const [newScore, setNewScore] = useState("");
  const [newLevel, setNewLevel] = useState("");
  
  const [highScores, setHighScores] = useState<HighScore[]>([
    { id: 1, name: "MARIO", score: 850000, level: 22, date: "02/04/2025" },
    { id: 2, name: "JUMPMAN", score: 720000, level: 18, date: "28/03/2025" },
    { id: 3, name: "PAULINE", score: 650000, level: 15, date: "25/03/2025" },
    { id: 4, name: "DK_ARCADE", score: 540000, level: 12, date: "20/03/2025" },
    { id: 5, name: "BARRIL", score: 420000, level: 10, date: "15/03/2025" },
    { id: 6, name: "KONG_JR", score: 320000, level: 8, date: "10/03/2025" },
    { id: 7, name: "CRANKY", score: 230000, level: 6, date: "05/03/2025" },
    { id: 8, name: "DIDDY", score: 180000, level: 5, date: "01/03/2025" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newName || !newScore || !newLevel) return;
    
    const scoreValue = parseInt(newScore);
    const levelValue = parseInt(newLevel);
    
    if (isNaN(scoreValue) || isNaN(levelValue)) return;
    
    const today = new Date();
    const dateStr = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    
    const newHighScore: HighScore = {
      id: highScores.length + 1,
      name: newName.toUpperCase().substring(0, 8),
      score: scoreValue,
      level: levelValue,
      date: dateStr
    };
    
    const updatedScores = [...highScores, newHighScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    setHighScores(updatedScores);
    setNewName("");
    setNewScore("");
    setNewLevel("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-arcade-dark">
      <NavBar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <h1 className="font-arcade text-3xl md:text-4xl text-arcade-yellow mb-8 text-center neon-text">
            TABLA DE RÉCORDS
          </h1>
          
          <p className="font-pixel text-white text-lg mb-12 max-w-3xl mx-auto text-center">
            ¡Mira las mejores puntuaciones alcanzadas por los jugadores de nuestra máquina arcade!
            ¿Podrás superar estos récords?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* High Scores Table */}
            <div className="md:col-span-2 retro-container">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="text-arcade-yellow w-8 h-8" />
                <h2 className="font-arcade text-2xl text-arcade-yellow text-center">
                  TOP SCORES
                </h2>
                <Award className="text-arcade-yellow w-8 h-8" />
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-arcade-blue text-white border-b-4 border-white">
                      <th className="font-arcade py-3 px-2 text-left">#</th>
                      <th className="font-arcade py-3 px-2 text-left">NOMBRE</th>
                      <th className="font-arcade py-3 px-2 text-right">PUNTOS</th>
                      <th className="font-arcade py-3 px-2 text-center">NIVEL</th>
                      <th className="font-arcade py-3 px-2 text-right">FECHA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {highScores.map((score, index) => (
                      <tr key={score.id} className={`border-b-2 border-arcade-blue ${index < 3 ? 'animate-arcade-blink' : ''}`}>
                        <td className={`font-arcade py-3 px-2 ${index === 0 ? 'text-arcade-yellow' : index === 1 ? 'text-white' : index === 2 ? 'text-arcade-orange' : 'text-arcade-purple'}`}>
                          {index + 1}
                        </td>
                        <td className="font-arcade py-3 px-2 text-white">
                          {score.name}
                        </td>
                        <td className="font-arcade py-3 px-2 text-right text-arcade-green">
                          {score.score.toLocaleString()}
                        </td>
                        <td className="font-arcade py-3 px-2 text-center text-arcade-blue">
                          {score.level}
                        </td>
                        <td className="font-pixel py-3 px-2 text-right text-white">
                          {score.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-black border-2 border-arcade-yellow">
                <p className="font-pixel text-arcade-yellow text-center text-sm">
                  * Los récords se actualizan cada vez que un nuevo jugador supera una puntuación anterior.
                  Solo se guardan los 10 mejores récords.
                </p>
              </div>
            </div>
            
            {/* Submit New Score */}
            <div className="retro-container">
              <h2 className="font-arcade text-xl text-arcade-red mb-6 text-center">
                REGISTRAR NUEVO RÉCORD
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block font-arcade text-white text-sm mb-2">
                    NOMBRE (MAX 8 CARACTERES)
                  </label>
                  <input 
                    type="text"
                    maxLength={8}
                    className="w-full bg-black border-2 border-arcade-blue p-3 font-arcade text-arcade-green uppercase"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block font-arcade text-white text-sm mb-2">
                    PUNTUACIÓN
                  </label>
                  <input 
                    type="number"
                    className="w-full bg-black border-2 border-arcade-blue p-3 font-arcade text-arcade-green"
                    value={newScore}
                    onChange={(e) => setNewScore(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block font-arcade text-white text-sm mb-2">
                    NIVEL ALCANZADO
                  </label>
                  <input 
                    type="number"
                    min="1"
                    max="99"
                    className="w-full bg-black border-2 border-arcade-blue p-3 font-arcade text-arcade-green"
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="arcade-btn btn-red w-full">
                  GUARDAR RÉCORD
                </button>
              </form>
              
              <div className="mt-8">
                <h3 className="font-arcade text-arcade-green text-center mb-4">
                  CONSEJOS PARA PUNTUAR
                </h3>
                <ul className="font-pixel text-white space-y-2 text-sm">
                  <li>• Salta sobre barriles: +300 pts</li>
                  <li>• Recoge objetos: +500 pts</li>
                  <li>• Completa nivel: +5000 pts</li>
                  <li>• Bonus por tiempo: hasta +5000 pts</li>
                  <li>• Usa martillo: +500 pts/barril</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Records;
