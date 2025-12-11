import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import GalleryAccueil from "./pages/gallery/Accueil";
import Gallery from "./pages/Gallery";
import Artists from "./pages/Artists";
import NotFound from "./pages/NotFound";
import ArtGien from "./pages/gallery/ArtGien"; // ← page SEO que tu vas créer

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />

            {/* SEO GLOBAL */}
            <Helmet>
                <title>Galerie d’Art Contemporain à Gien - Domaine La Chênaie</title>

                <meta
                    name="description"
                    content="Galerie d’art contemporain à Gien dans le Loiret. Sculptures monumentales, expositions de Jingyu Bai et visites du Domaine La Chênaie."
                />

                <link
                    rel="canonical"
                    href="https://www.gallerie-art-lachenaie.fr/"
                />

                <meta property="og:title" content="Galerie d’Art Contemporain à Gien - La Chênaie" />
                <meta property="og:description" content="Découvrez les sculptures monumentales et les œuvres de Jingyu Bai à Gien dans le Loiret." />
                <meta property="og:url" content="https://www.gallerie-art-lachenaie.fr/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GalleryAccueil />} />
                    <Route path="/gallery/accueil" element={<GalleryAccueil />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/artists" element={<Artists />} />

                    {/* PAGE SEO pour Google */}
                    {/*  <Route path="/art-gien" element={<ArtGien />} />*/}

                    {/* Catch-all */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
