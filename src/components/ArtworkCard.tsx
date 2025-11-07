import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Download } from "lucide-react";

interface ArtworkCardProps {
  title: string;
  artist: string;
  image: string;
  description?: string;
  year?: string;
  material?: string;
  dimensions?: string;
  downloadUrl?: string;
}

const ArtworkCard = ({
  title,
  artist,
  image,
  description,
  year,
  material,
  dimensions,
  downloadUrl
}: ArtworkCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-gallery-medium transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay */}
        {/*<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="bg-white/90 hover:bg-white text-primary font-medium rounded-full shadow-lg"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Voir en détail
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-background border-border">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/5] md:aspect-auto">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-gallery-gold font-medium mb-4">{artist}</p>

                    {year && (
                      <div className="mb-3">
                        <span className="text-sm font-medium text-muted-foreground">Année: </span>
                        <span className="text-foreground">{year}</span>
                      </div>
                    )}

                    {material && (
                      <div className="mb-3">
                        <span className="text-sm font-medium text-muted-foreground">Matériau: </span>
                        <span className="text-foreground">{material}</span>
                      </div>
                    )}

                    {dimensions && (
                      <div className="mb-4">
                        <span className="text-sm font-medium text-muted-foreground">Dimensions: </span>
                        <span className="text-foreground">{dimensions}</span>
                      </div>
                    )}

                    {description && (
                      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
                    )}

                    {downloadUrl && (
                      <Button
                        asChild
                        className="mt-auto"
                      >
                        <a href={downloadUrl} download target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger la fiche
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>*/}

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gallery-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground font-medium">{artist}</p>
      </div>
    </Card>
  );
};

export default ArtworkCard;