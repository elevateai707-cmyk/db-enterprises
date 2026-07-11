"use client";

import Link from "next/link";
import {
  Car,
  Zap,
  Snowflake,
  Thermometer,
  Wind,
  Cpu,
  Search,
  ArrowRight,
} from "lucide-react";
import { site } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Zap,
  Snowflake,
  Thermometer,
  Wind,
  Cpu,
  Search,
};

export default function CoreServices() {
  const featured = site.services.filter((s) => s.featured);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
            Built for comfort. Designed for performance.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Our Core Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_0_20px_rgba(69,163,90,0.08)]"
              >
                <div className="size-11 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                  <Icon className="size-5 text-brand-green" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
