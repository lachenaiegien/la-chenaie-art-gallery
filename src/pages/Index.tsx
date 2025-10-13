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