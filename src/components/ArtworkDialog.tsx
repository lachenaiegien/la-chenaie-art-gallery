// src/components/ArtworkDialog.tsx
import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

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

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const handler = (e: MediaQueryList | MediaQueryListEvent) =>
            setIsMobile((e as MediaQueryList).matches ?? (e as MediaQueryListEvent).matches);
        handler(mq);
        mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
        return () => {
            mq.removeEventListener
                ? mq.removeEventListener("change", handler)
                : mq.removeListener(handler);
        };
    }, []);
    return isMobile;
}

export default function ArtworkDialog({ open, onClose, artwork }: Props) {
    const isMobile = useIsMobile();
    if (!artwork) return null;

    const ImageBlock = (
        <div className="relative bg-muted">
            <img
                src={artwork.src}
                alt={artwork.alt ?? artwork.title}
                className="w-full h-full object-cover"
            />
            {/* léger voile pour lisibilité si l’image est très claire */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>
    );

    const InfoBlock = (
        <div className="p-5 md:p-6 lg:p-8 space-y-4">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-foreground">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        {artwork.artist} • {artwork.year}
                    </p>
                </div>

                {/* bouton fermer (mobile & desktop) */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 rounded-full"
                    aria-label="Fermer"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>

            <div className="text-sm text-muted-foreground leading-relaxed">
                {artwork.description}
            </div>

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
    );

    // ---- Mobile: Sheet plein-écran (bottom) ----
    if (isMobile) {
        return (
            <Sheet open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
                <SheetContent
                    side="bottom"
                    className="h-[96svh] p-0 overflow-hidden rounded-t-2xl"
                >
                    <SheetHeader className="sr-only">
                        <SheetTitle>{artwork.title}</SheetTitle>
                        <SheetDescription>{artwork.artist}</SheetDescription>
                    </SheetHeader>

                    <div className="h-full w-full grid grid-rows-[minmax(45svh,55svh)_1fr]">
                        <div className="relative">{ImageBlock}</div>
                        <div className="overflow-y-auto">{InfoBlock}</div>
                    </div>
                </SheetContent>
            </Sheet>
        );
    }

    // ---- Desktop: Dialog centré ----
    return (
        <Dialog open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden">
                <DialogHeader className="sr-only">
                    <DialogTitle>{artwork.title}</DialogTitle>
                    <DialogDescription>{artwork.artist}</DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2">
                    <div className="aspect-[4/5] md:aspect-auto md:h-full">{ImageBlock}</div>
                    <div className="max-h-[80vh] overflow-y-auto">{InfoBlock}</div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
