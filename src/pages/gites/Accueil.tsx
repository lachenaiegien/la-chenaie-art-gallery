import HeaderGites from "@/components/HeaderGites";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const GitesAccueil = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderGites />

      <main>
        <Hero />

        {/* Section Hébergements */}
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
                      Tous les hébergements sont totalement indépendants et peuvent être réservés séparément selon vos besoins.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Équipements & Services
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Piscine extérieure (mai-septembre)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Terrain de tennis privé</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Salle de sport avec Babyfoot</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Spa, jacuzzi et salle détente (sur réservation)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Parc paysager avec sculptures monumentales</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-gallery-gold mr-2">•</span>
                        <span>Terrasses meublées, barbecue et parking privé</span>
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

        <Venue />
        <Contact />

        {/* Cross-promotion vers galerie */}
        <section className="py-16 bg-gallery">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-gallery-soft text-center">
              <Palette className="w-12 h-12 text-gallery-gold mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Découvrez Notre Collection d'Art
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Visitez et acquérez des œuvres contemporaines monumentales exposées dans notre domaine
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/gallery/accueil">Explorer la Galerie</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GitesAccueil;
