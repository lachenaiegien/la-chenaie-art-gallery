import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin } from "lucide-react";
import chateauImage from "@/assets/chateau-chenaie.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gallery-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={chateauImage}
          alt="Château de La Chénaie"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-gallery-fade-in">
          {/* Golden Keys Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-gallery-gold">
                <path
                  fill="currentColor"
                  d="M12 2L8 6H16L12 2ZM8 18L12 22L16 18L12 14L8 18Z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            LA CHÉNAIE
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
            Art Contemporain International
          </p>
          
          <p className="text-lg text-white/80 mb-8 font-light">
            Œuvres monumentales
          </p>

          <div className="flex items-center justify-center text-white/70 mb-12">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">GIEN, Loiret</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gallery-gold hover:bg-gallery-gold/90 text-primary font-semibold px-8 py-3 rounded-full shadow-gallery-medium"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir les Œuvres
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-full"
              onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Visiter le Domaine
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;