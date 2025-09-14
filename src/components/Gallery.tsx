import ArtworkCard from "./ArtworkCard";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import { useState } from "react";

// Import des images
import flammesDoucesImage from "@/assets/flammes-douces.png";
import danseRefletsImage from "@/assets/danse-reflets.png";
import danseTempsImage from "@/assets/danse-temps.png";
import harmonieImage from "@/assets/harmonie.png";
import enigmeImage from "@/assets/enigme.png";
import ariaImage from "@/assets/aria.png";
import infiniteLoopImage from "@/assets/infinite-loop.png";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const artworks = [
    {
      title: "Flammes Douces",
      artist: "Jingyu BAI",
      image: flammesDoucesImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.50m x 1.20m x 0.80m",
      description: "Une sculpture fluide qui capture la danse éternelle des flammes dans le métal poli, reflétant la lumière naturelle du domaine."
    },
    {
      title: "Danse des Reflets",
      artist: "Jingyu BAI", 
      image: danseRefletsImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.20m x 1.00m x 0.90m",
      description: "Les formes entrelacées créent un jeu infini de reflets, symbolisant l'harmonie entre l'art contemporain et l'architecture classique."
    },
    {
      title: "Danse du Temps",
      artist: "Jingyu BAI",
      image: danseTempsImage,
      year: "2024", 
      material: "Acier corten",
      dimensions: "2.80m x 1.40m x 1.10m",
      description: "La patine naturelle du corten évoque le passage du temps, tandis que les formes dynamiques célèbrent l'instant présent."
    },
    {
      title: "Harmonie",
      artist: "Jingyu BAI",
      image: harmonieImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.60m x 1.30m x 0.95m", 
      description: "Des courbes parfaites qui s'entrelacent dans un équilibre délicat, incarnant la recherche perpétuelle d'harmonie."
    },
    {
      title: "Énigme",
      artist: "Jingyu BAI",
      image: enigmeImage,
      year: "2024",
      material: "Acier corten",
      dimensions: "2.40m x 1.15m x 0.85m",
      description: "Une forme mystérieuse qui interroge et fascine, invitant le spectateur à découvrir ses secrets cachés."
    },
    {
      title: "Aria",
      artist: "Jingyu BAI",
      image: ariaImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.70m x 1.25m x 1.00m",
      description: "Comme une mélodie figée dans le métal, cette sculpture chante la beauté de la forme pure."
    },
    {
      title: "Infinite Loop",
      artist: "Jingyu BAI",
      image: infiniteLoopImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.90m x 1.50m x 1.20m",
      description: "Un parcours sans fin qui symbolise l'éternité, créant un dialogue permanent entre l'œuvre et son environnement."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Galerie d'Art Contemporain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez l'exposition exceptionnelle de <span className="text-gallery-gold font-medium">Jingyu BAI</span>, 
            où sculptures monumentales et architecture classique se rencontrent dans un dialogue intemporel.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-full p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-full px-4"
            >
              <Grid className="w-4 h-4 mr-2" />
              Grille
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-full px-4"
            >
              <List className="w-4 h-4 mr-2" />
              Liste
            </Button>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
        }`}>
          {artworks.map((artwork, index) => (
            <div
              key={artwork.title}
              className="animate-gallery-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in visiting our contemporary art exhibition?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-gallery-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Planifier votre visite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;