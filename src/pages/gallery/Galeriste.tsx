import HeaderGallery from "@/components/HeaderGallery";
import FooterGallery from "@/components/FooterGallery";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Galeriste = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderGallery />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                Accueil
              </Button>
            </Link>
            <Link to="/galerie/accueil">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Galerie
              </Button>
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Le Galeriste
            </h1>
            <div className="w-24 h-1 bg-gallery-gold mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné d'art contemporain et fondateur de la galerie La Chênaie
            </p>
          </div>
        </div>
      </section>

      {/* Portrait Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-gallery-gold/10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">🎨</span>
                      </div>
                      <p className="text-sm">Photo du galeriste</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gallery-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Nom du Galeriste
                  </h2>
                  <p className="text-gallery-gold font-medium text-lg">
                    Fondateur & Directeur Artistique
                  </p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Passionné d'art contemporain depuis plus de vingt ans, le galeriste a créé 
                    La Chênaie avec une vision claire : faire dialoguer les œuvres monumentales 
                    avec la nature environnante du domaine.
                  </p>
                  <p>
                    Son parcours l'a mené à travers les galeries et ateliers du monde entier, 
                    tissant des liens privilégiés avec des artistes d'exception. C'est cette 
                    expérience qui lui permet aujourd'hui de proposer une sélection d'œuvres 
                    uniques et authentiques.
                  </p>
                  <p>
                    La Chênaie représente l'aboutissement d'un rêve : créer un lieu où l'art 
                    contemporain prend vie au cœur d'un écrin naturel préservé, offrant aux 
                    visiteurs une expérience immersive et mémorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Sa Vision
            </h3>
            <blockquote className="text-xl italic text-muted-foreground leading-relaxed border-l-4 border-gallery-gold pl-6 text-left">
              "L'art contemporain ne doit pas être enfermé entre quatre murs. 
              Il doit respirer, dialoguer avec son environnement, surprendre le regard. 
              À La Chênaie, chaque œuvre trouve sa place dans un écosystème vivant 
              où nature et création humaine se répondent."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Cross-promotion */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-primary/5 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Découvrez nos œuvres
            </h3>
            <p className="text-muted-foreground mb-6">
              Explorez la collection d'art contemporain sélectionnée avec passion
            </p>
            <Link to="/galerie">
              <Button className="bg-gallery-gold hover:bg-gallery-gold/90 text-primary">
                Voir les œuvres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterGallery />
    </div>
  );
};

export default Galeriste;
