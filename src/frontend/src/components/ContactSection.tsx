import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitInquiry } from '@/hooks/useQueries';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const initialForm: FormData = { name: '', phone: '', message: '' };

const CENTRE_EMAIL = 'sisodiyachildlearningcentre@gmail.com';

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitInquiry, isPending, isError, error } = useSubmitInquiry();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;

    submitInquiry(
      { name: form.name, phone: form.phone, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      }
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-200 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-warm-500" />
            <span className="font-heading font-700 text-sm text-warm-600">Contact Us</span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Get in{' '}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for appointments,
            inquiries, or to learn more about how we can support your child.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div>
            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Address */}
              <div className="bg-warm-50 rounded-3xl p-5 border border-warm-100">
                <div className="w-10 h-10 rounded-xl bg-warm-100 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-warm-500" />
                </div>
                <p className="font-heading font-700 text-sm text-foreground mb-1">Our Address</p>
                <p className="font-body text-sm text-muted-foreground">Sector 5</p>
                <p className="font-body text-sm text-muted-foreground">Gurugram, Haryana – 122001</p>
              </div>

              {/* Working Hours */}
              <div className="bg-warm-50 rounded-3xl p-5 border border-warm-100">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-sage-500" />
                </div>
                <p className="font-heading font-700 text-sm text-foreground mb-1">Working Hours</p>
                <p className="font-body text-sm text-muted-foreground">Monday – Saturday</p>
                <p className="font-body text-sm text-muted-foreground">9:00 AM – 6:00 PM</p>
                <p className="font-body text-xs text-warm-500 font-600 mt-1">Closed on Sundays</p>
              </div>

              {/* Phone */}
              <div className="bg-warm-50 rounded-3xl p-5 border border-warm-100">
                <div className="w-10 h-10 rounded-xl bg-warm-50 flex items-center justify-center mb-3 border border-warm-200">
                  <Phone className="w-5 h-5 text-warm-600" />
                </div>
                <p className="font-heading font-700 text-sm text-foreground mb-1">Call Us</p>
                <a
                  href="tel:6376544185"
                  className="font-body text-sm text-primary hover:text-warm-600 transition-colors font-600"
                >
                  6376544185
                </a>
                <p className="font-body text-xs text-muted-foreground mt-0.5">For appointments & inquiries</p>
              </div>

              {/* Email */}
              <div className="bg-warm-50 rounded-3xl p-5 border border-warm-100">
                <div className="w-10 h-10 rounded-xl bg-golden-100 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-golden-500" />
                </div>
                <p className="font-heading font-700 text-sm text-foreground mb-1">Email Us</p>
                <a
                  href={`mailto:${CENTRE_EMAIL}`}
                  className="font-body text-sm text-primary hover:text-warm-600 transition-colors font-600 break-all"
                >
                  {CENTRE_EMAIL}
                </a>
                <p className="font-body text-xs text-muted-foreground mt-0.5">We respond within 24 hours</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919784986081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full bg-[#25D366] hover:bg-[#1ebe5d] transition-colors rounded-3xl p-5 mb-6 shadow-md group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-heading font-800 text-base text-white">Chat on WhatsApp</p>
                <p className="font-body text-sm text-white/85">Business: 9784986081 — Quick replies!</p>
              </div>
              <div className="ml-auto">
                <span className="font-heading font-700 text-xs text-white/80 bg-white/20 px-3 py-1 rounded-full">
                  Chat Now →
                </span>
              </div>
            </a>

            {/* Map placeholder / Address highlight */}
            <div className="bg-gradient-to-br from-warm-500 to-warm-600 rounded-4xl p-7 text-white shadow-warm-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-800 text-lg text-white mb-1">Visit Us</p>
                  <p className="font-heading font-700 text-base text-white/90">
                    Sisodiya Child Learning Centre
                  </p>
                  <p className="font-body text-sm text-white/80 mt-1">Sector 5</p>
                  <p className="font-body text-sm text-white/80">Gurugram, Haryana – 122001</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="font-body text-xs text-white/70">
                      Monday to Saturday: 9 AM – 6 PM &nbsp;|&nbsp; Closed on Sundays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-warm-50 rounded-4xl p-7 md:p-8 border border-warm-100 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-sage-500" />
                </div>
                <h3 className="font-heading font-800 text-2xl text-foreground mb-2">
                  Thank You! 🌟
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6 max-w-sm">
                  Your inquiry has been received. Our team will get back to you
                  within 24 hours. We look forward to supporting your child's journey!
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-warm-300 text-warm-700 hover:bg-warm-100 rounded-xl font-heading font-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-800 text-xl text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="font-heading font-600 text-sm text-foreground">
                        Full Name <span className="text-warm-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="rounded-xl border-warm-200 bg-card focus:border-primary focus:ring-primary/20 font-body"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="font-heading font-600 text-sm text-foreground">
                        Phone Number <span className="text-warm-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="rounded-xl border-warm-200 bg-card focus:border-primary focus:ring-primary/20 font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="font-heading font-600 text-sm text-foreground">
                      Message <span className="text-warm-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your child's needs or ask any questions..."
                      required
                      rows={5}
                      className="rounded-xl border-warm-200 bg-card focus:border-primary focus:ring-primary/20 font-body resize-none"
                    />
                  </div>

                  {isError && (
                    <div className="flex items-center gap-2 text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="font-body text-sm">
                        {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-warm-600 text-white font-heading font-700 text-base py-3 rounded-xl transition-colors shadow-warm"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Or email us directly at{' '}
                    <a
                      href={`mailto:${CENTRE_EMAIL}`}
                      className="text-primary hover:text-warm-600 transition-colors font-600"
                    >
                      {CENTRE_EMAIL}
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
