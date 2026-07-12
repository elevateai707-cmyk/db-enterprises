"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { site } from "@/data/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex items-center gap-2 bg-surface/95 backdrop-blur-md border-t border-border px-4 py-3">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-8 gap-1.5 px-2.5 bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
        >
          <Phone className="size-4" />
          Call
        </a>
        <Link
          href="/quote"
          className="flex-1 inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-8 gap-1.5 px-2.5 bg-brand-green hover:bg-brand-green/80 text-white"
        >
          <FileText className="size-4" />
          {site.ctas.primary}
        </Link>
      </div>
    </div>
  );
}
