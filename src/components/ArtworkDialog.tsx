// src/components/ArtworkDialog.tsx
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

type ArtworkData = {
    title: string;
    artist: string;
    year: string;
    material: string;
    dimensions: string;
    src: string;
    alt?: string;
    description: string;
    downloadUrl?: string;
};

type Props = {
    open: boolean;
    onClose: () => void;
    artwork: ArtworkData | null;
};

export default function ArtworkDialog({ open, onClose, artwork }: Props) {
    if (!artwork) return null;

    return (
        <Dialog open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
            {/* Fullscreen on mobile, centered modal on desktop */}
            <DialogContent
                className="
          p-0 overflow-hidden
          w-[100vw] max-w-none h-[96svh]      /* mobile: fullscreen-style */
          sm:w-auto sm:max-w-5xl sm:h-auto   /* desktop: classic modal */
        "
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>{artwork.title}</DialogTitle>
                    <DialogDescription>{artwork.artist}</DialogDescription>
                </DialogHeader>

                {/* Grid layout; on mobile the dialog takes full height and splits vertically */}
                <div className="grid sm:grid-cols-2 h-full">
                    {/* Image block */}
                    <div className="relative h-[46svh] sm:h-full">
                        <img
                            src={artwork.src}
                            alt={artwork.alt ?? artwork.title}
                            className="w-full h-full object-contain sm:object-cover bg-muted"
                        />
                        {/* Close button visible on mobile too */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-3 right-3 rounded-full bg-black/30 text-white hover:bg-black/40"
                            aria-label="Fermer"
                            onClick={onClose}
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Info block – scrollable on mobile */}
                    <div className="max-h-full sm:max-h-[80vh] overflow-y-auto">
                        <div className="p-5 md:p-6 lg:p-8 space-y-4">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">{artwork.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {artwork.artist} • {artwork.year}
                                </p>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {artwork.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div className="rounded-md bg-muted p-3">
                                    <p className="text-foreground font-medium">Matériau</p>
                                    <p className="text-muted-foreground">{artwork.material}</p>
                                </div>
                                <div className="rounded-md bg-muted p-3">
                                    <p className="text-foreground font-medium">Dimensions</p>
                                    <p className="text-muted-foreground">{artwork.dimensions}</p>
                                </div>
                            </div>

                            {artwork.downloadUrl && (
                                <div className="pt-2">
                                    <Button asChild className="w-full sm:w-auto">
                                        <a href={artwork.downloadUrl} target="_blank" rel="noopener noreferrer">
                                            <Download className="w-4 h-4 mr-2" />
                                            Télécharger la fiche
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
