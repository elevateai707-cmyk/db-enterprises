"use client";

import { Award, ShieldCheck, Users, Clock, Leaf } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Red Seal Expertise",
    description:
      "Dual Red Seal certified in Electrical (309A) and Refrigeration & A/C (313A) — a rare combination that means fewer subcontractors and better integration.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description:
      "We use industry-leading equipment and materials from trusted manufacturers. No shortcuts, no off-brands.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Clear communication, upfront pricing, and a commitment to doing the job right the first time.",
  },
  {
    icon: Clock,
    title: "On Time, On Budget",
    description:
      "We respect your schedule and your budget. Projects are completed on time with no surprise charges.",
  },
  {
    icon: Leaf,
    title: "Energy Smart",
    description:
      "We help clients reduce energy costs through efficient equipment selection, controls, and smart system design.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
            Experience. Integrity. Results.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Why Choose DB Enterprises
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent-blue/20 hover:shadow-[0_0_20px_rgba(43,168,255,0.06)]"
              >
                <div className="size-11 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-accent-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
