"use client";

import { Shield, Award, Timer, MapPin } from "lucide-react";
import { site } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  Timer,
  MapPin,
};

export default function TrustBar() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {site.trustChips.map((chip) => {
            const Icon = iconMap[chip.icon] || Shield;
            return (
              <div
                key={chip.label}
                className="flex items-center gap-3 px-3 py-2.5"
              >
                <div className="size-9 shrink-0 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <Icon className="size-4 text-brand-green" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {chip.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
