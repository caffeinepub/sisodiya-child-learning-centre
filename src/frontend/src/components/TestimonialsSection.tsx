import { ExternalLink, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    detail: "Mother of Arjun, 6",
    initials: "PS",
    color: "text-warm-600",
    bg: "bg-warm-100",
    review:
      "The speech therapy at Sisodiya Centre has been life-changing for my son. In just 3 months, he started speaking full sentences. The therapists are so patient and caring.",
  },
  {
    name: "Rohit Verma",
    detail: "Father of Sneha, 5",
    initials: "RV",
    color: "text-sage-600",
    bg: "bg-sage-100",
    review:
      "We were worried about our daughter's development delays. The team here created a personalized plan and the results have been amazing. She's now more confident and independent.",
  },
  {
    name: "Sunita Agarwal",
    detail: "Mother of Rahul, 8",
    initials: "SA",
    color: "text-golden-600",
    bg: "bg-golden-100",
    review:
      "The special education program has helped Rahul catch up with his academic skills. The teachers understand each child individually. Highly recommended!",
  },
  {
    name: "Deepak Kumar",
    detail: "Father of Ananya, 4",
    initials: "DK",
    color: "text-warm-500",
    bg: "bg-warm-50",
    review:
      "The occupational therapy sessions have improved Ananya's motor skills tremendously. The centre's environment is warm and welcoming. Our family is so grateful.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-golden-100 border border-golden-200 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-golden-500 fill-golden-400" />
            <span className="font-heading font-700 text-sm text-golden-600">
              Parent Reviews
            </span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What <span className="text-primary">Parents</span> Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from families whose children have grown, thrived, and
            found their confidence at Sisodiya Child Learning Centre.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-warm-50 rounded-4xl p-7 border border-warm-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-6">
                <Quote className="w-8 h-8 text-warm-200 fill-warm-100" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-golden-400 fill-golden-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 italic">
                "{t.review}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <span className={`font-heading font-800 text-xs ${t.color}`}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-700 text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10">
          <p className="font-body text-sm text-muted-foreground mb-5">
            Join hundreds of families who trust us with their child's journey.
            💙
          </p>
          {/* Google Review CTA */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-warm-50 border border-warm-200 rounded-2xl px-6 py-4">
            <p className="font-heading font-700 text-sm text-foreground">
              Visited us? Share your experience!
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJVZb7szgaDTkR7k15xaBpTj4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-white font-heading font-700 text-sm px-4 py-2 rounded-xl hover:bg-warm-600 transition-colors shadow-warm"
            >
              <Star className="w-3.5 h-3.5 fill-white" />
              Write a Google Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
