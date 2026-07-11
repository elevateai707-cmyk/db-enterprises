"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Timer, MapPin } from "lucide-react";
import { site } from "@/data/site";

const trustIconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  Timer,
  MapPin,
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17] via-[#0E1420] to-[#0B0F17]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(69,163,90,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(43,168,255,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-accent-amber">Heat.</span>{" "}
              <span className="text-foreground">Power.</span>{" "}
              <span className="text-accent-blue">Air.</span>{" "}
              <span className="text-brand-green">Controls.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
              {site.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/quote"
                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-11 gap-1.5 px-6 bg-brand-green hover:bg-brand-green/80 text-white"
              >
                {site.ctas.primary}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="/services"
                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-11 gap-1.5 px-6 bg-background hover:bg-muted text-foreground"
              >
                {site.ctas.secondary}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 pt-6 border-t border-border/50">
              {site.trustChips.map((chip) => {
                const Icon = trustIconMap[chip.icon] || Shield;
                return (
                  <div key={chip.label} className="flex items-center gap-2">
                    <Icon className="size-4 text-brand-green shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {chip.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Energy/Turbine Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
                style={{ animationDirection: "reverse" }}
              >
                <defs>
                  <linearGradient id="arc-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5A623" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F5A623" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="arc-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2BA8FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2BA8FF" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="arc-green" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#45A35A" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#45A35A" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Concentric circle outlines */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
                {/* Gradient arc segments — amber */}
                <path
                  d="M 200 20 A 180 180 0 0 1 380 200"
                  fill="none"
                  stroke="url(#arc-amber)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 200 60 A 140 140 0 0 1 340 200"
                  fill="none"
                  stroke="url(#arc-amber)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Blue arcs */}
                <path
                  d="M 380 200 A 180 180 0 0 1 200 380"
                  fill="none"
                  stroke="url(#arc-blue)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 340 200 A 140 140 0 0 1 200 340"
                  fill="none"
                  stroke="url(#arc-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Green arcs */}
                <path
                  d="M 200 380 A 180 180 0 0 1 20 200"
                  fill="none"
                  stroke="url(#arc-green)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 200 340 A 140 140 0 0 1 60 200"
                  fill="none"
                  stroke="url(#arc-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner rotating ring (opposite direction) */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]"
              >
                {/* Dash ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="rgba(69,163,90,0.15)"
                  strokeWidth="1"
                  strokeDasharray="8 12"
                />
              </svg>

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-24 sm:size-28 md:size-32 rounded-full bg-gradient-to-br from-surface to-[#0E1420] border border-border flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <span className="block text-lg sm:text-xl font-bold text-foreground leading-tight">
                      DB
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-accent-blue tracking-[0.15em] uppercase">
                      ENTERPRISES
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbital dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute size-2 rounded-full bg-accent-amber shadow-[0_0_8px_rgba(245,166,35,0.6)]"
                  style={{
                    top: "calc(50% - 4px)",
                    left: "calc(50% - 4px)",
                    transform: "translateY(-90px)",
                    animation: "orbit 8s linear infinite",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
