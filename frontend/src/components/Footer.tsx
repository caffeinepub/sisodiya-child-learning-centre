import { MapPin, Heart } from 'lucide-react';
import SCLCLogo from './SCLCLogo';
import LogoDownloadButton from './LogoDownloadButton';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'sisodiya-child-learning-centre');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 flex-shrink-0">
                <SCLCLogo size={56} variant="white" />
              </div>
              <div>
                <p className="font-heading font-800 text-sm text-background leading-tight">
                  Sisodiya Child Learning Centre
                </p>
                <p className="font-heading text-xs text-background/60 italic">Ek Nayi Ummeed</p>
              </div>
            </div>
            <p className="font-body text-sm text-background/70 leading-relaxed mb-4">
              An integrated therapy center dedicated to nurturing the potential of 
              children with special needs through compassionate, evidence-based care.
            </p>
            {/* Logo Download Button */}
            <LogoDownloadButton />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-700 text-sm text-background mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services & Therapies', href: '#services' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading font-700 text-sm text-background mb-4 uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-warm-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body text-sm text-background/70">LG-382, Sector 5</p>
                <p className="font-body text-sm text-background/70">Gurugram, Haryana 122001</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-background/10">
              <p className="font-heading font-700 text-sm text-background">Director</p>
              <p className="font-body text-sm text-background/70">Prince Sisodiya</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-background/50">
            © {year} Sisodiya Child Learning Centre. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/50 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-warm-400 fill-warm-400 inline" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-400 hover:text-warm-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
