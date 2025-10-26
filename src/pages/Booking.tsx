import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const accommodations = [
  {
    id: "domaine-complet",
    name: "Domaine Complet",
    price: 380,
    description: "L'ensemble du domaine avec les 4 suites",
    capacity: "8-12 personnes",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    ],
    widgetId: "bookWidget-domaine-complet",
    roomId: 619396,
  },
  {
    id: "chenaie-gien",
    name: "La Chênaie Gien",
    price: 120,
    description: "Logement principal avec vue sur le parc",
    capacity: "2-4 personnes",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    ],
    widgetId: "bookWidget-chenaie-gien",
    roomId: 619396,
  },
  {
    id: "les-charmilles",
    name: "Les Charmilles",
    price: 95,
    description: "Gîte chaleureux au cœur du domaine",
    capacity: "2-3 personnes",
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=800",
    ],
    widgetId: "bookWidget-les-charmilles",
    roomId: 619396,
  },
  {
    id: "les-fresnes",
    name: "Les Fresnes",
    price: 95,
    description: "Cottage confortable avec jardin privatif",
    capacity: "2-3 personnes",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1571508601936-4d4e9263f1c5?w=800",
    ],
    widgetId: "bookWidget-les-fresnes",
    roomId: 619396,
  },
  {
    id: "les-accacias",
    name: "Les Accacias",
    price: 95,
    description: "Studio moderne et lumineux",
    capacity: "2 personnes",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    ],
    widgetId: "bookWidget-les-accacias",
    roomId: 619396,
  },
];

const Booking = () => {

  useEffect(() => {
    // Load jQuery and jQueryUI
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jqueryScript.async = true;
    document.head.appendChild(jqueryScript);

    const jqueryUIScript = document.createElement('script');
    jqueryUIScript.src = 'https://code.jquery.com/ui/1.13.2/jquery-ui.min.js';
    jqueryUIScript.async = true;
    document.head.appendChild(jqueryUIScript);

    const jqueryUICSS = document.createElement('link');
    jqueryUICSS.rel = 'stylesheet';
    jqueryUICSS.href = 'https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css';
    document.head.appendChild(jqueryUICSS);

    const bookWidgetScript = document.createElement('script');
    bookWidgetScript.src = 'https://media.xmlcal.com/widget/1.01/js/bookWidget.min.js';
    bookWidgetScript.async = true;
    document.head.appendChild(bookWidgetScript);

    return () => {
      document.head.removeChild(jqueryScript);
      document.head.removeChild(jqueryUIScript);
      document.head.removeChild(jqueryUICSS);
      document.head.removeChild(bookWidgetScript);
    };
  }, []);

  useEffect(() => {
    // Initialize booking widgets after component mounts
    const timer = setTimeout(() => {
      if (window.jQuery && window.jQuery.fn.bookWidget) {
        accommodations.forEach((accommodation) => {
          window.jQuery(`#${accommodation.widgetId}`).bookWidget({
            roomid: accommodation.roomId,
            dateFormat: 'dd/mm/yy',
            defaultNightsAdvance: 2,
            defaultNumAdult: 1,
            defaultNumNight: 2,
            formAction: 'https://beds24.com/booking.php',
            formTarget: 'bookingWindow',
            maxAdult: accommodation.id === 'domaine-complet' ? 12 : 4,
            numMonth: 2,
            weekFirstDay: 1,
            widgetLang: 'fr',
            widgetTitle: `Réservation ${accommodation.name}`,
            widgetType: 'AvailabilityCalendar',
            width: 'auto'
          });
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const domaineComplet = accommodations.find(a => a.id === 'domaine-complet');
  const suites = accommodations.filter(a => a.id !== 'domaine-complet');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Réservation
            </h1>
            <p className="text-xl text-muted-foreground">
              Séjournez au Domaine La Chénaie et découvrez l'exposition
            </p>
          </div>

          {/* Domaine Complet Section */}
          {domaineComplet && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Domaine Complet
              </h2>
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden">
                  {/* Image Carousel */}
                  <Carousel className="w-full">
                    <CarouselContent>
                      {domaineComplet.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative h-80 w-full">
                            <img
                              src={image}
                              alt={`${domaineComplet.name} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {domaineComplet.name}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {domaineComplet.description}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {domaineComplet.capacity}
                      </p>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-3xl font-bold text-primary">
                          {domaineComplet.price}€
                        </span>
                        <span className="text-muted-foreground">/ nuit</span>
                      </div>
                    </div>

                    {/* Booking Widget */}
                    <div className="mb-6">
                      <div id={domaineComplet.widgetId}></div>
                    </div>
                  </div>
                </Card>
                <Button className="w-full mt-6" size="lg">
                  Réserver le Domaine Complet
                </Button>
              </div>
            </div>
          )}

          {/* Suites Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Les Suites
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {suites.map((suite) => (
                  <Card key={suite.id} className="overflow-hidden">
                    {/* Image Carousel */}
                    <Carousel className="w-full">
                      <CarouselContent>
                        {suite.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="relative h-64 w-full">
                              <img
                                src={image}
                                alt={`${suite.name} - Image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {suite.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {suite.description}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {suite.capacity}
                        </p>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-2xl font-bold text-primary">
                            {suite.price}€
                          </span>
                          <span className="text-muted-foreground">/ nuit</span>
                        </div>
                      </div>

                      {/* Booking Widget */}
                      <div id={suite.widgetId}></div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full mt-6" size="lg">
                Réserver une Suite
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;

declare global {
  interface Window {
    jQuery: any;
  }
}
