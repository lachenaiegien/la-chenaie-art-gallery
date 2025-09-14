import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid, List, Filter } from "lucide-react";
import ArtworkCard from "@/components/ArtworkCard";
import Header from "@/components/Header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import des images
import flammesDoucesImage from "@/assets/flammes-douces.png";
import danseRefletsImage from "@/assets/danse-reflets.png";
import danseTempsImage from "@/assets/danse-temps.png";
import harmonieImage from "@/assets/harmonie.png";
import enigmeImage from "@/assets/enigme.png";
import ariaImage from "@/assets/aria.png";
import infiniteLoopImage from "@/assets/infinite-loop.png";

interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: string;
  material: string;
  dimensions: string;
  description: string;
  category: 'sculpture' | 'tableau';
  style: 'contemporain' | 'moderne' | 'abstrait';
}

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArtist, setSelectedArtist] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');

  const artworks: Artwork[] = [
    {
      id: '1',
      title: "Flammes Douces",
      artist: "Jingyu BAI",
      image: flammesDoucesImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.50m x 1.20m x 0.80m",
      description: "Une sculpture fluide qui capture la danse éternelle des flammes dans le métal poli, reflétant la lumière naturelle du domaine.",
      category: 'sculpture',
      style: 'contemporain'
    },
    {
      id: '2',
      title: "Danse des Reflets",
      artist: "Jingyu BAI", 
      image: danseRefletsImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.20m x 1.00m x 0.90m",
      description: "Les formes entrelacées créent un jeu infini de reflets, symbolisant l'harmonie entre l'art contemporain et l'architecture classique.",
      category: 'sculpture',
      style: 'contemporain'
    },
    {
      id: '3',
      title: "Danse du Temps",
      artist: "Jingyu BAI",
      image: danseTempsImage,
      year: "2024", 
      material: "Acier corten",
      dimensions: "2.80m x 1.40m x 1.10m",
      description: "La patine naturelle du corten évoque le passage du temps, tandis que les formes dynamiques célèbrent l'instant présent.",
      category: 'sculpture',
      style: 'contemporain'
    },
    {
      id: '4',
      title: "Harmonie",
      artist: "Jingyu BAI",
      image: harmonieImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.60m x 1.30m x 0.95m", 
      description: "Des courbes parfaites qui s'entrelacent dans un équilibre délicat, incarnant la recherche perpétuelle d'harmonie.",
      category: 'sculpture',
      style: 'abstrait'
    },
    {
      id: '5',
      title: "Énigme",
      artist: "Jingyu BAI",
      image: enigmeImage,
      year: "2024",
      material: "Acier corten",
      dimensions: "2.40m x 1.15m x 0.85m",
      description: "Une forme mystérieuse qui interroge et fascine, invitant le spectateur à découvrir ses secrets cachés.",
      category: 'sculpture',
      style: 'abstrait'
    },
    {
      id: '6',
      title: "Aria",
      artist: "Jingyu BAI",
      image: ariaImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.70m x 1.25m x 1.00m",
      description: "Comme une mélodie figée dans le métal, cette sculpture chante la beauté de la forme pure.",
      category: 'sculpture',
      style: 'contemporain'
    },
    {
      id: '7',
      title: "Infinite Loop",
      artist: "Jingyu BAI",
      image: infiniteLoopImage,
      year: "2024",
      material: "Acier inoxydable poli",
      dimensions: "2.90m x 1.50m x 1.20m",
      description: "Un parcours sans fin qui symbolise l'éternité, créant un dialogue permanent entre l'œuvre et son environnement.",
      category: 'sculpture',
      style: 'contemporain'
    }
  ];

  // Get unique values for filters
  const categories = ['all', ...Array.from(new Set(artworks.map(a => a.category)))];
  const artists = ['all', ...Array.from(new Set(artworks.map(a => a.artist)))];
  const styles = ['all', ...Array.from(new Set(artworks.map(a => a.style)))];

  // Filter artworks
  const filteredArtworks = artworks.filter(artwork => {
    return (selectedCategory === 'all' || artwork.category === selectedCategory) &&
           (selectedArtist === 'all' || artwork.artist === selectedArtist) &&
           (selectedStyle === 'all' || artwork.style === selectedStyle);
  });

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      all: 'Toutes les catégories',
      sculpture: 'Sculptures',
      tableau: 'Tableaux'
    };
    return labels[category] || category;
  };

  const getStyleLabel = (style: string) => {
    const labels: Record<string, string> = {
      all: 'Tous les styles',
      contemporain: 'Contemporain',
      moderne: 'Moderne',
      abstrait: 'Abstrait'
    };
    return labels[style] || style;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Galerie d'Art Contemporain
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Découvrez notre collection d'œuvres contemporaines où sculptures monumentales 
                et créations artistiques se rencontrent dans un dialogue intemporel.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-6 bg-muted rounded-lg">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filtres:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {getCategoryLabel(category)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedArtist} onValueChange={setSelectedArtist}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Artiste" />
                  </SelectTrigger>
                  <SelectContent>
                    {artists.map(artist => (
                      <SelectItem key={artist} value={artist}>
                        {artist === 'all' ? 'Tous les artistes' : artist}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map(style => (
                      <SelectItem key={style} value={style}>
                        {getStyleLabel(style)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-background rounded-full p-1 border">
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

            {/* Results count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                {filteredArtworks.length} œuvre{filteredArtworks.length > 1 ? 's' : ''} trouvée{filteredArtworks.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Artworks Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
            }`}>
              {filteredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArtworkCard {...artwork} />
                </div>
              ))}
            </div>

            {filteredArtworks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Aucune œuvre ne correspond aux filtres sélectionnés.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedArtist('all');
                    setSelectedStyle('all');
                  }}
                  className="mt-4"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;