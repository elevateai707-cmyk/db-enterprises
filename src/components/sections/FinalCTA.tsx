"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="relative bg-surface overflow-hidden py-20 md:py-28">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/[0.03] via-transparent to-accent-blue/[0.03]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-green/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
          Whether it&apos;s a quick repair or a full installation, we&apos;re
          here to help.
        </p>
        <Link
          href="/quote"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-12 gap-1.5 px-8 bg-brand-green hover:bg-brand-green/80 text-white text-base"
        >
          {site.ctas.final}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
