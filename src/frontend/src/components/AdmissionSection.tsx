import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ClipboardList, Phone } from "lucide-react";
import { useState } from "react";

interface AdmissionForm {
  childName: string;
  childAge: string;
  condition: string;
  parentName: string;
  phone: string;
  email: string;
  sessionType: string;
  timing: string;
}

const initialForm: AdmissionForm = {
  childName: "",
  childAge: "",
  condition: "",
  parentName: "",
  phone: "",
  email: "",
  sessionType: "",
  timing: "",
};

export default function AdmissionSection() {
  const [form, setForm] = useState<AdmissionForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (name: keyof AdmissionForm, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.childName.trim() ||
      !form.childAge.trim() ||
      !form.parentName.trim() ||
      !form.phone.trim()
    )
      return;
    setSubmitted(true);
  };

  return (
    <section id="admission" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-200 rounded-full px-4 py-1.5 mb-4">
            <ClipboardList className="w-3.5 h-3.5 text-warm-500" />
            <span className="font-heading font-700 text-sm text-warm-600">
              Admission Enquiry
            </span>
          </div>
          <h2 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Start Your Child's{" "}
            <span className="text-primary">Journey Today</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill in the details below and our team will contact you within 24
            hours to discuss your child's personalised therapy plan.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-warm-50 rounded-4xl p-7 md:p-10 border border-warm-100 shadow-card">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mb-5">
                <CheckCircle className="w-10 h-10 text-sage-500" />
              </div>
              <h3 className="font-heading font-800 text-2xl text-foreground mb-3">
                Enquiry Received! 🌟
              </h3>
              <p className="font-body text-base text-muted-foreground mb-6 max-w-md">
                Thank you! We've received your enquiry. Our team will call you
                within 24 hours to discuss your child's needs.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
                variant="outline"
                className="border-warm-300 text-warm-700 hover:bg-warm-100 rounded-xl font-heading font-700"
              >
                Submit Another Enquiry
              </Button>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-800 text-xl text-foreground mb-7">
                Child & Parent Details
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Child's Full Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="childName"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Child's Full Name <span className="text-warm-500">*</span>
                    </Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="Enter child's full name"
                      required
                      className="rounded-xl border-warm-200 bg-card focus:border-primary font-body"
                    />
                  </div>

                  {/* Child's Age */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="childAge"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Child's Age <span className="text-warm-500">*</span>
                    </Label>
                    <Select
                      value={form.childAge}
                      onValueChange={(v) => handleSelect("childAge", v)}
                      required
                    >
                      <SelectTrigger
                        id="childAge"
                        className="rounded-xl border-warm-200 bg-card font-body"
                      >
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 18 }, (_, i) => i + 1).map(
                          (age) => (
                            <SelectItem key={age} value={String(age)}>
                              {age} {age === 1 ? "year" : "years"}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Condition */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="condition"
                    className="font-heading font-600 text-sm text-foreground"
                  >
                    Special Needs / Condition
                  </Label>
                  <Textarea
                    id="condition"
                    name="condition"
                    value={form.condition}
                    onChange={handleChange}
                    placeholder="Describe your child's condition or area of concern (e.g. speech delay, autism, learning difficulty)"
                    rows={3}
                    className="rounded-xl border-warm-200 bg-card focus:border-primary font-body resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="parentName"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Parent / Guardian Name{" "}
                      <span className="text-warm-500">*</span>
                    </Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="rounded-xl border-warm-200 bg-card focus:border-primary font-body"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Phone Number <span className="text-warm-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your mobile number"
                      required
                      className="rounded-xl border-warm-200 bg-card focus:border-primary font-body"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="font-heading font-600 text-sm text-foreground"
                  >
                    Email Address{" "}
                    <span className="font-body font-400 text-muted-foreground text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="rounded-xl border-warm-200 bg-card focus:border-primary font-body"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Session Type */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="sessionType"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Preferred Session Type
                    </Label>
                    <Select
                      value={form.sessionType}
                      onValueChange={(v) => handleSelect("sessionType", v)}
                    >
                      <SelectTrigger
                        id="sessionType"
                        className="rounded-xl border-warm-200 bg-card font-body"
                      >
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-centre">
                          In-Centre Session
                        </SelectItem>
                        <SelectItem value="home">Home Session</SelectItem>
                        <SelectItem value="online">Online Session</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Timing */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="timing"
                      className="font-heading font-600 text-sm text-foreground"
                    >
                      Preferred Timing
                    </Label>
                    <Select
                      value={form.timing}
                      onValueChange={(v) => handleSelect("timing", v)}
                    >
                      <SelectTrigger
                        id="timing"
                        className="rounded-xl border-warm-200 bg-card font-body"
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Morning 9AM–12PM
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Afternoon 12PM–3PM
                        </SelectItem>
                        <SelectItem value="evening">Evening 3PM–6PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-warm-600 text-white font-heading font-700 text-base py-3 rounded-xl shadow-warm transition-colors mt-2"
                >
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </Button>

                {/* Direct contact note */}
                <div className="flex items-center gap-2 justify-center pt-1">
                  <Phone className="w-4 h-4 text-warm-400 flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground text-center">
                    Or contact us directly:{" "}
                    <a
                      href="tel:6376544185"
                      className="text-primary font-600 hover:text-warm-600 transition-colors"
                    >
                      📞 6376544185
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://wa.me/919784986081"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-600 hover:text-warm-600 transition-colors"
                    >
                      💬 WhatsApp: 9784986081
                    </a>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
