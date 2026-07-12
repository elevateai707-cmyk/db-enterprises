import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | DB Enterprises",
  description:
    "Get in touch with DB Enterprises for electrical, HVAC/R, EV charger, and controls services in Calgary and Alberta.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
              Contact Us
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Have a question or ready to start a project? Reach out by phone or
              use our quote form for a detailed estimate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="size-11 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                <Phone className="size-5 text-brand-green" />
              </div>
              <h2 className="text-sm font-semibold text-foreground mb-1">
                Phone
              </h2>
              <a
                href={`tel:${site.phone}`}
                className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors"
              >
                {site.phone}
              </a>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="size-11 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                <Mail className="size-5 text-accent-blue" />
              </div>
              <h2 className="text-sm font-semibold text-foreground mb-1">
                Email
              </h2>
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors"
                >
                  {site.email}
                </a>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Coming soon — call us for now
                </span>
              )}
            </div>
          </div>

          {/* Service Area Reference */}
          <div className="rounded-xl border border-border bg-surface p-6 mb-10">
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-brand-green shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-foreground mb-2">
                  Service Area
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We serve Calgary and surrounding areas including Airdrie,
                  Cochrane, Chestermere, Okotoks, Red Deer, Rocky View County,
                  and more. Service availability depends on scope, scheduling,
                  and location.
                </p>
                <Link
                  href="/service-areas"
                  className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors font-medium"
                >
                  View full service area &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-11 gap-1.5 px-6 bg-brand-green hover:bg-brand-green/80 text-white"
            >
              {site.ctas.primary}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
