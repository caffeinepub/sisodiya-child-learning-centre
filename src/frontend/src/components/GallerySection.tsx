import { galleryImageSrcs } from "@/assets/galleryImages";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryMeta = [
  { caption: "Centre Entrance", category: "Exterior" },
  { caption: "Centre Building", category: "Exterior" },
  { caption: "Interior Hallway", category: "Interior" },
  { caption: "Staircase & Hallway", category: "Interior" },
  { caption: "Therapy Learning Room", category: "Therapy" },
  { caption: "Colorful Learning Space", category: "Therapy" },
  { caption: "Therapy Room", category: "Therapy" },
  { caption: "Festive Decorated Hall", category: "Interior" },
  { caption: "Centre Signboard", category: "Exterior" },
  { caption: "Classroom Session", category: "Classroom" },
  { caption: "Learning Classroom", category: "Classroom" },
  { caption: "Special Education Room", category: "Therapy" },
  { caption: "Centre Advertisement", category: "Exterior" },
  { caption: "Centre Banner", category: "Interior" },
  { caption: "Therapy Activity Room", category: "Therapy" },
  { caption: "Decorated Learning Area", category: "Therapy" },
  { caption: "Sensory Integration Room", category: "Sensory" },
  { caption: "Group Activity Space", category: "Therapy" },
  { caption: "Colourful Therapy Room", category: "Therapy" },
  { caption: "Learning Activities Area", category: "Therapy" },
  { caption: "Decorated Corridor", category: "Interior" },
  { caption: "Individual Therapy Space", category: "Therapy" },
  { caption: "Classroom Therapy Session", category: "Classroom" },
  { caption: "Structured Learning Room", category: "Classroom" },
  { caption: "Play & Learn Area", category: "Play" },
  { caption: "Sensory Exercise Room", category: "Sensory" },
  { caption: "Play Activity Area", category: "Play" },
  { caption: "Celebration & Events", category: "Events" },
  { caption: "Colourful Play Zone", category: "Play" },
  { caption: "Special Event Decoration", category: "Events" },
];

const galleryItems = galleryMeta.map((meta, i) => ({
  src: galleryImageSrcs[i],
  caption: meta.caption,
  category: meta.category,
}));

const CATEGORIES = [
  "All",
  "Exterior",
  "Interior",
  "Therapy",
  "Classroom",
  "Sensory",
  "Play",
  "Events",
] as const;

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (filteredIndex: number) => {
    const globalIndex = galleryItems.findIndex(
      (item) => item.src === filteredItems[filteredIndex].src,
    );
    setLightboxIndex(globalIndex);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : 0,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : 0));

  return (
    <section id="gallery" className="py-20 md:py-28 section-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-200 rounded-full px-4 py-1.5 mb-4">
            <ZoomIn className="w-3.5 h-3.5 text-warm-500" />
            <span className="font-heading font-700 text-sm text-warm-600">
              Our Gallery
            </span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our Centre <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our learning spaces, therapy rooms, sensory areas and
            special events.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-heading font-700 transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-70">
                (
                {cat === "All"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === cat).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={`${item.category}-${item.caption}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 aspect-square"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[10px] font-heading font-700 bg-primary/90 text-white px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="font-heading font-700 text-xs text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                  {item.caption}
                </p>
              </div>
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100">
                <ZoomIn className="w-3.5 h-3.5 text-foreground" />
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground font-body py-10">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <dialog
          open
          className="fixed inset-0 z-[100] w-full h-full bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4 m-0 max-w-none max-h-none border-0"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl w-full mx-14"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].caption}
              className="w-full max-h-[78vh] object-contain rounded-2xl"
            />
            <div className="mt-3 text-center">
              <p className="font-heading font-700 text-base text-white">
                {galleryItems[lightboxIndex].caption}
              </p>
              <p className="font-body text-xs text-white/50 mt-1">
                {lightboxIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
