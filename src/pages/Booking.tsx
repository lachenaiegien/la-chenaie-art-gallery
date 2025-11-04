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

// -----------------
//  Config Beds24
// -----------------
const BEDS24_FORM_ACTION = "https://beds24.com/booking.php";
const BEDS24_PROP_ID = 144613;      // Domaine complet
const BEDS24_OWNER_ID = 297743;     // Domaine complet (si requis par ta config)
const BEDS24_PROP_ID_SUITES = 296397; // Propriété pour les suites

function todaysDDMMYY() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}${mm}${yy}`;
}

// --- Domaine ou suite spécifique ---
function openBeds24({
                      roomid,
                      numnight = 2,
                      numadult = 2,
                      lang = "fr",
                      arrival = todaysDDMMYY(),
                    }: {
  roomid: number;
  numnight?: number;
  numadult?: number;
  lang?: string;
  arrival?: string;
}) {
  const url = `${BEDS24_FORM_ACTION}?propid=${BEDS24_PROP_ID}&ownerid=${BEDS24_OWNER_ID}&roomid=${roomid}&arrival=${arrival}&numnight=${numnight}&numadult=${numadult}&lang=${lang}`;
  window.open(url, "bookingWindow", "width=1000,height=800,noopener,noreferrer");
}

// --- BookingStrip global (par propriété uniquement) ---
function openBeds24Property({
                              propid,
                              numnight = 2,
                              numadult = 2,
                              lang = "fr",
                              arrival = todaysDDMMYY(),
                            }: {
  propid: number;
  numnight?: number;
  numadult?: number;
  lang?: string;
  arrival?: string;
}) {
  const url = `${BEDS24_FORM_ACTION}?propid=${propid}&arrival=${arrival}&numnight=${numnight}&numadult=${numadult}&lang=${lang}`;
  window.open(url, "bookingWindow", "width=1000,height=800,noopener,noreferrer");
}

declare global {
  interface Window {
    jQuery: any;
  }
}

// -----------------
//  Données
// -----------------
type Acc = {
  id: string;
  name: string;
  priceNight: number;
  priceWeek: number;
  description: string;
  capacity: string;
  images: string[];
  widgetId: string;
  roomId: number;
  propId: number; // 👈 ajout: propid par hébergement
};

const accommodations: Acc[] = [
  {
    id: "domaine-complet",
    name: "Le domaine Complet",
    priceNight: 880,
    priceWeek: 4900,
    description: "L'ensemble du domaine avec les 4 suites",
    capacity: "10 personnes",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/e1c6a1d0-d9ec-44aa-a6a4-a7c59050a16a.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/79611727-40c7-4c38-8876-8e48edf44eb3.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/175269e6-89d1-499d-8cc2-42451ac494f8.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/2e8735e2-7e88-4689-a196-37c22ce1b182.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/7e7f54ac-db5e-48ad-9999-1be7028f21fb.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/4a86773c-d3d0-4165-a75a-c9d4c547cda8.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/1beebb56-3fbf-45eb-b899-ba61d0dd8e25.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/4a669c87-534a-45a9-938e-b62330fc7a99.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/49123f6b-ce4b-469d-9c86-13056487addb.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/783be5e5-e075-439d-a62d-e7036547ce60.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/d298efc2-c028-4243-9274-eb161c71048c.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1529713116553101480/original/a1c154b5-f634-4695-a6be-63a558f93e59.jpeg",
    ],
    widgetId: "bookWidget-domaine",
    roomId: 622060,       // Domaine complet
    propId: 297743,       // 👈 domaine = propid 144613
  },
  {
    id: "chenaie-gien",
    name: "Les Hortensias",
    priceNight: 385,
    priceWeek: 2425,
    description: "Logement principal avec vue sur le parc",
    capacity: "2-4 personnes",
    images: [
      "https://media.xmlcal.com/pic/p0029/6397/01.png",
      "https://media.xmlcal.com/pic/p0029/6397/02.png",
      "https://media.xmlcal.com/pic/p0029/6397/03.png",
      "https://media.xmlcal.com/pic/p0029/6397/04.png",
      "https://media.xmlcal.com/pic/p0029/6397/05.png",
      "https://media.xmlcal.com/pic/p0029/6397/06.png",
      "https://media.xmlcal.com/pic/p0029/6397/07.png",
      "https://media.xmlcal.com/pic/p0029/6397/08.png",
      "https://media.xmlcal.com/pic/p0029/6397/09.png",
      "https://media.xmlcal.com/pic/p0029/6397/10.png",
    ],
    widgetId: "bookWidget-chenaie",
    roomId: 619396,
    propId: BEDS24_PROP_ID_SUITES, // 👈 suites = propid 296397
  },
  {
    id: "les-charmilles",
    name: "Les Charmilles",
    priceNight: 209,
    priceWeek: 1315,
    description: "Gîte chaleureux au cœur du domaine",
    capacity: "2 personnes",
    images: [
      "https://media.xmlcal.com/pic/p0029/6397/14.png",
      "https://media.xmlcal.com/pic/p0029/6397/16.png",
        " https://media.xmlcal.com/pic/p0029/6397/18.png",
        "https://media.xmlcal.com/pic/p0029/6397/15.png",
        "https://media.xmlcal.com/pic/p0029/6397/17.png",
    ],
    widgetId: "bookWidget-charmilles",
    roomId: 619397,
    propId: BEDS24_PROP_ID_SUITES,
  },
  {
    id: "les-fresnes",
    name: "Les Fresnes",
    priceNight: 199,
    priceWeek: 1249,
    description: "Cottage confortable avec jardin privatif",
    capacity: "2 personnes",
    images: [
      "https://media.xmlcal.com/pic/p0029/6397/11.png",
      "https://media.xmlcal.com/pic/p0029/6397/12.png",
      "https://media.xmlcal.com/pic/p0029/6397/13.png",
        "",
    ],
    widgetId: "bookWidget-fresnes",
    roomId: 619398,
    propId: BEDS24_PROP_ID_SUITES,
  },
  {
    id: "les-acacias",
    name: "Les Acacias",
    priceNight: 199,
    priceWeek: 1249,
    description: "Studio moderne et lumineux",
    capacity: "2 personnes",
    images: [
      "https://media.xmlcal.com/pic/p0029/6397/21.png",
      "https://media.xmlcal.com/pic/p0029/6397/20.png",
        "https://media.xmlcal.com/pic/p0029/6397/19.png",
        "https://media.xmlcal.com/pic/p0029/6397/22.png",
    ],
    widgetId: "bookWidget-acacias",
    roomId: 619399,
    propId: BEDS24_PROP_ID_SUITES,
  },
];

const Booking = () => {
  // ① Charger jQuery + bookWidget
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jquery.async = true;
    document.head.appendChild(jquery);

    const jqueryUI = document.createElement("script");
    jqueryUI.src = "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js";
    jqueryUI.async = true;
    document.head.appendChild(jqueryUI);

    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css";
    document.head.appendChild(css);

    const bookWidget = document.createElement("script");
    bookWidget.src = "https://media.xmlcal.com/widget/1.01/js/bookWidget.min.js";
    bookWidget.async = true;
    document.head.appendChild(bookWidget);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(jqueryUI);
      document.head.removeChild(css);
      document.head.removeChild(bookWidget);
    };
  }, []);

  // ② Initialiser les widgets Beds24 (⚠️ maintenant avec propid + roomid)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.jQuery && window.jQuery.fn.bookWidget) {
        accommodations.forEach((a) => {
          window.jQuery(`#${a.widgetId}`).bookWidget({
            propid: a.propId,                    // 👈 Important : propid correct
            roomid: a.roomId,                    // 👈 et roomid de la suite
            // ownerid uniquement pour le domaine si ta config l'exige :
            ...(a.propId === BEDS24_PROP_ID ? { ownerid: BEDS24_OWNER_ID } : {}),
            dateFormat: "dd/mm/yy",
            defaultNightsAdvance: 1,
            defaultNumNight: 2,
            formAction: BEDS24_FORM_ACTION,
            formTarget: "bookingWindow",
            maxAdult: 2,
            weekFirstDay: 1,
            widgetLang: "fr",
            widgetType: "AvailabilityCalendar",
            boxShadow: false,
          });
        });
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const domaine = accommodations.find((a) => a.id === "domaine-complet")!;
  const suites = accommodations.filter((a) => a.id !== "domaine-complet");

  // -----------------------
  // Rendu principal (style inchangé)
  // -----------------------
  return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* ---- Titre ---- */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Réservation</h1>
              <p className="text-xl text-muted-foreground">
                Consultez les disponibilités et réservez en ligne une ou plusieurs suites.
              </p>
              <p className="text-xl text-muted-foreground">Privatisation possible du domaine !</p>
            </div>

            {/* ---- Domaine complet ---- */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-6">Domaine Complet</h2>
              <div className="max-w-3xl mx-auto">
                <Card className="overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {domaine.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <img
                                src={img}
                                alt={`Domaine Complet ${i}`}
                                className="w-full h-[32rem] object-cover md:h-[36rem]"
                            />
                          </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{domaine.name}</h3>
                    <p className="text-muted-foreground mb-2">{domaine.description}</p>
                    <p className="text-muted-foreground mb-4">{domaine.capacity}</p>

                    {/* Tarifs */}
                    <div className="mb-6 text-center">
                      <p className="text-lg text-muted-foreground">À partir de</p>
                      <div className="flex justify-center gap-2 items-baseline">
                        <span className="text-3xl font-bold text-primary">{domaine.priceNight}€</span>
                        <span className="text-muted-foreground">/nuit</span>
                      </div>
                      <div className="flex justify-center gap-2 items-baseline mt-1">
                        <span className="text-xl font-semibold">{domaine.priceWeek}€</span>
                        <span className="text-muted-foreground">/semaine</span>
                        <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-primary/10 text-primary font-medium">
                        -10%
                      </span>
                      </div>
                    </div>

                    {/* Calendrier Beds24 */}
                    <div id={domaine.widgetId} className="mb-6"></div>

                    {/* Bouton vers Beds24 */}
                    <Button
                        size="lg"
                        className="w-full"
                        onClick={() => openBeds24({ roomid: domaine.roomId })}
                    >
                      Réserver le Domaine Complet
                    </Button>
                  </div>
                </Card>
              </div>
            </section>

            {/* ---- Suites ---- */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-6">Les Suites</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {suites.map((suite) => (
                    <Card key={suite.id} className="overflow-hidden">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {suite.images.map((img, i) => (
                              <CarouselItem key={i}>
                                <img
                                    src={img}
                                    alt={`${suite.name} ${i}`}
                                    className="w-full h-96 object-cover"
                                />
                              </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{suite.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{suite.description}</p>
                        <p className="text-sm text-muted-foreground mb-4">{suite.capacity}</p>

                        {/* Tarifs */}
                        <div className="mb-6 text-center">
                          <p className="text-sm text-muted-foreground">À partir de</p>
                          <div className="flex justify-center gap-2 items-baseline">
                            <span className="text-2xl font-bold text-primary">{suite.priceNight}€</span>
                            <span className="text-muted-foreground">/nuit</span>
                          </div>
                          <div className="flex justify-center gap-2 items-baseline mt-1">
                            <span className="text-lg font-semibold">{suite.priceWeek}€</span>
                            <span className="text-muted-foreground">/semaine</span>
                            <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-primary/10 text-primary font-medium">
                          -10%
                        </span>
                          </div>
                        </div>

                        {/* Calendrier Beds24 */}
                        <div id={suite.widgetId} className="mb-4"></div>
                      </div>
                    </Card>
                ))}
              </div>

              {/* Bouton global “Réserver une Suite” */}
              <div className="mt-10 max-w-lg mx-auto">
                <Button
                    size="lg"
                    className="w-full"
                    onClick={() =>
                        openBeds24Property({
                          propid: BEDS24_PROP_ID_SUITES, // BookingStrip côté suites
                          numnight: 2,
                          numadult: 2,
                        })
                    }
                >
                  Réserver une ou plusieurs Suites
                </Button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default Booking;
