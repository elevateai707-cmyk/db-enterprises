import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Zap,
  Snowflake,
  Thermometer,
  Wind,
  Cpu,
  Search,
  Gauge,
  ArrowRight,
} from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "All Services | DB Enterprises",
  description:
    "Explore our full range of electrical, HVAC/R, EV charger, heat pump, refrigeration, and controls services for Calgary and Alberta.",
};

const iconMap: Record<string, React.ElementType> = {
  Car,
  Zap,
  Snowflake,
  Thermometer,
  Wind,
  Cpu,
  Search,
  Gauge,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
            What We Do
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            All Services
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-3">
            From EV chargers to commercial refrigeration, every service is backed
            by dual Red Seal certification.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {site.services.map((service) => {
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
                <h2 className="text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h2>
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
    </div>
  );
}
