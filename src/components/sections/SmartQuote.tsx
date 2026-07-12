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
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  service: z.string().min(1, "Please select a service"),
  city: z.string().optional(),
  message: z.string().min(1, "Description is required"),
}).refine(
  (data) => data.phone || data.email,
  { message: "Phone or email is required", path: ["phone"] }
);

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function SmartQuote() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = quoteSchema.safeParse(formData);
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

  const updateField = (field: keyof QuoteFormData, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value ?? "" }));
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
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-md mx-auto">
            <div className="size-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="size-7 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Quote Request Received
            </h3>
            <p className="text-muted-foreground text-sm">
              Thanks, {formData.name}! We&apos;ll review your request and get
              back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const workflowSteps = [
    { number: "01", label: "Lead Received" },
    { number: "02", label: "Smart Routing" },
    { number: "03", label: "Rapid Response" },
    { number: "04", label: "Qualified & Quoted" },
    { number: "05", label: "Scheduled" },
  ];

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Quote Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Get a Quote in Minutes
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your project and we&apos;ll get back to you with a
              clear, detailed estimate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="sq-name" className="text-foreground">Full Name *</Label>
                <Input
                  id="sq-name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name"
                  className="bg-background/50 border-border mt-1"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="sq-phone" className="text-foreground">Phone</Label>
                  <Input
                    id="sq-phone"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="(xxx) xxx-xxxx"
                    className="bg-background/50 border-border mt-1"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="sq-email" className="text-foreground">Email</Label>
                  <Input
                    id="sq-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="bg-background/50 border-border mt-1"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                </div>

                <div>
                  <Label htmlFor="sq-city" className="text-foreground">City</Label>
                  <Input
                    id="sq-city"
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Calgary, Airdrie, ..."
                    className="bg-background/50 border-border mt-1"
                  />
                  {errors.city && (
                    <p className="text-xs text-destructive mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                <Label htmlFor="sq-service" className="text-foreground">Service Needed *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(val) => updateField("service", val)}
                >
                  <SelectTrigger
                    id="sq-service"
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
                  <p className="text-xs text-destructive mt-1">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="sq-message" className="text-foreground">Project Description *</Label>
                <Textarea
                  id="sq-message"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Briefly describe what you need..."
                  className="bg-background/50 border-border mt-1 min-h-[80px]"
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {errors.form && (
                <p className="text-xs text-destructive">{errors.form}</p>
              )}

              <Button
                type="submit"
                disabled={submitting}
                variant="default"
                className="bg-brand-green hover:bg-brand-green/80 text-white w-full h-10"
              >
                {submitting ? "Submitting..." : "Get My Quote"}
                <ArrowRight className="size-4" />
              </Button>

              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="size-3" />
                Your info is secure and never shared.
              </p>
            </form>
          </div>

          {/* Right — Workflow Timeline */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Our Contractor Workflow
            </h3>

            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />

              {workflowSteps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-4 pb-6 last:pb-0">
                  <div className="relative z-10 size-10 shrink-0 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-green">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <p className="text-sm font-medium text-foreground">
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-auto pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {site.stats.map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-background/50 border border-border">
                    <span className="block text-xs text-muted-foreground mb-0.5">
                      {stat.label}
                    </span>
                    <span className="block text-sm font-semibold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
