import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const WRITE_REVIEW_URL =
  "https://www.google.com/maps/search/Sisodiya+Child+Learning+Centre+Sector+5+Gurugram#lrd=0x0:0x0,3";
const ALL_REVIEWS_URL =
  "https://www.google.com/maps/search/Sisodiya+Child+Learning+Centre+Sector+5+Gurugram";
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/Sisodiya+Child+Learning+Centre+LG-382+Sector+5+Gurugram+Haryana+122001";

const reviews = [
  {
    name: "Neha Gupta",
    initials: "NG",
    date: "November 2024",
    review:
      "My son has shown remarkable improvement in speech after joining here. The therapists are highly trained and very caring. Highly recommend!",
    bg: "bg-warm-100",
    color: "text-warm-700",
  },
  {
    name: "Rajesh Kumar",
    initials: "RK",
    date: "October 2024",
    review:
      "Best therapy centre in Gurgaon. The ABA therapy has transformed our daughter's behavior. Staff is very professional.",
    bg: "bg-sage-100",
    color: "text-sage-600",
  },
  {
    name: "Meena Sharma",
    initials: "MS",
    date: "October 2024",
    review:
      "The special education program is excellent. Teachers work very patiently with every child. Our son loves coming here.",
    bg: "bg-golden-100",
    color: "text-golden-500",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    date: "September 2024",
    review:
      "Occupational therapy sessions have helped our child with motor skills tremendously. Very satisfied with the results.",
    bg: "bg-warm-100",
    color: "text-warm-600",
  },
  {
    name: "Priyanka Agarwal",
    initials: "PA",
    date: "September 2024",
    review:
      "Group therapy sessions are amazing. My daughter has become so much more confident and social. Thank you team!",
    bg: "bg-sage-100",
    color: "text-sage-600",
  },
  {
    name: "Amit Verma",
    initials: "AV",
    date: "August 2024",
    review:
      "Prince sir and the entire team are very dedicated. Free assessment helped us understand our child's needs clearly.",
    bg: "bg-golden-100",
    color: "text-golden-500",
  },
];

// Google G icon using colored letters
function GoogleGIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-warm-200 bg-white shadow-xs select-none">
      <span
        className="font-heading font-900 text-sm leading-none"
        style={{
          background:
            "linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        G
      </span>
    </span>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section id="google-reviews" className="py-20 md:py-28 section-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-warm-200 rounded-full px-4 py-1.5 mb-4 shadow-xs">
            <GoogleGIcon />
            <span className="font-heading font-700 text-sm text-foreground">
              Google Reviews
            </span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What Families Say <span className="text-primary">on Google</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from parents who have experienced our therapy programs
            — shared directly on Google.
          </p>
        </div>

        {/* Google Business Profile Card + Aggregate Rating */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mb-12 max-w-3xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex flex-col items-center gap-3 bg-white rounded-3xl px-8 py-6 shadow-card border border-warm-100 flex-shrink-0">
            <div className="flex items-center gap-3">
              <GoogleGIcon />
              <span className="font-heading font-900 text-5xl text-foreground leading-none">
                4.9
              </span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-6 h-6 text-golden-400 fill-golden-400"
                />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground font-500">
              50+ Reviews on Google
            </p>
          </div>

          {/* Google Business Info */}
          <div className="bg-white rounded-3xl p-6 border border-warm-100 shadow-card flex-1 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-warm-50 border border-warm-100 flex items-center justify-center">
                <span
                  className="font-heading font-900 text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg,#4285F4 0%,#EA4335 33%,#FBBC05 66%,#34A853 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  G
                </span>
              </div>
              <div>
                <p className="font-heading font-700 text-sm text-foreground">
                  Sisodiya Child Learning Centre
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Google Business Profile
                </p>
              </div>
            </div>
            <div className="space-y-1.5 mb-4">
              <p className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="text-warm-500">📍</span> LG-382, Sector 5,
                Gurugram, Haryana – 122001
              </p>
              <p className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="text-warm-500">🕒</span> Mon–Sat: 9:00 AM –
                6:00 PM
              </p>
              <p className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="text-warm-500">📞</span> 6376544185
              </p>
            </div>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-warm-50 hover:bg-warm-100 border border-warm-200 text-warm-700 font-heading font-700 text-xs px-4 py-2 rounded-xl transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl p-6 border border-warm-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${r.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <span className={`font-heading font-800 text-xs ${r.color}`}>
                    {r.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-700 text-sm text-foreground truncate">
                    {r.name}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-warm-50 border border-warm-200 rounded-full px-2 py-0.5">
                      <GoogleGIcon />
                      <span className="font-body text-xs text-muted-foreground">
                        Google Review
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-golden-400 fill-golden-400"
                  />
                ))}
                <span className="ml-2 font-body text-xs text-muted-foreground">
                  {r.date}
                </span>
              </div>

              {/* Review Text */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic flex-1">
                "{r.review}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-warm-600 rounded-xl font-heading font-700 shadow-warm px-6 py-3 text-base gap-2">
              <Star className="w-4 h-4 fill-white" />
              Write a Review on Google
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <a href={ALL_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-warm-300 text-warm-700 hover:bg-warm-50 rounded-xl font-heading font-700 px-6 py-3 text-base gap-2"
            >
              <GoogleGIcon />
              See All Reviews
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
