import sclcLogo from "@/assets/sclc-logo.png";
import {
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import LogoDownloadButton from "./LogoDownloadButton";

const CENTRE_EMAIL = "sisodiyachildlearningcentre@gmail.com";
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/Sisodiya+Child+Learning+Centre+LG-382+Sector+5+Gurugram+Haryana+122001";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    window.location.hostname || "sisodiya-child-learning-centre",
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl p-1">
                <img
                  src={sclcLogo}
                  alt="Sisodiya Child Learning Centre Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-heading font-800 text-sm text-background leading-tight">
                  Sisodiya Child Learning Centre
                </p>
                <p className="font-heading text-xs text-background/60 italic">
                  Ek Nayi Ummeed
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-background/70 leading-relaxed mb-4">
              An integrated therapy centre dedicated to nurturing the potential
              of children with special needs through compassionate,
              evidence-based care.
            </p>
            <LogoDownloadButton />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-700 text-sm text-background mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Services & Therapies", href: "#services" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Google Business Link */}
            <div className="mt-5 pt-4 border-t border-background/10">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-3 py-2.5 transition-all duration-200 group"
                data-ocid="footer.link"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white flex-shrink-0">
                  <span
                    className="font-heading font-900 text-xs leading-none"
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
                <div>
                  <p className="font-heading font-700 text-xs text-background">
                    Find us on Google Business
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-2.5 h-2.5 text-golden-400 fill-golden-400"
                      />
                    ))}
                    <span className="font-body text-xs text-background/60 ml-0.5">
                      4.9
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-background/50 group-hover:text-background transition-colors ml-auto" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-700 text-sm text-background mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-warm-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body text-sm text-background/70">
                  LG-382, Sector 5
                </p>
                <p className="font-body text-sm text-background/70">
                  Gurugram, Haryana – 122001
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-warm-400 flex-shrink-0" />
              <a
                href="tel:6376544185"
                className="font-body text-sm text-background/70 hover:text-background transition-colors"
              >
                6376544185
              </a>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <a
                href="https://wa.me/919784986081"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-background/70 hover:text-background transition-colors"
              >
                WhatsApp: 9784986081
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-golden-400 flex-shrink-0" />
              <a
                href={`mailto:${CENTRE_EMAIL}`}
                className="font-body text-sm text-background/70 hover:text-background transition-colors break-all"
              >
                {CENTRE_EMAIL}
              </a>
            </div>
            <div className="pt-3 border-t border-background/10">
              <p className="font-heading font-700 text-sm text-background">
                Director
              </p>
              <p className="font-body text-sm text-background/70">
                Prince Sisodiya
              </p>
              <p className="font-body text-xs text-background/50 mt-1">
                Mon–Sat: 9 AM – 6 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-background/50">
            © {year} Sisodiya Child Learning Centre. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/50 flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-warm-400 fill-warm-400 inline" />{" "}
            using{" "}
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
