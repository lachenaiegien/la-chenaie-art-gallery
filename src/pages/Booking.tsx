import { useEffect } from "react";
import HeaderGites from "@/components/HeaderGites";
import FooterGites from "@/components/FooterGites";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import images
import img679468415 from "../assets/gite/679468415.jpg";
import img2397 from "../assets/gite/IMG_2397.jpg";
import img2398 from "../assets/gite/IMG_2398.jpg";
import img2399 from "../assets/gite/IMG_2399.jpg";
import img2400 from "../assets/gite/IMG_2400.jpg";
import img2405 from "../assets/gite/IMG_2405.jpg";
import img2408 from "../assets/gite/IMG_2408.jpg";
import img2413 from "../assets/gite/IMG_2413.jpg";
import img2414 from "../assets/gite/IMG_2414.jpg";
import img2415 from "../assets/gite/IMG_2415.jpg";
import img2416 from "../assets/gite/IMG_2416.jpg";
import img2417 from "../assets/gite/IMG_2417.jpg";
import img2421 from "../assets/gite/IMG_2421.jpg";
import img2422 from "../assets/gite/IMG_2422.jpg";
import img2424 from "../assets/gite/IMG_2424.jpg";
import img2435 from "../assets/gite/IMG_2435.jpg";
import img2436 from "../assets/gite/IMG_2436.jpg";
import img2437 from "../assets/gite/IMG_2437.jpg";
import img2438 from "../assets/gite/IMG_2438.jpg";
import img2439 from "../assets/gite/IMG_2439.jpg";
import img2441 from "../assets/gite/IMG_2441.jpg";
import img2442 from "../assets/gite/IMG_2442.jpg";
import img2443 from "../assets/gite/IMG_2443.jpg";
import img2444 from "../assets/gite/IMG_2444.jpg";
import img2445 from "../assets/gite/IMG_2445.jpg";
import img2446 from "../assets/gite/IMG_2446.jpg";
import img2447 from "../assets/gite/IMG_2447.jpg";
import img2448 from "../assets/gite/IMG_2448.jpg";
import img2451 from "../assets/gite/IMG_2451.jpg";
import img3777 from "../assets/gite/IMG_3777.jpg";
import img679463829 from "../assets/gite/679463829.jpg";
import img679463832 from "../assets/gite/679463832.jpg";
import img679463843 from "../assets/gite/679463843.jpg";
import img679463851 from "../assets/gite/679463851.jpg";
import img679463866 from "../assets/gite/679463866.jpg";
import img679463871 from "../assets/gite/679463871.jpg";
import img679463874 from "../assets/gite/679463874.jpg";
import img679463875 from "../assets/gite/679463875.jpg";
//hortensias
import img569790758 from "../assets/gite/hortensias/569790758.jpg";
import img569790847 from "../assets/gite/hortensias/569790847.jpg";
import img569790855 from "../assets/gite/hortensias/569790855.jpg";
import img569790867 from "../assets/gite/hortensias/569790867.jpg";
import img569790871 from "../assets/gite/hortensias/569790871.jpg";
import img569790886 from "../assets/gite/hortensias/569790886.jpg";
import img569790901 from "../assets/gite/hortensias/569790901.jpg";
import img569790918 from "../assets/gite/hortensias/569790918.jpg";
import img569790926 from "../assets/gite/hortensias/569790926.jpg";
import img569790969 from "../assets/gite/hortensias/569790969.jpg";
import img569790987 from "../assets/gite/hortensias/569790987.jpg";
import img569790996 from "../assets/gite/hortensias/569790996.jpg";
import img569791009 from "../assets/gite/hortensias/569791009.jpg";
import img569791027 from "../assets/gite/hortensias/569791027.jpg";
import img569791033 from "../assets/gite/hortensias/569791033.jpg";
import img598897308 from "../assets/gite/hortensias/598897308.jpg";
import img5697909480 from "../assets/gite/hortensias/5697909480.jpg";
import img3764 from "../assets/gite/hortensias/IMG_3764.jpg";
import img3766 from "../assets/gite/hortensias/IMG_3766.jpg";
//fresnes
import img679462333 from "../assets/gite/fresnes/679462333.jpg";
import img679462351 from "../assets/gite/fresnes/679462351.jpg";
import img679462360 from "../assets/gite/fresnes/679462360.jpg";
import img679470483 from "../assets/gite/fresnes/679470483.jpg";
import img679470569 from "../assets/gite/fresnes/679470569.jpg";
import img679471268 from "../assets/gite/fresnes/679471268.jpg";
//accacias
import img679455872 from "../assets/gite/accacias/679455872.jpg";
import img679455908 from "../assets/gite/accacias/679455908.jpg";
import img679455945 from "../assets/gite/accacias/679455945.jpg";
import img679455949 from "../assets/gite/accacias/679455949.jpg";
import img6894 from "../assets/gite/accacias/IMG_6894.jpg";
//Charmilles
import img679463808 from "../assets/gite/charmilles/679463808.jpg";
import img679463837 from "../assets/gite/charmilles/679463837.jpg";
import img679463848 from "../assets/gite/charmilles/679463848.jpg";
import img679463859 from "../assets/gite/charmilles/679463859.jpg";
import img679463862 from "../assets/gite/charmilles/679463862.jpg";

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
  include: string;
  images: string[];
  widgetId: string;
  roomId: number;
  propId: number; // 👈 ajout: propid par hébergement
};

