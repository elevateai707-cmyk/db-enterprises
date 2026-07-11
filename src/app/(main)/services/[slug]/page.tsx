import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  Home,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Calgary | DB Enterprises`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Zap;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": service.schemaType,
    name: `${service.title} | DB Enterprises`,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      areaServed: site.serviceAreas,
    },
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Home className="size-3" />
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link
            href="/services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{service.title}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 rounded-xl bg-brand-green/10 flex items-center justify-center">
              <Icon className="size-7 text-brand-green" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Calgary &amp; Alberta
              </p>
            </div>
          </div>

          {/* Long Description */}
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mb-8">
            <p>{service.longDescription}</p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-9 gap-1.5 px-4 bg-brand-green hover:bg-brand-green/80 text-white"
            >
              {site.ctas.primary}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="/services"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-9 gap-1.5 px-4 bg-background hover:bg-muted text-foreground"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
