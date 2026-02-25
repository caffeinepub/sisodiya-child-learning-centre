import { Mic, Hand, Activity, Brain, BookOpen, Zap, Star } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Speech Therapy',
    description:
      'Comprehensive assessment and treatment for speech, language, and communication disorders. We help children develop verbal and non-verbal communication skills.',
    color: 'text-warm-500',
    bg: 'bg-warm-100',
    border: 'border-warm-200',
    tag: 'Communication',
  },
  {
    icon: Hand,
    title: 'Occupational Therapy',
    description:
      'Improving fine motor skills, sensory processing, and daily living activities. We help children gain independence in school, home, and social environments.',
    color: 'text-sage-500',
    bg: 'bg-sage-100',
    border: 'border-sage-200',
    tag: 'Motor Skills',
  },
  {
    icon: Activity,
    title: 'Physiotherapy',
    description:
      'Targeted physical therapy to improve gross motor skills, balance, coordination, and mobility. Helping children move with confidence and ease.',
    color: 'text-golden-500',
    bg: 'bg-golden-100',
    border: 'border-golden-200',
    tag: 'Physical',
  },
  {
    icon: Brain,
    title: 'Behavioral Therapy',
    description:
      'Evidence-based behavioral interventions including ABA therapy to address challenging behaviors and build positive, adaptive skills in children.',
    color: 'text-warm-600',
    bg: 'bg-warm-50',
    border: 'border-warm-200',
    tag: 'Behavioral',
  },
  {
    icon: BookOpen,
    title: 'Special Education',
    description:
      'Individualized academic support and learning strategies tailored to each child\'s unique learning style, helping them achieve educational milestones.',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    tag: 'Education',
  },
  {
    icon: Zap,
    title: 'Sensory Integration',
    description:
      'Specialized therapy to help children process and respond to sensory information effectively, improving attention, behavior, and daily functioning.',
    color: 'text-golden-600',
    bg: 'bg-golden-50',
    border: 'border-golden-200',
    tag: 'Sensory',
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

                {/* Content */}
                <h3 className="font-heading font-800 text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
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
