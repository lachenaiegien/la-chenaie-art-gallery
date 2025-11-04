import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Accommodations Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
                Séjourner au Domaine
              </h2>
              <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
                Une expérience unique alliant luxe, art contemporain et nature préservée
              </p>

              {/* Accommodations Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-muted/30 rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Nos Hébergements</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span><strong className="text-foreground">3 suites contemporaines</strong> : Les Acacias, Les Fresnes, Les Charmilles</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span><strong className="text-foreground">1 maison indépendante</strong> : Les Hortensias</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span><strong className="text-foreground">Capacité totale</strong> : 8 à 10 personnes</span>
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Chaque logement mêle design, confort et intimité, dans un décor inspiré par la nature et l'art contemporain.
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Espaces de Vie</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span>Grands salons décorés d'œuvres d'art originales</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span>Cuisine équipée et espaces repas conviviaux</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-gallery-gold mr-2">•</span>
                      <span>Terrasses, barbecue et vaste parc arboré</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Amenities Section */}
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-8 md:p-12 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">Équipements & Services</h3>
                <p className="text-center text-muted-foreground mb-8">
                  Accès complet à tous les équipements pour chaque réservation
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">🏊</span>
                    <div>
                      <p className="font-medium text-foreground">Piscine extérieure</p>
                      <p className="text-sm text-muted-foreground">Ouverte de mai à septembre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">🎾</span>
                    <div>
                      <p className="font-medium text-foreground">Terrain de tennis</p>
                      <p className="text-sm text-muted-foreground">Court privé</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">💪</span>
                    <div>
                      <p className="font-medium text-foreground">Salle de sport</p>
                      <p className="text-sm text-muted-foreground">Équipements + baby-foot</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">🧖</span>
                    <div>
                      <p className="font-medium text-foreground">Spa & Jacuzzi</p>
                      <p className="text-sm text-muted-foreground">Sur réservation (supplément)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">🎨</span>
                    <div>
                      <p className="font-medium text-foreground">Parc avec œuvres d'art</p>
                      <p className="text-sm text-muted-foreground">Sculptures monumentales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gallery-gold text-xl">🅿️</span>
                    <div>
                      <p className="font-medium text-foreground">Parking privé</p>
                      <p className="text-sm text-muted-foreground">Sur place</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    <span className="text-gallery-gold font-semibold">→</span> Tous les hébergements sont totalement indépendants et peuvent être réservés séparément selon vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Preview Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Découvrez Notre Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explorez les œuvres exceptionnelles de nos artistes contemporains 
              dans un cadre historique unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/gallery">
                  Voir la Galerie
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/artists">
                  Découvrir les Artistes
                </Link>
              </Button>
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