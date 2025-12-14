import HeaderGallery from "@/components/HeaderGallery";
import FooterGallery from "@/components/FooterGallery";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import legaleriste from "@/assets/jean-louis2.png";

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
            <Link to="/galerie">
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
              Passionné d'art contemporain et fondateur de la galerie La Chênaie Art Contemporain
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
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={legaleriste}
                            alt="Jean-Louis Saget, galeriste"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Effets décoratifs */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gallery-gold/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                </div>


              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    JEAN-LOUIS SAGET
                  </h2>
                  <p className="text-gallery-gold font-medium text-lg">
                    Fondateur & Directeur Artistique
                  </p>
                </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                          Issu du <strong>monde entrepreneurial</strong>, <strong>Jean-Louis SAGET</strong> reprend à l’âge de <strong>vingt-et-un ans</strong> un <strong>domaine viticole familial</strong>, qu’il développe avec <strong>exigence et vision</strong> sur plusieurs décennies.
                          Sa carrière est entièrement consacrée à <strong>l’accroissement du potentiel culturel, patrimonial et commercial</strong> de l’activité viticole.
                      </p>
                      <p>
                          Il fonde et structure ainsi <strong>une dizaine de sociétés</strong> implantées <strong>le long de la Loire</strong>, contribuant activement au <strong>rayonnement de ce territoire</strong>.
                      </p>

                      <p>
                          Parallèlement, il investit dans le <strong>secteur de l’hôtellerie</strong>, poursuivant une approche fondée sur <strong>l’accueil</strong>, <strong>l’esthétique des lieux</strong> et <strong>l’art de vivre</strong>.
                      </p>

                      <p>
                          À l’heure de la retraite, animé par une <strong>passion ancienne pour l’art</strong>, il s’affirme comme <strong>amateur éclairé</strong> et <strong>collectionneur averti</strong>.
                          Il crée alors une <strong>galerie d’art</strong> avec la volonté de <strong>soutenir la création contemporaine</strong> et de <strong>révéler de nouveaux talents</strong>, peintres et sculpteurs, en privilégiant des œuvres <strong>exigeantes</strong>, <strong>singulières</strong> et <strong>porteuses de sens</strong>.
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section
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
      </section>*/}

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
