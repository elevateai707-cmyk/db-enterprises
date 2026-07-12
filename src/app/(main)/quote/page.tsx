"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Upload,
} from "lucide-react";
import { site } from "@/data/site";

const quoteSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().optional(),
  phone: z.string().optional(),
  city: z.string().min(1, "City is required"),
  service: z.string().min(1, "Service selection is required"),
  propertyType: z.string().min(1, "Property type is required"),
  urgency: z.string().min(1, "Urgency is required"),
  description: z.string().min(1, "Description is required"),
  contactPreference: z.string().optional(),
  bestTime: z.string().optional(),
  photos: z.string().optional(),
  consent: z.literal(true, { error: "You must agree to proceed" }),
}).refine(
  (data) => data.phone || data.email,
  { message: "Phone or email is required", path: ["phone"] }
);

type QuoteFormData = z.infer<typeof quoteSchema>;

const propertyTypes = ["Residential", "Commercial", "Industrial", "Other"];
const urgencyLevels = ["Emergency", "This week", "This month", "Planning ahead"];
const contactPrefs = ["Phone", "Email", "Text"];
const bestTimes = ["Morning (8am–12pm)", "Afternoon (12pm–5pm)", "Evening (5pm–8pm)", "Flexible"];

export default function QuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    propertyType: "",
    urgency: "",
    description: "",
    contactPreference: "",
    bestTime: "",
    photos: "",
    consent: false as unknown as true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const dataWithConsent = { ...formData, consent: formData.consent === true };
    const result = quoteSchema.safeParse(dataWithConsent);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const updateField = (field: string, value: string | boolean | null) => {
    const v = value ?? "";
    setFormData((prev) => ({ ...prev, [field]: v }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 md:pt-28 pb-16 md:pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="size-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="size-8 text-brand-green" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Quote Request Received
          </h1>
          <p className="text-sm text-muted-foreground mb-2">
            Thanks, {formData.name}! We&apos;ve received your request and will
            be in touch shortly.
          </p>
          <p className="text-xs text-muted-foreground">
            Reference your details: {formData.service?.replace(/-/g, " ")} &mdash;{" "}
            {formData.city}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
              Get a Quote
            </h1>
            <p className="text-sm text-muted-foreground">
              Tell us about your project and we&apos;ll prepare a detailed estimate.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="q-name" className="text-foreground">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="q-name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your full name"
                className="bg-background/50 border-border mt-1"
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="q-email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="q-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                  className="bg-background/50 border-border mt-1"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="q-phone" className="text-foreground">
                  Phone
                </Label>
                <Input
                  id="q-phone"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="(xxx) xxx-xxxx"
                  className="bg-background/50 border-border mt-1"
                />
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* City */}
            <div>
              <Label htmlFor="q-city" className="text-foreground">
                City / Area <span className="text-destructive">*</span>
              </Label>
              <Input
                id="q-city"
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
                placeholder="Calgary"
                className="bg-background/50 border-border mt-1"
              />
              {errors.city && (
                <p className="text-xs text-destructive mt-1">{errors.city}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <Label htmlFor="q-service" className="text-foreground">
                Service Needed <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.service}
                onValueChange={(val) => updateField("service", val)}
              >
                <SelectTrigger
                  id="q-service"
                  className="w-full bg-background/50 border-border mt-1"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {site.services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-xs text-destructive mt-1">{errors.service}</p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <Label htmlFor="q-property" className="text-foreground">
                Property Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.propertyType}
                onValueChange={(val) => updateField("propertyType", val)}
              >
                <SelectTrigger
                  id="q-property"
                  className="w-full bg-background/50 border-border mt-1"
                >
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((t) => (
                    <SelectItem key={t} value={t.toLowerCase()}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.propertyType && (
                <p className="text-xs text-destructive mt-1">
                  {errors.propertyType}
                </p>
              )}
            </div>

            {/* Urgency */}
            <div>
              <Label htmlFor="q-urgency" className="text-foreground">
                Urgency <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.urgency}
                onValueChange={(val) => updateField("urgency", val)}
              >
                <SelectTrigger
                  id="q-urgency"
                  className="w-full bg-background/50 border-border mt-1"
                >
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((u) => (
                    <SelectItem key={u} value={u.toLowerCase().replace(/\s+/g, "-")}>
                      {u}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.urgency && (
                <p className="text-xs text-destructive mt-1">{errors.urgency}</p>
              )}
            </div>

            {/* Contact Preference */}
            <div>
              <Label htmlFor="q-contact-pref" className="text-foreground">
                Preferred Contact Method
              </Label>
              <Select
                value={formData.contactPreference || ""}
                onValueChange={(val) => updateField("contactPreference", val)}
              >
                <SelectTrigger
                  id="q-contact-pref"
                  className="w-full bg-background/50 border-border mt-1"
                >
                  <SelectValue placeholder="How should we reach you?" />
                </SelectTrigger>
                <SelectContent>
                  {contactPrefs.map((p) => (
                    <SelectItem key={p} value={p.toLowerCase()}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Best Time */}
            <div>
              <Label htmlFor="q-best-time" className="text-foreground">
                Best Time to Contact
              </Label>
              <Select
                value={formData.bestTime || ""}
                onValueChange={(val) => updateField("bestTime", val)}
              >
                <SelectTrigger
                  id="q-best-time"
                  className="w-full bg-background/50 border-border mt-1"
                >
                  <SelectValue placeholder="Select a time window" />
                </SelectTrigger>
                <SelectContent>
                  {bestTimes.map((t) => (
                    <SelectItem key={t} value={t.toLowerCase().replace(/\s+/g, "-")}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="q-desc" className="text-foreground">
                Project Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="q-desc"
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Describe your project in detail..."
                className="bg-background/50 border-border mt-1 min-h-[100px]"
              />
              {errors.description && (
                <p className="text-xs text-destructive mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Photo Upload Placeholder */}
            <div>
              <Label className="text-foreground">Photos (coming soon)</Label>
              <div className="mt-1 flex items-center gap-3 rounded-lg border border-border bg-background/50 p-4">
                <Upload className="size-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Photo upload will be available soon. For now, describe what
                  you&apos;d like to show us.
                </span>
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="q-consent"
                checked={formData.consent === true}
                onChange={(e) => updateField("consent", e.target.checked)}
                className="mt-1 size-4 rounded border-border bg-background accent-brand-green"
              />
              <Label htmlFor="q-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I consent to DB Enterprises contacting me about my request. My
                information will not be shared with third parties.{" "}
                <span className="text-destructive">*</span>
              </Label>
            </div>
            {errors.consent && (
              <p className="text-xs text-destructive">{errors.consent}</p>
            )}

            {errors.form && (
              <p className="text-xs text-destructive">{errors.form}</p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              variant="default"
              className="bg-brand-green hover:bg-brand-green/80 text-white w-full h-11"
            >
              {submitting ? "Submitting..." : site.ctas.primary}
              <ArrowRight className="size-4" />
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="size-3" />
              Your info is secure and never shared.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
