import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CoreServices from "@/components/sections/CoreServices";
import SmartQuote from "@/components/sections/SmartQuote";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import ServiceAreasSection from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DB Enterprises",
  description: site.description,
  image: "",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postal,
    addressCountry: "CA",
  },
  areaServed: site.serviceAreas.slice(0, 5).join(", ") + " and surrounding areas",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: site.services
      .filter((s) => s.featured)
      .map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
        position: i + 1,
      })),
  },
  knowsAbout: site.certifications,
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 5,
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://db-enterprises.ca",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <CoreServices />
      <SmartQuote />
      <WorkflowDemo />
      <WhyChoose />
      <Process />
      <ServiceAreasSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
