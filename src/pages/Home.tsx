import { Link } from "react-router-dom";
import { Home, Palette } from "lucide-react";
import chateauImage from "@/assets/chateau-chenaie.png";

const HomePage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={chateauImage}
        alt="Château de La Chênaie"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-wide">
          LA CHÊNAIE
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-16 font-light">
          Domaine d'Exception entre Art et Nature
        </p>

        {/* Two main choices */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gîtes Section */}
          <Link
            to="/gites/accueil"
            className="group relative overflow-hidden rounded-3xl border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-500 p-10 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all">
                <Home className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Gîtes & Hébergements
              </h2>
              
              <p className="text-white/80 text-lg leading-relaxed">
                Séjournez dans nos suites luxueuses et profitez du domaine en toute exclusivité
              </p>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-gallery-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>

          {/* Galerie Section */}
          <Link
            to="/gallery/accueil"
            className="group relative overflow-hidden rounded-3xl border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-500 p-10 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all">
                <Palette className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Art Contemporain
              </h2>
              
              <p className="text-white/80 text-lg leading-relaxed">
                Découvrez notre collection de sculptures monumentales et œuvres uniques
              </p>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
