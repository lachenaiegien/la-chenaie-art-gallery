import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid, List, Filter } from "lucide-react";
import ArtworkCard from "@/components/ArtworkCard";
import HeaderGallery from "@/components/HeaderGallery";
import FooterGallery from "@/components/FooterGallery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Dialog plein-écran mobile-friendly
import ArtworkDialog from "@/components/ArtworkDialog";

// Import des images
import flammesDoucesImage from "@/assets/flammes-douces1.png";
import danseRefletsImage from "@/assets/danse-reflets2.png";
import danseTempsImage from "@/assets/danse-temps3.jpeg";
import harmonieImage from "@/assets/harmonie2.png";
import enigmeImage from "@/assets/enigme4.jpeg";
import ariaImage from "@/assets/aria4.jpg";
import infiniteLoopImage from "@/assets/infinite-loop1.png";
import spiraleImage from "@/assets/spirale4.png";
import elanImage from "@/assets/elan4.png";
import eclatSilenceImage from "@/assets/eclat-silence1.png";

interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: string;
  material: string;
  dimensions: string;
  description: string;
  category: "sculpture" | "tableau";
  style: "contemporain" | "moderne" | "abstrait";
  downloadUrl?: string;
}

const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArtist, setSelectedArtist] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");

  // État pour le dialog plein-écran
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const openArtwork = (art: Artwork) => {
    setSelectedArtwork(art);
    setDialogOpen(true);
  };

  const artworks: Artwork[] = [
    {
      id: "1",
      title: "Flamme douce",
      artist: "Jingyu BAI",
      image: flammesDoucesImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 1 mètre",
      description:
          "Réalisée en acier inoxydable 316, flamme douce élance ses courbes fluides vers le ciel. Elle capte la lumière, la réfracte en éclairage changeant et invite à une contemplation silencieuse. Symbole d'énergie apaisée, elle s'intègre harmonieusement dans tous les espaces intérieurs comme extérieurs.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1H9PC4q04ifFLXrX4HiOsAqen4dOJStdY/view?usp=sharing",
    },
    {
      id: "2",
      title: "Danse des reflets",
      artist: "Jingyu BAI",
      image: danseRefletsImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Danse des reflets s'élance avec grâce vers la lumière. Les lignes élancées, émouvantes, captent l'environnement et le transforment en une chorégraphie de reflets changeant cette œuvre. Elle invite le spectateur à entrer dans un dialogue entre ciel et terre, entre présence et transparence. Placée dans un espace ouvert ou intérieur, elle devient un écrin de lumière et d'harmonie.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1OXFJEPKrBCV3bokPgleVc7BsrPxUKpcO/view?usp=sharing",
    },
    {
      id: "3",
      title: "Danse du temps",
      artist: "Jingyu BAI",
      image: danseTempsImage,
      year: "2025",
      material: "Acier corten",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Cette sculpture, réalisée en acier corten, présente une matière brute dont la surface oxydée évolue avec le temps. Sa patine aux teintes chaudes et terreuses incarne le passage des saisons. Chaque nuance témoigne de la mémoire du métal, face aux éléments. Par cette transformation continue, l'œuvre illustre la danse du temps, en permanente métamorphose dans une harmonie chorégraphie.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/13Md9N3Qs-Oc1ekqvCo7E8juRo2e1QS54/view?usp=sharing",
    },
    {
      id: "4",
      title: "Harmonie",
      artist: "Jingyu BAI",
      image: harmonieImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Cette œuvre incarne l'équilibre subtil entre force et légèreté. Ses lignes pures et fluides, s'élancent dans l'espace, comme une mélodie sculptée, reflétant le monde environnant dans une unité apaisée. Harmonie invite à une contemplation sereine, à la recherche d'un accord parfait entre matière, lumière et esprit.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1ZEvtTIafU9yJo0X_TDirxK4Zq_GciFrZ/view?usp=sharingf",
    },
    {
      id: "5",
      title: "Énigme",
      artist: "Jingyu BAI",
      image: enigmeImage,
      year: "2025",
      material: "Acier corten",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Cette sculpture révèle un mystère profondément enraciné dans la matière brute. Sa surface oxydée, marquée par le temps, dévoile graduellement des teintes chaudes qui suggèrent des secrets enfouis et le souvenir d'histoire ancienne. Au fil de sa transformation naturelle, l'œuvre joue sur la dualité entre l'apparente solidité de l'acier et l'évolution organique de la patine, invitant le spectateur à contempler la poésie du changement et de la mémoire inscrit dans le métal.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1ueGrgrsSDIGEng8mV0CdbZfHl_puDzKh/view?usp=sharing",
    },
    {
      id: "6",
      title: "Aria",
      artist: "Jingyu BAI",
      image: ariaImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Aria s'élève telle une note de musique figée dans l'espace. Ses courbes aériennes reflètent la lumière comme une mélodie silencieuse, un souffle suspendu entre ciel et terre. Cette œuvre invite à ressentir l'harmonie de l'instant, à écouter la musique intérieure que le métal sublime.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1gXFqQ2xNZe6hj7NxjxZjUGiLBS76t0Il/view?usp=sharing",
    },
    {
      id: "7",
      title: "Infinite Loop",
      artist: "Jingyu BAI",
      image: infiniteLoopImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Cette œuvre déploie sa forme en un mouvement continu qui ne connaît ni début ni fin. La lumière glisse sur ses courbes et se reflète à l'infini, créant un dialogue permanent entre espace et regard. Infini, Loop symbolise l'éternité et le flux incessant de l'existence, une boucle sculptée dans le temps.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1NqQfgLVgJXa2gPk33fw1XqOr2UAXaEe3/view?usp=sharing",
    },
    {
      id: "8",
      title: "Spirale",
      artist: "Jingyu BAI",
      image: spiraleImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Spirale s’enroule dans l’espace comme un mouvement infini. Les courbes reflètent le cycle éternel de la vie, ou chaque reflet devient une étape, un recommencement. Cette œuvre incarne la continuité et la transformation, un équilibre entre expansion et retour vers soi.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1NbOrS9Yo_3K7piEGEdZrMxdrxBiao-Bt/view?usp=sharing",
    },
    {
      id: "9",
      title: "Elan",
      artist: "Jingyu BAI",
      image: elanImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Élan exprime la force d’un mouvement vital tendu vers l’infini. Ces lignes ascendantes traduisent l’énergie de la croissance et l’aspiration vers la lumière. Cet œuvre incarne la création, l’union qui relit l’homme à l’univers, la matière à l’esprit.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1ZyJmliKndRvMjOM0YpynDvimldHq1Q5Z/view?usp=sharing",
    },
    {
      id: "10",
      title: "Eclat de silence",
      artist: "Jingyu BAI",
      image: eclatSilenceImage,
      year: "2025",
      material: "Acier inox poli miroir",
      dimensions: "Hauteur : 2 mètres",
      description:
          "Éclat de silence surgit comme une forme pure et intemporelle. Les lignes attrapent la lumière et la restitue en la changeant, créant une puissance silencieuse, mais puissante. Cette œuvre invite à une méditation profonde à l’écoute de ce que le silence révèle, entre vide et plénitude.",
      category: "sculpture",
      style: "contemporain",
      downloadUrl:
          "https://drive.google.com/file/d/1E0mi0DrNkqAwVdt_tAsCqB9WUZuDsLXX/view?usp=sharing",
    },
  ];

  const categories = ["all", ...Array.from(new Set(artworks.map((a) => a.category)))];
  const artists = ["all", ...Array.from(new Set(artworks.map((a) => a.artist)))];
  const styles = ["all", ...Array.from(new Set(artworks.map((a) => a.style)))];

  const filteredArtworks = artworks.filter((artwork) => {
    return (
        (selectedCategory === "all" || artwork.category === selectedCategory) &&
        (selectedArtist === "all" || artwork.artist === selectedArtist) &&
        (selectedStyle === "all" || artwork.style === selectedStyle)
    );
  });

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      all: "Toutes les catégories",
      sculpture: "Sculptures",
      tableau: "Tableaux",
    };
    return labels[category] || category;
  };

  const getStyleLabel = (style: string) => {
    const labels: Record<string, string> = {
      all: "Tous les styles",
      contemporain: "Contemporain",
      moderne: "Moderne",
      abstrait: "Abstrait",
    };
    return labels[style] || style;
  };

  return (
      <div className="min-h-screen bg-background">
        <HeaderGallery />

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
                      {categories.map((category) => (
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
                      {artists.map((artist) => (
                          <SelectItem key={artist} value={artist}>
                            {artist === "all" ? "Tous les artistes" : artist}
                          </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Style" />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((style) => (
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
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-full px-4"
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Grille
                  </Button>
                  <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
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
                  {filteredArtworks.length} œuvre
                  {filteredArtworks.length > 1 ? "s" : ""} trouvée
                  {filteredArtworks.length > 1 ? "s" : ""}
                </p>
              </div>

              {/* Artworks Grid */}
              <div
                  className={`grid gap-8 ${
                      viewMode === "grid"
                          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                  }`}
              >
                {filteredArtworks.map((artwork, index) => (
                    <div
                        key={artwork.id}
                        className="group animate-fade-in cursor-pointer outline-none"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => openArtwork(artwork)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openArtwork(artwork);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Voir ${artwork.title}`}
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
                          setSelectedCategory("all");
                          setSelectedArtist("all");
                          setSelectedStyle("all");
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

        <FooterGallery />

        {/* Dialog plein-écran (mobile), modal (desktop) */}


      </div>
  );
};

export default Gallery;
