import { Link } from "react-router-dom";

const FooterGallery = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-gallery-gold rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="text-lg font-bold text-primary-foreground">
                LA CHÊNAIE
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Art Contemporain International au cœur du Loiret. 
              Découvrez l'exposition exceptionnelle de Jingyu BAI dans un cadre historique unique.
            </p>
          </div>
          
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/gallery/accueil" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Accueil Galerie
              </Link>
              <Link to="/gallery" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Toutes les Œuvres
              </Link>
              <Link to="/artists" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                L'Artiste
              </Link>
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Retour à l'accueil
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Contact & Visites</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Domaine La Chênaie</p>
              <p>45500 Gien, Loiret</p>
              <p>art@lachenaiedomaine.fr</p>
              <p className="mt-3 text-gallery-gold font-semibold">
                Sculptures monumentales
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Domaine La Chênaie. Tous droits réservés.
            <span className="mx-2">•</span>
            Exposition Jingyu BAI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterGallery;
