import { ArrowDown, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SCLCLogo from './SCLCLogo';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-warm-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sage-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-golden-200/20 blur-3xl pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-[8%] animate-float" style={{ animationDelay: '0s' }}>
        <Star className="w-6 h-6 text-golden-400 fill-golden-300" />
      </div>
      <div className="absolute top-48 right-[12%] animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-5 h-5 text-warm-400" />
      </div>
      <div className="absolute bottom-40 right-[8%] animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-4 h-4 text-sage-400 fill-sage-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Official SVG Logo — prominently displayed */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                {/* Glow ring behind logo */}
                <div className="absolute inset-0 rounded-full bg-warm-300/30 blur-xl scale-110 pointer-events-none" />
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 drop-shadow-xl">
                  <SCLCLogo size={160} />
                </div>
              </div>
            </div>

            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-warm-500 animate-pulse" />
              <span className="font-heading font-700 text-sm text-warm-600 tracking-wide">
                ✨ Ek Nayi Ummeed — A New Hope
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-heading font-900 text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
              Sisodiya{' '}
              <span className="text-primary">Child</span>{' '}
              <br className="hidden sm:block" />
              Learning Centre
            </h1>

            {/* Subtitle */}
            <p className="font-heading font-600 text-lg sm:text-xl text-warm-600 mb-6">
              An Integrated Therapy Centre for Children with Special Needs
            </p>

            {/* Welcome / Mission statement */}
            <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              At Sisodiya Child Learning Centre, we believe every child is special and full of potential.
              Our goal is to provide professional therapies in a caring and supportive environment so that
              every child can grow with confidence and independence.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We provide personalized therapy programs for children with developmental delays, autism,
              speech delay, learning difficulties, and behavioral challenges.
            </p>

            {/* Director */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <div className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center">
                <span className="font-heading font-800 text-warm-700 text-sm">PS</span>
              </div>
              <div>
                <p className="font-heading font-700 text-sm text-foreground">Prince Sisodiya</p>
                <p className="font-body text-xs text-muted-foreground">Director, Sisodiya Child Learning Centre</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                onClick={() => handleScroll('#contact')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-warm-600 rounded-2xl font-heading font-700 text-base shadow-warm-lg px-8"
              >
                Book a Consultation
              </Button>
              <Button
                onClick={() => handleScroll('#services')}
                variant="outline"
                size="lg"
                className="border-warm-300 text-warm-700 hover:bg-warm-100 rounded-2xl font-heading font-700 text-base px-8"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-4xl bg-gradient-to-br from-warm-200/60 to-sage-100/60 blur-xl" />
              <div className="relative rounded-4xl overflow-hidden shadow-warm-lg border-4 border-warm-100">
                <img
                  src="/assets/generated/hero-banner.dim_1200x400.png"
                  alt="Children learning and growing at Sisodiya Child Learning Centre"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌟</span>
                    </div>
                    <div>
                      <p className="font-heading font-700 text-sm text-foreground">Holistic Development</p>
                      <p className="font-body text-xs text-muted-foreground">Nurturing every child's unique potential</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats floating cards */}
              <div className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-card p-3 border border-border">
                <p className="font-heading font-800 text-2xl text-primary">6+</p>
                <p className="font-body text-xs text-muted-foreground">Therapy Types</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-card p-3 border border-border">
                <p className="font-heading font-800 text-2xl text-sage-500">100%</p>
                <p className="font-body text-xs text-muted-foreground">Child-Centered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="font-body text-xs">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