const accommodations: Acc[] = [
  {
    id: "domaine-complet",
    name: "Le domaine Complet",
    priceNight: 879,
    priceWeek: 4899,
    description: "L'ensemble du domaine avec les 4 suites - retrouvez les photos de chaque suites dans la section Les Suites ci-dessous",
    capacity: "10 personnes",
      include: "ménage et linge inclus + 1h30 de spa offert en basse saison (octobre à avril) + accès à la salle de sport, au terrain de tennis, aux jardins, à la piscine (ouverte de mai à septemnbre)",
    images: [
        //extérieur batiment
        img679463874,
        img679468415,
        img679463866,
        img569790855,
        img569790901,
        //salon
        img679463829,
        img679463875,
        img679463832,
        //spa
        img2436,
        img2435,
        img2439,
        img2442,
        img2447,
        img679463871,
        img3777,



    ],
    widgetId: "bookWidget-domaine",
    roomId: 622060,       // Domaine complet
    propId: 297743,       // 👈 domaine = propid 144613
  },
  {
    id: "chenaie-gien",
    name: "Les Hortensias",
    priceNight: 379,
    priceWeek: 2419,
    description: "Maison individuelle",
    capacity: "2-4 personnes",
      include: "ménage et linge inclus + 1h30 de spa offert en basse saison (octobre à avril) + accès à la salle de sport, au terrain de tennis, aux jardins, à la piscine (ouverte de mai à septemnbre)",
      images: [
        img569790758,
        img569790847,
        img569790855,
        img569790867,
        img569790871,
        img569790886,
        img569790901,
        img569790918,
        img569790926,
        img569790969,
        img569790987,
        img569790996,
        img569791009,
        img569791027,
        img569791033,
        img598897308,
        img5697909480,
        img3764,
        img3766,
    ],
    widgetId: "bookWidget-chenaie",
    roomId: 619396,
    propId: BEDS24_PROP_ID_SUITES, // 👈 suites = propid 296397
  },
  {
    id: "les-charmilles",
    name: "Les Charmilles",
    priceNight: 209,
    priceWeek: 1309,
    description: "Suite",
    capacity: "2 personnes",
      include: "ménage et linge inclus + 1h30 de spa offert en basse saison (octobre à avril) + accès à la salle de sport, au terrain de tennis, aux jardins, à la piscine (ouverte de mai à septemnbre)",
      images: [
          img679463837,
          img679463808,
        img679463848,
        img679463859,
        img679463862,
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
    description: "Suite",
    capacity: "2 personnes",
      include: "ménage et linge inclus + 1h30 de spa offert en basse saison (octobre à avril) + accès à la salle de sport, au terrain de tennis, aux jardins, à la piscine (ouverte de mai à septemnbre)",
      images: [
          img679470483,
          img679470569,
        img679462333,
          img679471268,
        img679462351,
        img679462360,
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
    description: "Suite",
    capacity: "2 personnes",
      include: "ménage et linge inclus + 1h30 de spa offert en basse saison (octobre à avril) + accès à la salle de sport, au terrain de tennis, aux jardins, à la piscine (ouverte de mai à septemnbre)",
      images: [
          img679455908,
          img6894,
          img679455872,
        img679455945,
        img679455949,
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
      <HeaderGites />
        <main className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">            {/* ---- Titre ---- */}
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
                                alt={`Domaine complet ${i}`}
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
                        <div className="flex justify-center gap-2 items-baseline mt-1">
                            <p className="text-muted-foreground mb-4">{domaine.include}</p>
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
                      Réserver le Domaine complet
                    </Button>
                  </div>
                </Card>
              </div>
            </section>

            {/* ---- Suites ---- */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Les Suites</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                {suites.map((suite) => (
                    <Card key={suite.id} className="overflow-hidden">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {suite.images.map((img, i) => (
                                    <CarouselItem
                                        key={i}
                                        className="h-[24rem] md:h-[30rem]" // ajuste comme tu veux
                                    >
                                        <div className="relative w-full h-full">
                                            <img
                                                src={img}
                                                alt={`${suite.name} ${i}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
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
                            <div className="flex justify-center gap-2 items-baseline mt-1">
                                <p className="text-muted-foreground mb-4">{suite.include}</p>
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
        <FooterGites />
      </div>
  );
};

export default Booking;
