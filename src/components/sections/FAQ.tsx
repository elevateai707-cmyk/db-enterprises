"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { site } from "@/data/site";

export default function FAQ() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-blue font-medium mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion className="w-full">
            {site.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-brand-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors font-medium"
            >
              View All FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
