import HeaderGallery from "@/components/HeaderGallery";
import FooterGallery from "@/components/FooterGallery";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Globe, MapPin } from "lucide-react";
import artisteImage from "@/assets/artiste.png";

interface Artist {
  id: string;
  name: string;
  bio: string;
  image?: string;
  country: string;
  birthYear: number;
  speciality: string[];
  exhibitions: string[];
  website?: string;
  email?: string;
}

const Artists = () => {
  const artists: Artist[] = [
    {
      id: "1",
      name: "Jingyu BAI",
      image: artisteImage,
      bio: "Jingyu BAI est un sculpteur contemporain reconnu pour ses créations monumentales en acier. Né en Chine, il développe un langage artistique unique qui mélange traditions orientales et modernité occidentale. Ses sculptures, caractérisées par des formes fluides et organiques, explorent les thèmes du temps, de l'harmonie et de l'éternité. Travaillant principalement l'acier inoxydable et le corten, il crée des œuvres qui dialoguent avec leur environnement, captant et reflétant la lumière naturelle. Ses sculptures monumentales sont présentes dans de nombreuses collections privées et espaces publics à travers le monde.",
      country: "Chine",
      birthYear: 1975,
      speciality: [
        "Sculpture contemporaine",
        "Acier inoxydable",
        "Art monumental",
      ],
      exhibitions: [
        "Exposition personnelle au Domaine La Chénaie (2024)",
        "Biennale de sculpture contemporaine de Beijing (2023)",
        "Salon d'Art Moderne de Shanghai (2022)",
        "Festival International de Sculpture de Lyon (2021)",
      ],
      website: "https://jingyubai-art.com",
      email: "contact@jingyubai-art.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeaderGallery />

        <main className="pt-20">
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Les Artistes
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Découvrez les artistes contemporains qui exposent leurs œuvres
                  au Domaine La Chênaie. Chaque artiste apporte sa vision unique
                  et son savoir-faire exceptionnel.
                </p>
              </div>

              {/* Artists Grid */}
              <div className="grid gap-12">
                {artists.map((artist) => (
                    <Card
                        key={artist.id}
                        className="p-8 bg-card border-border hover:shadow-lg transition-all duration-500"
                    >
                      <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* Artist Image */}
                        <div className="md:col-span-1">
                          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                            {artist.image ? (
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                                  <div className="w-20 h-20 bg-gallery-gold rounded-full flex items-center justify-center mb-3">
                              <span className="text-3xl font-bold text-primary">
                                {artist.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                              </span>
                                  </div>
                                  <p className="text-sm italic">
                                    Image non disponible
                                  </p>
                                </div>
                            )}
                          </div>
                        </div>

                        {/* Artist Info */}
                        <div className="md:col-span-2 space-y-6">
                          <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                              {artist.name}
                            </h2>
                            <div className="flex items-center gap-4 text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{artist.country}</span>
                              </div>
                              <span>•</span>
                              <span>Né en {artist.birthYear}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              Spécialités
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {artist.speciality.map((spec) => (
                                  <span
                                      key={spec}
                                      className="px-3 py-1 bg-gallery-gold/10 text-gallery-gold rounded-full text-sm font-medium"
                                  >
                              {spec}
                            </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              Biographie
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {artist.bio}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              Expositions récentes
                            </h3>
                            <ul className="space-y-2">
                              {artist.exhibitions.map((exhibition, i) => (
                                  <li
                                      key={i}
                                      className="text-muted-foreground flex items-start"
                                  >
                                    <span className="w-2 h-2 bg-gallery-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {exhibition}
                                  </li>
                              ))}
                            </ul>
                          </div>

                          {/* Contact */}
                          <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                            <Button asChild>
                              <a href="/gallery">Voir ses œuvres</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16 p-8 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Vous êtes artiste ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Le Domaine La Chênaie accueille régulièrement de nouvelles
                  expositions. Contactez-nous pour présenter votre travail dans
                  notre cadre exceptionnel.
                </p>
                <Button asChild>
                  <a href="mailto:contact@lachenaiedomaine.fr">
                    Proposer une exposition ou des œuvres
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

export default Artists;
