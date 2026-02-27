import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    src: "/assets/uploads/IMG-20260228-WA0000-1.jpg",
    caption: "Centre Entrance",
    category: "Exterior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0001-2.jpg",
    caption: "Centre Building",
    category: "Exterior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0043-3.jpg",
    caption: "Interior Hallway",
    category: "Interior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0039-4.jpg",
    caption: "Staircase & Hallway",
    category: "Interior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0012-5.jpg",
    caption: "Therapy Learning Room",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0021-6.jpg",
    caption: "Colorful Learning Space",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0016-7.jpg",
    caption: "Therapy Room",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0014-8.jpg",
    caption: "Festive Decorated Hall",
    category: "Interior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0001-1-9.jpg",
    caption: "Centre Signboard",
    category: "Exterior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0035-10.jpg",
    caption: "Classroom Session",
    category: "Classroom",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0034-11.jpg",
    caption: "Learning Classroom",
    category: "Classroom",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0029-12.jpg",
    caption: "Special Education Room",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0000-1-13.jpg",
    caption: "Centre Advertisement",
    category: "Exterior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0034-1-14.jpg",
    caption: "Centre Banner",
    category: "Interior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0033-15.jpg",
    caption: "Therapy Activity Room",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0019-16.jpg",
    caption: "Decorated Learning Area",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0050-17.jpg",
    caption: "Sensory Integration Room",
    category: "Sensory",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0021-1-18.jpg",
    caption: "Group Activity Space",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0043-1-19.jpg",
    caption: "Colourful Therapy Room",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0012-1-20.jpg",
    caption: "Learning Activities Area",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0026-21.jpg",
    caption: "Decorated Corridor",
    category: "Interior",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0016-1-22.jpg",
    caption: "Individual Therapy Space",
    category: "Therapy",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0015-23.jpg",
    caption: "Classroom Therapy Session",
    category: "Classroom",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0022-24.jpg",
    caption: "Structured Learning Room",
    category: "Classroom",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0021-2-25.jpg",
    caption: "Play & Learn Area",
    category: "Play",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0008-26.jpg",
    caption: "Sensory Exercise Room",
    category: "Sensory",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0018-27.jpg",
    caption: "Play Activity Area",
    category: "Play",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0032-28.jpg",
    caption: "Celebration & Events",
    category: "Events",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0037-29.jpg",
    caption: "Colourful Play Zone",
    category: "Play",
  },
  {
    src: "/assets/uploads/IMG-20260228-WA0038-30.jpg",
    caption: "Special Event Decoration",
    category: "Events",
  },
];

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
      {/* Section Divider Top */}
      <div className="w-full overflow-hidden mb-0 -mt-1">
        <img
          src="/assets/generated/section-divider.dim_1200x80.png"
          alt=""
          className="w-full object-cover"
          aria-hidden="true"
        />
      </div>

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
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({galleryItems.filter((i) => i.category === cat).length})
                </span>
              )}
              {cat === "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({galleryItems.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.src}
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
              {/* Category badge */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[10px] font-heading font-700 bg-primary/90 text-white px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="font-heading font-700 text-xs text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                  {item.caption}
                </p>
              </div>
              {/* Zoom icon */}
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
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
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

          {/* Next button */}
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

          {/* Image */}
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

      {/* Section Divider Bottom */}
      <div className="w-full overflow-hidden mt-0 -mb-1">
        <img
          src="/assets/generated/section-divider.dim_1200x80.png"
          alt=""
          className="w-full object-cover rotate-180"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
