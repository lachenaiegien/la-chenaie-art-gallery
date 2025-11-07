import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import danseReflets from "@/assets/danse-reflets1.png";
import danseTemps from "@/assets/danse-temps.png";
import eclatSilence from "@/assets/eclat-silence1.png";
import elan from "@/assets/elan1.png";
import enigme from "@/assets/enigme.png";
import flammesDouces from "@/assets/flammes-douces1.png";
import harmonie from "@/assets/harmonie1.png";

// ⬇️ Ajout: carrousel shadcn (déjà utilisé ailleurs)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  // 👉 Remplace ces images par celles de tes œuvres (Jingyu BAI, etc.)
  const artworks = [
    { src: danseReflets, alt: "Danse des Reflets" },
    { src: eclatSilence, alt: "Éclat du Silence" },
    { src: elan, alt: "Élan" },
    { src: flammesDouces, alt: "Flammes Douces" },
    { src: harmonie, alt: "Harmonie" },
  ];

  return (
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <Hero />

          {/* Séjourner au Domaine — card unique, fond “domaine” subtil */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
                  Séjourner au Domaine
                </h2>
                <p className="text-xl text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Une expérience unique alliant luxe, art contemporain et nature préservée
                </p>

                <div className="bg-domaine rounded-2xl p-8 md:p-12 border border-border shadow-gallery-soft">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        Nos Hébergements
                      </h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>
                          <strong className="text-foreground">3 suites contemporaines</strong> : Les Acacias, Les Fresnes, Les Charmilles
                        </span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>
                          <strong className="text-foreground">1 maison indépendante</strong> : Les Hortensias
                        </span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>
                          <strong className="text-foreground">Capacité totale</strong> : 8 à 10 personnes
                        </span>
                        </p>
                      </div>

                      <p className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground italic">
                        Chaque logement mêle design, confort et intimité, dans un décor inspiré par la nature et l’art contemporain.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">Espaces de Vie</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>Grands salons décorés d’œuvres d’art originales</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>Cuisine équipée et espaces repas conviviaux</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>Terrasses, barbecue et vaste parc arboré</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-gallery-gold mr-2">•</span>
                          <span>Piscine, Spa avec jacuzzi et massage (en supplément), salle de sport</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" className="bg-gallery-gold hover:bg-gallery-gold/90 text-primary font-semibold rounded-full px-8 shadow-gallery-medium">
                      <Link to="/booking">Réserver une suite ou le domaine</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="oeuvres" className="py-20 bg-gallery">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
                  Découvrez Notre Collection
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
                  Aperçu des sculptures monumentales exposées au domaine.
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
                                      className="
    w-full
    h-[800px]        /* mobile : bien plus haut */
    sm:h-[550px]     /* petit écran/tablette */
    md:h-[650px]     /* desktop normal */
    lg:h-[750px]     /* grand écran = effet monumental */
    object-cover
    transition-transform
    duration-500
    hover:scale-105
  "
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

                    {/* Flèches centrées verticalement */}
                    <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/gallery">Voir la Galerie</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/artists">Découvrir les Artistes</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>



          <Venue />
          <Contact />
        </main>

        <Footer />
      </div>
  );
};

export default Index;
