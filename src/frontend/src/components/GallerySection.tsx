import { X, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    src: "/assets/generated/gallery-therapy-session.dim_800x600.jpg",
    caption: "One-on-One Therapy Session",
  },
  {
    src: "/assets/generated/gallery-classroom.dim_800x600.jpg",
    caption: "Special Education Classroom",
  },
  {
    src: "/assets/generated/gallery-speech-therapy.dim_800x600.jpg",
    caption: "Speech Therapy Session",
  },
  {
    src: "/assets/generated/gallery-group-activity.dim_800x600.jpg",
    caption: "Group Learning Activities",
  },
  {
    src: "/assets/generated/gallery-occupational-therapy.dim_800x600.jpg",
    caption: "Occupational Therapy",
  },
  {
    src: "/assets/generated/gallery-play-learning.dim_800x600.jpg",
    caption: "Play-Based Learning",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
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
        <div className="text-center mb-14">
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
            A glimpse into our learning spaces and therapy sessions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-56 sm:h-52 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-heading font-700 text-sm text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100">
                <ZoomIn className="w-4 h-4 text-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <dialog
          open
          className="fixed inset-0 z-[100] w-full h-full bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 m-0 max-w-none max-h-none border-0"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          aria-label="Image gallery"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev / Next buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10 font-bold text-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center text-foreground hover:bg-card transition-colors z-10 font-bold text-lg"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].caption}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-warm-lg"
            />
            <div className="mt-3 text-center">
              <p className="font-heading font-700 text-base text-background">
                {galleryItems[lightboxIndex].caption}
              </p>
              <p className="font-body text-xs text-background/60 mt-1">
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
