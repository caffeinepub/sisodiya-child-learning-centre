import { CheckCircle, Eye, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every child is treated with warmth, respect, and unconditional support throughout their therapeutic journey.",
    color: "text-warm-500",
    bg: "bg-warm-100",
  },
  {
    icon: Target,
    title: "Goal-Oriented Therapy",
    description:
      "Individualized therapy plans designed to meet each child's specific developmental goals and milestones.",
    color: "text-sage-500",
    bg: "bg-sage-100",
  },
  {
    icon: Eye,
    title: "Holistic Approach",
    description:
      "We address the whole child — physical, cognitive, emotional, and social development — in an integrated manner.",
    color: "text-golden-500",
    bg: "bg-golden-100",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description:
      "We work closely with parents to ensure consistent progress at home and in therapy sessions.",
    color: "text-warm-600",
    bg: "bg-warm-50",
  },
];

const focusAreas = [
  "Improving communication skills",
  "Enhancing motor development",
  "Building independence",
  "Supporting academic growth",
  "Developing social and behavioral skills",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sage-100 border border-sage-200 rounded-full px-4 py-1.5 mb-4">
            <span className="font-heading font-700 text-sm text-sage-600">
              About Us
            </span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Sisodiya Child Learning Centre –{" "}
            <span className="text-primary">Ek Nayi Ummeed</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Sisodiya Child Learning Centre – Ek Nayi Ummeed is an integrated
            therapy centre providing speech therapy, occupational therapy,
            special education and developmental support for children with
            special needs in Gurgaon. Our expert team delivers personalized,
            evidence-based programs to help every child build confidence,
            communication skills and independence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div>
            <div className="bg-warm-50 rounded-4xl p-8 border border-warm-100 mb-6">
              <h3 className="font-heading font-800 text-2xl text-foreground mb-4">
                Our Story & Mission
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-3">
                Founded with the vision of{" "}
                <em className="text-warm-600 font-600 not-italic">
                  "Ek Nayi Ummeed"
                </em>{" "}
                — A New Hope — Sisodiya Child Learning Centre was established to
                provide comprehensive, integrated therapy services for children
                with special needs in Gurugram and beyond.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                Under the dedicated leadership of{" "}
                <span className="text-foreground font-600">
                  Prince Sisodiya
                </span>
                , our centre brings together expert therapists, special
                educators, and behaviour specialists who work as a unified team.
                We believe that every child — regardless of their diagnosis —
                deserves the chance to discover their strengths, develop new
                skills, and lead a fulfilling, independent life. Our approach
                combines evidence-based therapies with a warm, nurturing
                environment so children feel safe, seen, and celebrated every
                step of the way.
              </p>

              {/* Focus Areas */}
              <h4 className="font-heading font-700 text-base text-foreground mb-3">
                Our centre focuses on:
              </h4>
              <ul className="space-y-2 mb-5">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Parent Partnership */}
              <div className="bg-sage-50 border border-sage-100 rounded-2xl p-4">
                <p className="font-body text-sm text-sage-700 leading-relaxed">
                  <span className="font-heading font-700">
                    Parent Partnership:
                  </span>{" "}
                  We work closely with parents to ensure consistent progress at
                  home and in therapy sessions, providing guidance and support
                  every step of the way.
                </p>
              </div>
            </div>

            {/* Director Card */}
            <div className="bg-gradient-to-r from-warm-500 to-warm-600 rounded-3xl p-6 text-primary-foreground shadow-warm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-900 text-2xl text-white">
                    PS
                  </span>
                </div>
                <div>
                  <p className="font-heading font-800 text-xl text-white">
                    Prince Sisodiya
                  </p>
                  <p className="font-body text-sm text-white/80">
                    Director & Founder
                  </p>
                  <p className="font-body text-sm text-white/80">
                    Sisodiya Child Learning Centre
                  </p>
                </div>
              </div>
              <p className="font-body text-sm text-white/90 mt-4 leading-relaxed italic">
                "Our mission is to provide every child with the opportunity to
                discover their strengths and reach their fullest potential. We
                are committed to walking alongside families on this journey of
                hope and growth."
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-3xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${value.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h4 className="font-heading font-700 text-base text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "6+", label: "Therapy Disciplines", emoji: "🎯" },
            { number: "100%", label: "Child-Centered Care", emoji: "❤️" },
            { number: "Free", label: "Assessment Available", emoji: "🌟" },
            { number: "Gurugram", label: "Sector 5, Haryana", emoji: "📍" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-warm-50 rounded-3xl p-5 text-center border border-warm-100"
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <p className="font-heading font-900 text-2xl text-primary">
                {stat.number}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
