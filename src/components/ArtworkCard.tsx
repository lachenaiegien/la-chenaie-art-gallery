// src/components/ArtworkCard.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

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
                       downloadUrl,
                     }: ArtworkCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  // Bloque le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
      <>
        {/* Carte */}
        <Card
            className="group overflow-hidden bg-card border-border hover:shadow-gallery-medium transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            onClick={() => setOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
              }
            }}
            aria-label={`Voir ${title}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
            {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gallery-gold transition-colors duration-200">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium">{artist}</p>
          </div>
        </Card>

        {/* Modale custom full-screen */}
        {open && (
            <div
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60"
                onClick={() => setOpen(false)}
            >
              <div
                  // IMPORTANT : tout ce bloc force un scroll VERTICAL stable (y compris RDM Firefox)
                  className="
 relative mx-auto my-3
    w-[100vw] max-w-[100vw]
    h-[96svh] max-h-[96svh]
    md:w-[80vw] md:max-w-[900px]
    md:h-[85vh] md:max-h-[85vh]
    overflow-y-auto overflow-x-hidden
    overscroll-contain [touch-action:pan-y] scrollbar-gutter-stable
    rounded-2xl bg-background shadow-xl
            "
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Bouton Fermer (une seule croix) */}
                <button
                    aria-label="Fermer"
                    onClick={() => setOpen(false)}
                    className="fixed md:absolute right-4 top-4 z-10 rounded-full bg-black/50 text-white p-2 backdrop-blur-sm hover:bg-black/60"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Contenu scrollable */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image : responsive, aucune largeur fixe */}
                  <div className="bg-muted">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-[50vh] md:h-[85vh] object-cover md:rounded-l-2xl"
                        loading="lazy"
                    />
                  </div>

                  {/* Infos */}
                  <div className="p-6 md:p-8 md:max-h-[85vh] md:overflow-y-auto">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {artist}
                        {year ? ` • ${year}` : ""}
                      </p>
                    </div>

                    {description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {material && (
                          <div className="rounded-md bg-muted p-3">
                            <p className="text-foreground font-medium">Matériau</p>
                            <p className="text-muted-foreground">{material}</p>
                          </div>
                      )}
                      {dimensions && (
                          <div className="rounded-md bg-muted p-3">
                            <p className="text-foreground font-medium">Dimensions</p>
                            <p className="text-muted-foreground">{dimensions}</p>
                          </div>
                      )}
                    </div>

                    {downloadUrl && (
                        <Button asChild className="mt-2">
                          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Télécharger la fiche
                          </a>
                        </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default ArtworkCard;
