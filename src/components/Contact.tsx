import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitType: 'individual',
    date: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons sous 24h pour confirmer votre visite.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      visitType: 'individual',
      date: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Planifiez votre Visite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez l'exposition exceptionnelle de Jingyu BAI dans le magnifique cadre 
              du Domaine La Chénaie. Réservez votre visite guidée ou votre événement privé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border shadow-gallery-soft animate-gallery-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Réservation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="visitType" className="text-foreground font-medium">
                      Type de visite *
                    </Label>
                    <select
                      id="visitType"
                      name="visitType"
                      value={formData.visitType}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="individual">Visite individuelle</option>
                      <option value="group">Visite de groupe</option>
                      <option value="private">Événement privé</option>
                      <option value="guided">Visite guidée</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="date" className="text-foreground font-medium">
                    Date souhaitée
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2"
                    rows={4}
                    placeholder="Précisez vos souhaits, le nombre de personnes, etc."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full shadow-gallery-medium"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Envoyer la demande
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-gallery-scale-in">
              <Card className="p-8 bg-card border-border shadow-gallery-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gallery-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        Domaine La Chénaie<br />
                        45500 Gien, Loiret<br />
                        France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-gallery-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                      <p className="text-muted-foreground">+33 2 38 67 25 28</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-gallery-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">contact@lachenaiecalmeetdetente.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-gallery-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Mercredi - Dimanche: 10h - 18h</p>
                        <p>Lundi - Mardi: Fermé</p>
                        <p className="text-gallery-gold font-medium">Visites sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border shadow-gallery-soft">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Types de Visites
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gallery-gold mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Visite libre</p>
                      <p className="text-sm text-muted-foreground">Découverte autonome • Gratuit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gallery-gold mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Visite guidée</p>
                      <p className="text-sm text-muted-foreground">Avec médiateur • 15€/personne</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gallery-gold mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Groupe (10+ pers.)</p>
                      <p className="text-sm text-muted-foreground">Tarif dégressif • Sur demande</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;