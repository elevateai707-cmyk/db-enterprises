"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  Separator,
} from "@/components/ui/separator";
import { site } from "@/data/site";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-4">
              <span className="text-xl font-bold tracking-tight text-foreground leading-tight">
                DB <span className="text-brand-green">|</span> ENTERPRISES
              </span>
              <span className="text-xs text-accent-blue tracking-[0.2em] uppercase font-medium">
                {site.tagline}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              Dual Red Seal certified contractor serving Calgary and Alberta.
              Electrical, HVAC/R, EV chargers, heat pumps, and controls.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={site.socials.facebook || "#"}
                className="size-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label="Social Media"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
              </a>
              <a
                href={site.socials.instagram || "#"}
                className="size-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label="Social Media"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
              </a>
              <a
                href={site.socials.linkedin || "#"}
                className="size-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label="Social Media"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {site.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote CTA + Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Get Started
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="size-4 text-brand-green" />
                {site.phone}
              </a>
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-4 text-accent-blue" />
                  {site.email}
                </a>
              )}
            </div>
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-9 gap-1.5 px-2.5 bg-brand-green hover:bg-brand-green/80 text-white w-full"
            >
              {site.ctas.final}
              <ArrowRight className="size-4" />
            </Link>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Certified &amp; Proud
              </h4>
              <div className="flex flex-wrap gap-2">
                {site.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-background/50 text-xs text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-brand-green" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DB Enterprises. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
