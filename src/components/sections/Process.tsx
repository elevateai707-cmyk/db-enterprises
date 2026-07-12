"use client";

import { site } from "@/data/site";

export default function Process() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Simple. Transparent. Reliable.
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            From your first call to project completion, here&apos;s how we work.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-center gap-0 max-w-5xl mx-auto">
          {site.processSteps.map((step, idx) => (
            <div key={step.title} className="flex-1 relative text-center px-3">
              {/* Connecting line */}
              {idx < site.processSteps.length - 1 && (
                <div className="absolute top-5 left-[60%] right-0 h-px bg-border" />
              )}
              {/* Number circle */}
              <div className="relative z-10 size-10 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold text-white">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[160px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden max-w-md mx-auto">
          {site.processSteps.map((step, idx) => (
            <div key={step.title} className="flex items-start gap-4 pb-6 last:pb-0">
              <div className="relative flex flex-col items-center">
                <div className="relative z-10 size-10 shrink-0 rounded-full bg-brand-green flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                </div>
                {idx < site.processSteps.length - 1 && (
                  <div className="flex-1 w-px bg-border mt-1" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
