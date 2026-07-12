import type { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About | DB Enterprises",
  description:
    "Dual Red Seal certified contractor serving Calgary and Alberta. Electrical, HVAC/R, refrigeration, and controls.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Built for Alberta. <br />
              <span className="text-brand-green">Red Seal Certified.</span>
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              DB Enterprises is a dual Red Seal certified contractor based in
              Calgary, serving residential, commercial, and industrial clients
              across Alberta. We bring together electrical, HVAC/R, and controls
              expertise under one roof.
            </p>
          </div>

          {/* Certification Highlights */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="size-11 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                <Award className="size-5 text-brand-green" />
              </div>
              <h2 className="text-base font-semibold text-foreground mb-2">
                Red Seal Electrical (309A)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our lead electrician holds the Red Seal endorsement in the
                Electrical trade (309A), meeting the highest national standard
                for electrical work in Canada.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="size-11 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                <ShieldCheck className="size-5 text-brand-green" />
              </div>
              <h2 className="text-base font-semibold text-foreground mb-2">
                Red Seal Refrigeration &amp; A/C (313A)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our HVAC/R lead is Red Seal certified in Refrigeration &amp; Air
                Conditioning (313A), covering refrigeration, AC, and heat pump
                 systems.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Why Dual Red Seal Matters
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Most contractors specialize in either electrical or HVAC/R work —
              rarely both. That means when your project involves integrated
              systems (like a heat pump that needs both refrigeration and
              electrical work), you end up coordinating multiple contractors,
              multiple schedules, and multiple invoices.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              DB Enterprises is different. Our lead technician holds Red Seal
              certification in both Electrical (309A) and Refrigeration &amp; Air
              Conditioning (313A). That means one point of contact, one
              consistent standard of quality, and seamless integration across
              every system we touch.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              We serve Calgary and surrounding areas including Airdrie, Cochrane,
              Chestermere, Okotoks, Red Deer, and Rocky View County. Every job
              — whether it&apos;s an EV charger install, a commercial refrigeration
              system, or a full HVAC retrofit — gets the same attention to
              detail and code compliance.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-9 gap-1.5 px-4 bg-brand-green hover:bg-brand-green/80 text-white"
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
