import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin } from "lucide-react";
import chateauImage from "@/assets/chateau-chenaie.png";

const Hero = () => {
  const scrollToGallery = () =>
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });

  const scrollToVenue = () =>
      document.getElementById("venue")?.scrollIntoView({ behavior: "smooth" });

  return (
      <section
          id="home"
          className="min-h-screen relative flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <img
            src={chateauImage}
            alt="Château de La Chênaie"
            className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Voile noir & dégradé luxe */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">
              Suites Luxueuses
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-3 font-semibold">
               Nature, Art et tout le confort d'un grand hôtel
          </p>

          {/* Location */}
          <div className="flex items-center justify-center text-white/85 mb-10 text-sm md:text-base">
            <MapPin className="w-4 h-4 mr-2" />
            Le Chétif Puit, GIEN, 45500, Loiret
          </div>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* CTA Réservation */}
            <Button
                size="lg"
                className="
      bg-white/90
      hover:bg-white
      text-black font-semibold
      px-8 py-3 rounded-full
      shadow-[0_4px_25px_rgba(255,255,255,0.25)]
      transition-all
    "
                onClick={() => window.location.href = '/booking'}
            >
              Réserver une Suite ou le Domaine
            </Button>

          </div>

        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/90" />
        </div>
      </section>
  );
};

export default Hero;
