import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const accommodations = [
  {
    id: "chenaie-gien",
    name: "La Chênaie Gien",
    price: 120,
    description: "Logement principal avec vue sur le parc",
    capacity: "2-4 personnes",
  },
  {
    id: "les-charmilles",
    name: "Les Charmilles",
    price: 95,
    description: "Gîte chaleureux au cœur du domaine",
    capacity: "2-3 personnes",
  },
  {
    id: "les-fresnes",
    name: "Les Fresnes",
    price: 95,
    description: "Cottage confortable avec jardin privatif",
    capacity: "2-3 personnes",
  },
  {
    id: "les-accacias",
    name: "Les Accacias",
    price: 95,
    description: "Studio moderne et lumineux",
    capacity: "2 personnes",
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  accommodation: z.string().min(1, { message: "Veuillez sélectionner un logement" }),
  checkIn: z.date({ required_error: "Date d'arrivée requise" }),
  checkOut: z.date({ required_error: "Date de départ requise" }),
  guests: z.string().min(1, { message: "Nombre d'invités requis" }),
  message: z.string().optional(),
});

const Booking = () => {
  const { toast } = useToast();
  const [selectedAccommodation, setSelectedAccommodation] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      accommodation: "",
      guests: "2",
      message: "",
    },
  });

  const calculateNights = (checkIn?: Date, checkOut?: Date) => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotal = () => {
    const checkIn = form.watch("checkIn");
    const checkOut = form.watch("checkOut");
    const accommodationId = form.watch("accommodation");
    
    const nights = calculateNights(checkIn, checkOut);
    const accommodation = accommodations.find(a => a.id === accommodationId);
    
    if (!accommodation || nights === 0) return 0;
    return nights * accommodation.price;
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Demande de réservation envoyée !",
      description: "Nous vous contacterons rapidement pour confirmer votre réservation.",
    });
    form.reset();
  };

  const selectedAccommodationData = accommodations.find(
    (a) => a.id === selectedAccommodation
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Réservation
              </h1>
              <p className="text-xl text-muted-foreground">
                Séjournez au Domaine La Chénaie et découvrez l'exposition
              </p>
            </div>

            {/* Accommodations Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {accommodations.map((accommodation) => (
                <Card
                  key={accommodation.id}
                  className={cn(
                    "p-6 cursor-pointer transition-all hover:shadow-gallery-soft",
                    selectedAccommodation === accommodation.id
                      ? "ring-2 ring-primary"
                      : ""
                  )}
                  onClick={() => {
                    setSelectedAccommodation(accommodation.id);
                    form.setValue("accommodation", accommodation.id);
                  }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {accommodation.description}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {accommodation.capacity}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {accommodation.price}€
                    </span>
                    <span className="text-muted-foreground">/ nuit</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Booking Form */}
            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jean.dupont@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="06 12 34 56 78" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Accommodation Selection */}
                  <FormField
                    control={form.control}
                    name="accommodation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Logement</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            setSelectedAccommodation(value);
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un logement" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {accommodations.map((accommodation) => (
                              <SelectItem
                                key={accommodation.id}
                                value={accommodation.id}
                              >
                                {accommodation.name} - {accommodation.price}€/nuit
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Dates */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="checkIn"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date d'arrivée</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: fr })
                                  ) : (
                                    <span>Choisir une date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date()
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="checkOut"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date de départ</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: fr })
                                  ) : (
                                    <span>Choisir une date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  (form.watch("checkIn") && date <= form.watch("checkIn"))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre d'invités</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le nombre d'invités" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 personne</SelectItem>
                            <SelectItem value="2">2 personnes</SelectItem>
                            <SelectItem value="3">3 personnes</SelectItem>
                            <SelectItem value="4">4 personnes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optionnel)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Avez-vous des demandes particulières ?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Price Summary */}
                  {calculateTotal() > 0 && (
                    <Card className="p-6 bg-muted/50">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {selectedAccommodationData?.name}
                          </span>
                          <span className="text-muted-foreground">
                            {selectedAccommodationData?.price}€ x{" "}
                            {calculateNights(
                              form.watch("checkIn"),
                              form.watch("checkOut")
                            )}{" "}
                            nuit(s)
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline pt-2 border-t">
                          <span className="font-semibold text-foreground">Total</span>
                          <span className="text-2xl font-bold text-primary">
                            {calculateTotal()}€
                          </span>
                        </div>
                      </div>
                    </Card>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Envoyer la demande de réservation
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
