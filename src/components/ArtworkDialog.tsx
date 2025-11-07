import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
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
            {/* Fullscreen on mobile, classic modal on ≥sm */}
            <DialogContent
                className="
          p-0 overflow-hidden
          w-[100vw] max-w-none h-[96svh] sm:w-auto sm:max-w-5xl sm:h-auto
          min-h-0  /* allow children to manage overflow in CSS grid */
        "
            >
                {/* Use the library close button (so only one ❌), but restyle it */}
                <DialogClose
                    className="
            absolute right-3 top-3 inline-flex items-center justify-center
            h-9 w-9 rounded-full bg-black/35 text-white hover:bg-black/50
            transition
          "
                    aria-label="Fermer"
                >
                    <X className="h-5 w-5" />
                </DialogClose>

                <DialogHeader className="sr-only">
                    <DialogTitle>{artwork.title}</DialogTitle>
                    <DialogDescription>{artwork.artist}</DialogDescription>
                </DialogHeader>

                {/* Mobile: 2 rows (image / info). Desktop: 2 columns. */}
                <div
                    className="
            grid min-h-0 h-full
            grid-rows-[minmax(48svh,1fr)_minmax(0,1fr)]
            sm:grid-rows-none sm:grid-cols-2
          "
                >
                    {/* Image */}
                    <div className="relative min-h-0">
                        <img
                            src={artwork.src}
                            alt={artwork.alt ?? artwork.title}
                            className="w-full h-full object-contain sm:object-cover bg-muted"
                        />
                    </div>

                    {/* Info (scrollable on mobile) */}
                    <div
                        className="
              min-h-0 max-h-full overflow-y-auto
              [overflow-anchor:auto] [overscroll-behavior:contain]
              [-webkit-overflow-scrolling:touch]
            "
                    >
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
                                        <a
                                            href={artwork.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download
                                        >
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
