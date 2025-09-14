import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Palette, Globe } from "lucide-react";

const Artist = () => {
  return (
    <section id="artist" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Artist Info */}
            <div className="animate-gallery-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Jingyu BAI
              </h2>
              
              <p className="text-xl text-gallery-gold font-medium mb-6">
                Sculpteur Contemporain International
              </p>

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="leading-relaxed">
                  Jingyu BAI est un artiste sculpteur reconnu internationalement pour ses œuvres monumentales 
                  qui explorent l'interaction entre forme, lumière et espace. Ses créations en acier inoxydable 
                  et corten révèlent une maîtrise technique exceptionnelle au service d'une vision artistique profonde.
                </p>
                
                <p className="leading-relaxed">
                  Né en Chine et formé aux beaux-arts, Jingyu BAI développe un langage sculptural unique qui 
                  transcende les frontières culturelles. Ses œuvres, présentes dans de prestigieuses collections 
                  privées et publiques, questionnent notre rapport au temps, à l'espace et à la beauté.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-3 py-1">
                  <Palette className="w-4 h-4 mr-2" />
                  Sculpture Monumentale
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Award className="w-4 h-4 mr-2" />
                  Artiste International
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Globe className="w-4 h-4 mr-2" />
                  Expositions Mondiales
                </Badge>
              </div>
            </div>

            {/* Artistic Philosophy */}
            <div className="space-y-6 animate-gallery-scale-in">
              <Card className="p-8 bg-card border-border shadow-gallery-soft">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Philosophie Artistique
                </h3>
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-4 border-gallery-gold pl-6">
                  "Mes sculptures sont des dialogues silencieux entre l'homme et son environnement. 
                  Chaque courbe, chaque reflet raconte une histoire d'harmonie et d'équilibre, 
                  invitant le spectateur à redécouvrir la beauté du monde qui l'entoure."
                </blockquote>
                <cite className="text-gallery-gold font-medium mt-4 block">
                  — Jingyu BAI
                </cite>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border shadow-gallery-soft text-center">
                  <div className="text-3xl font-bold text-gallery-gold mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </Card>
                
                <Card className="p-6 bg-card border-border shadow-gallery-soft text-center">
                  <div className="text-3xl font-bold text-gallery-gold mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Œuvres créées</div>
                </Card>
                
                <Card className="p-6 bg-card border-border shadow-gallery-soft text-center">
                  <div className="text-3xl font-bold text-gallery-gold mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Pays d'exposition</div>
                </Card>
                
                <Card className="p-6 bg-card border-border shadow-gallery-soft text-center">
                  <div className="text-3xl font-bold text-gallery-gold mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Collections privées</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;