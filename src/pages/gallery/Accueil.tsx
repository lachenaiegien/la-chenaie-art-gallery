import HeaderGallery from "@/components/HeaderGallery";
import FooterGallery from "@/components/FooterGallery";
import Artist from "@/components/Artist";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import danseReflets from "@/assets/danse-reflets1.png";
import eclatSilence from "@/assets/eclat-silence1.png";
import elan from "@/assets/elan1.png";
import flammesDouces from "@/assets/flammes-douces1.png";
import harmonie from "@/assets/harmonie1.png";
import artisteImage from "@/assets/artiste.png";
import vuejardin from "@/assets/chateau-chenaie4.png";

const GalleryAccueil = () => {
  const artworks = [
    { src: danseReflets, alt: "Danse des Reflets" },
    { src: eclatSilence, alt: "Éclat du Silence" },
    { src: elan, alt: "Élan" },
    { src: flammesDouces, alt: "Flammes Douces" },
    { src: harmonie, alt: "Harmonie" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeaderGallery />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
          <img
            src={vuejardin}
            alt="Art Contemporain"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">
              Art Contemporain Monumental
            </h1>

            <p className="text-lg md:text-xl text-white/95 mb-3 font-semibold">
              Collection de Sculptures Uniques
            </p>

            <p className="text-base md:text-lg text-white/85 mb-8">
              Découvrez des œuvres monumentales qui dialoguent avec la nature et l'architecture classique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gallery-gold hover:bg-gallery-gold/90 text-primary font-semibold px-8 py-3 rounded-full shadow-gallery-medium"
                asChild
              >
                <Link to="/gallery">Voir Toutes les Œuvres</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/90 hover:bg-white text-primary font-semibold px-8 py-3 rounded-full"
                asChild
              >
                <Link to="/artists">Découvrir l'Artiste</Link>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/90" />
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-20 bg-gallery">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
                Œuvres Sélectionnées
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
                Aperçu de sculptures monumentales exposées au domaine
              </p>

              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {artworks.map((a, i) => (
                      <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <div className="overflow-hidden rounded-2xl border border-border shadow-gallery-medium bg-card">
                            <div className="relative">
                              <img
                                src={a.src}
                                alt={a.alt}
                                className="w-full h-[800px] sm:h-[550px] md:h-[650px] lg:h-[750px] object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                            </div>
                          </div>
                          <p className="text-center py-2 font-medium text-foreground text-lg">
                            {a.alt}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>

              <div className="flex justify-center mt-10">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/gallery">Voir la Collection Complète</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Artist />

          <section className="py-8 bg-background">
              <div className="container mx-auto px-4">
                  <div className="max-w-2xl mx-auto bg-domaine border border-border rounded-lg p-5 md:p-6 shadow-sm text-center">
                      <Home className="w-8 h-8 text-gallery-gold mx-auto mb-2" />

                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                          Séjournez au Domaine
                      </h3>

                      <p className="text-muted-foreground mb-3 text-sm md:text-base leading-relaxed">
                          Réservez une suite luxueuse et profitez d'un séjour d'exception au cœur du domaine
                      </p>

                      <Button
                          asChild
                          size="sm"
                          className="bg-gallery-gold hover:bg-gallery-gold/90 text-primary font-semibold"
                      >
                          <a
                              href="https://www.lachenaiedomaine.fr/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Découvrir nos Hébergements
                          </a>
                      </Button>
                  </div>
              </div>
          </section>

      </main>

      <FooterGallery />
    </div>
  );
};

export default GalleryAccueil;
