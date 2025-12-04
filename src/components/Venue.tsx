import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Car, Train } from "lucide-react";
import chateauImage from "@/assets/chateau-chenaie.png";

const Venue = () => {
  return (
      <section id="venue" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Le Domaine La Chénaie
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Un écrin historique exceptionnel à Gien, dans le Loiret, où l'art
                contemporain dialogue avec l'architecture classique française dans
                un cadre naturel préservé.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image en Card (proportions harmonisées) */}
              <div className="animate-gallery-scale-in">
                <Card className="overflow-hidden rounded-2xl shadow-gallery-strong p-0 mx-auto w-full max-w-[640px]">
                  <div className="relative">
                    <img
                        src={chateauImage}
                        alt="Château de La Chénaie"
                        className="
                      w-full
                      h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]
                      object-cover
                    "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                </Card>
              </div>

              {/* Informations */}
              <div className="space-y-8 animate-gallery-fade-in">
                <Card className="p-8 bg-card border-border shadow-gallery-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Histoire & Architecture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Le Château de La Chénaie, édifice du XVIIe siècle, offre un
                    cadre unique pour l'art contemporain. Ses jardins à la
                    française et son parc paysager constituent un dialogue
                    permanent entre patrimoine historique et création moderne.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Restauré avec soin, le domaine accueille désormais des
                    expositions d'art contemporain de renommée internationale,
                    créant un pont entre les époques et les expressions
                    artistiques.
                  </p>
                </Card>

                {/* Contact */}
                <Card className="p-8 bg-card border-border shadow-gallery-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Informations Pratiques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-gallery-gold" />
                      <span>
                      Domaine La Chénaie : le chétif puit, 45500 Gien, Loiret
                    </span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-5 h-5 mr-3 text-gallery-gold" />
                      <span>+33 6 24 01 53 19</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-5 h-5 mr-3 text-gallery-gold" />
                      <span>contact@lachenaiedomaine.fr</span>
                    </div>
                  </div>
                </Card>

                {/* Accès */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card border-border shadow-gallery-soft">
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 text-gallery-gold mr-3" />
                      <h4 className="font-bold text-foreground">En voiture</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A77 sortie Gien, puis D952. Parking gratuit sur place.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card border-border shadow-gallery-soft">
                    <div className="flex items-center mb-4">
                      <Train className="w-6 h-6 text-gallery-gold mr-3" />
                      <h4 className="font-bold text-foreground">En train</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gare de Gien (ligne Paris–Nevers), puis taxi ou location de
                      vélo.
                    </p>
                  </Card>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-gallery-medium"
                      onClick={() => (window.location.href = "/booking")}
                  >
                    Réserver un séjour ou privatiser le domaine
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Venue;
