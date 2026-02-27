import { Mic, Hand, Brain, BookOpen, Users, Star, Gift, Home, Monitor } from 'lucide-react';

const services = [
  {
    icon: Hand,
    title: 'Occupational Therapy',
    tag: 'Motor Skills',
    color: 'text-sage-500',
    bg: 'bg-sage-100',
    border: 'border-sage-200',
    items: [
      'Sensory Integration',
      'Fine & Gross Motor Skills',
      'Handwriting Improvement',
      'Daily Living Skills',
    ],
  },
  {
    icon: Mic,
    title: 'Speech Therapy',
    tag: 'Communication',
    color: 'text-warm-500',
    bg: 'bg-warm-100',
    border: 'border-warm-200',
    items: [
      'Speech Clarity',
      'Language Development',
      'Oral Motor Exercises',
      'Communication Skills',
    ],
  },
  {
    icon: Brain,
    title: 'ABA Therapy',
    tag: 'Behavioral',
    color: 'text-warm-600',
    bg: 'bg-warm-50',
    border: 'border-warm-200',
    items: [
      'Behavior Modification',
      'Attention & Focus Improvement',
      'Skill Development Programs',
    ],
  },
  {
    icon: BookOpen,
    title: 'Special Education',
    tag: 'Education',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    items: [
      'Individual Learning Plans',
      'Academic Support',
      'Reading & Writing Skills',
    ],
  },
  {
    icon: Users,
    title: 'Group Therapy',
    tag: 'Social Skills',
    color: 'text-golden-600',
    bg: 'bg-golden-50',
    border: 'border-golden-200',
    items: [
      'Social Interaction',
      'Communication Practice',
      'Confidence Building',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 section-warm">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-200 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-warm-500 fill-warm-400" />
            <span className="font-heading font-700 text-sm text-warm-600">Our Services</span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Therapies &{' '}
            <span className="text-primary">Programs</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our integrated approach combines multiple therapy disciplines to provide
            comprehensive, holistic care for children with special needs.
          </p>
        </div>

        {/* Availability Banners */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {/* Home Sessions Banner */}
          <div className="bg-gradient-to-r from-sage-500 to-sage-600 rounded-3xl p-6 md:p-7 flex flex-col sm:flex-row items-center gap-4 shadow-warm">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading font-800 text-lg text-white mb-1">🏡 Home Sessions Available</p>
              <p className="font-body text-sm text-white/85">
                We provide home-based therapy sessions for children who require therapy at home.
                Our therapists come to you for a comfortable, familiar environment.
              </p>
            </div>
          </div>

          {/* Online Sessions Banner */}
          <div className="bg-gradient-to-r from-warm-500 to-warm-600 rounded-3xl p-6 md:p-7 flex flex-col sm:flex-row items-center gap-4 shadow-warm">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading font-800 text-lg text-white mb-1">💻 Online Sessions Available</p>
              <p className="font-body text-sm text-white/85">
                Can't visit in person? We offer online therapy sessions via video call
                so your child can receive expert care from anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-card rounded-4xl p-7 border ${service.border} shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group`}
              >
                {/* Icon & Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center shadow-xs`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <span className={`text-xs font-heading font-700 px-3 py-1 rounded-full ${service.bg} ${service.color} border ${service.border}`}>
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-800 text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Sub-items */}
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.color.replace('text-', 'bg-')}`} />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Free Assessment Card — highlighted */}
          <div className="bg-gradient-to-br from-golden-400 to-golden-500 rounded-4xl p-7 border border-golden-300 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8 pointer-events-none" />

            {/* Icon & Badge */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center shadow-xs">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-heading font-800 px-3 py-1 rounded-full bg-white text-golden-600 border border-golden-200 shadow-xs">
                FREE ✨
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-800 text-lg text-white mb-2">
              Free Assessment
            </h3>
            <p className="font-body text-sm text-white/90 leading-relaxed mb-3">
              Not sure which therapy your child needs? Book a free assessment with our expert team.
            </p>
            <p className="font-body text-xs text-white/80">
              Comprehensive evaluation to recommend the most suitable therapy plan for your child's unique needs.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-warm-500 to-warm-600 rounded-4xl p-8 md:p-10 text-center shadow-warm-lg">
          <h3 className="font-heading font-800 text-2xl md:text-3xl text-white mb-3">
            Not Sure Which Therapy Your Child Needs?
          </h3>
          <p className="font-body text-white/85 text-base mb-6 max-w-xl mx-auto">
            Our expert team will conduct a comprehensive assessment and recommend
            the most suitable therapy plan for your child's unique needs.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 bg-white text-warm-600 hover:bg-warm-50 font-heading font-700 text-base px-8 py-3 rounded-2xl transition-colors shadow-warm"
          >
            Schedule a Free Assessment
          </button>
        </div>
      </div>

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
