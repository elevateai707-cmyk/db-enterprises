import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas | DB Enterprises",
  description:
    "Serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, Red Deer, Rocky View County, and surrounding areas.",
};

export default function ServiceAreasPage() {
  const midpoint = Math.ceil(site.serviceAreas.length / 2);
  const leftCities = site.serviceAreas.slice(0, midpoint);
  const rightCities = site.serviceAreas.slice(midpoint);

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
            Where We Serve
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Service Areas
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            DB Enterprises provides service across Calgary and Alberta. Contact
            us to confirm availability for your location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Map Card */}
          <div className="aspect-[4/3] rounded-xl border border-border bg-surface overflow-hidden relative">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Simplified Alberta outline */}
              <path
                d="M 120 20 L 280 15 L 350 80 L 370 150 L 360 220 L 300 280 L 150 285 L 80 250 L 40 180 L 50 100 Z"
                fill="rgba(69,163,90,0.04)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="100"
                x2="350"
                y2="100"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="180"
                x2="370"
                y2="180"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
              <line
                x1="120"
                y1="15"
                x2="120"
                y2="285"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
              <line
                x1="280"
                y1="15"
                x2="300"
                y2="280"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
              {/* Pin — Calgary */}
              <circle cx="200" cy="180" r="6" fill="#45A35A" opacity="0.9" />
              <circle
                cx="200"
                cy="180"
                r="10"
                fill="none"
                stroke="#45A35A"
                strokeWidth="1"
                opacity="0.3"
              />
              <text
                x="200"
                y="168"
                textAnchor="middle"
                fill="#F4F6FB"
                fontSize="9"
                fontWeight="600"
              >
                Calgary
              </text>
              {/* Pin — Red Deer */}
              <circle cx="220" cy="100" r="4" fill="#2BA8FF" opacity="0.7" />
              <text
                x="220"
                y="94"
                textAnchor="middle"
                fill="#9AA7BD"
                fontSize="7"
              >
                Red Deer
              </text>
              {/* Other dots */}
              <circle cx="170" cy="170" r="2.5" fill="#F5A623" opacity="0.6" />
              <circle cx="230" cy="190" r="2.5" fill="#F5A623" opacity="0.6" />
              <circle cx="210" cy="200" r="2.5" fill="#F5A623" opacity="0.6" />
              <circle cx="180" cy="210" r="2.5" fill="#F5A623" opacity="0.6" />
              <circle cx="240" cy="120" r="2" fill="#2BA8FF" opacity="0.5" />
            </svg>
          </div>

          {/* City List */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Areas We Serve
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              <div>
                {leftCities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground"
                  >
                    <MapPin className="size-3 text-brand-green shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <div>
                {rightCities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground"
                  >
                    <MapPin className="size-3 text-brand-green shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6 italic">
              {site.serviceAreaNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
