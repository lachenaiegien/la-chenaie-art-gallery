import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Palette, Globe } from "lucide-react";
import artisteImage from "@/assets/artiste1.png";

const Artist = () => {
  return (
    <section id="artist" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
                Artistes du moment
            </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Artist Photo */}
            <div className="animate-gallery-fade-in">
              <img 
                src={artisteImage} 
                alt="Jingyu BAI" 
                className="w-full h-auto rounded-lg shadow-gallery-soft"
              />
            </div>

            {/* Artist Info */}
            <div className="animate-gallery-scale-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Jingyu BAI
              </h2>
              
              <p className="text-xl text-gallery-gold font-medium mb-6">
                Artiste plasticien<br />
                Œuvres monumentales
              </p>

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="leading-relaxed">
                  Né en juillet 1988 à Datong City dans la province de SHANXI en CHINE, Jingyu est issu 
                  d'une grande famille d'artistes.
                </p>
                
                <p className="leading-relaxed">
                  Très jeune, il démontre vite ses aptitudes aux dessins et c'est tout naturellement qu'il 
                  intègre une des plus belles écoles Chinoises d'art et de sculpture.
                </p>

                <p className="leading-relaxed">
                  Après avoir testé plusieurs matières telles que la terre et la pierre, c'est dans le métal 
                  qu'il s'avère le plus créatif.
                </p>

                <p className="leading-relaxed">
                  Ses œuvres contemporaines sont tout d'abord imaginées à travers des dessins puis 
                  dans son propre atelier il exécute la totalité de ses performances.
                </p>

                <p className="leading-relaxed">
                  Sa passion l'emporte vers des conceptions de plus en plus monumentales pouvant 
                  atteindre des hauteurs de plusieurs mètres.
                </p>

                <p className="leading-relaxed">
                  Encore très jeune dans l'espace artistique Jingyu BAI s'avère de plus en plus reconnu 
                  pour la qualité et l'imaginaire de ses compositions contemporaines.
                </p>

                <p className="leading-relaxed font-medium">
                  LA CHÊNAIE Art Contemporain a le plaisir de représenter son travail auprès des 
                  galeries d'art moderne et des expositions temporaires.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-3 py-1">
                  <Palette className="w-4 h-4 mr-2" />
                  Sculpture Monumentale
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Award className="w-4 h-4 mr-2" />
                  Artiste Plasticien
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Globe className="w-4 h-4 mr-2" />
                  CHINE - SHANXI
                </Badge>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;