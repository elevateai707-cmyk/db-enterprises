"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: site.services.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B0F17]/95 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-foreground leading-tight">
                DB <span className="text-brand-green">|</span> ENTERPRISES
              </span>
              <span className="text-[10px] md:text-xs text-accent-blue tracking-[0.2em] uppercase font-medium leading-tight">
                {site.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-surface shadow-lg overflow-hidden transition-all duration-200",
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="size-4 text-brand-green" />
              <span>{site.phone}</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-8 gap-1.5 px-2.5 bg-brand-green hover:bg-brand-green/80 text-white"
            >
              {site.ctas.primary}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground lg:hidden" />}>
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-surface border-l border-border">
              <SheetHeader>
                <SheetTitle className="text-foreground">
                  DB <span className="text-brand-green">|</span> ENTERPRISES
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6 px-4">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label} className="flex flex-col gap-1">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-full"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-3 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-3 flex flex-col border-l border-border pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                  <a
                    href={`tel:${site.phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Phone className="size-4 text-brand-green" />
                    {site.phone}
                  </a>
                  <Link
                    href="/quote"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none h-8 gap-1.5 px-2.5 bg-brand-green hover:bg-brand-green/80 text-white w-full"
                  >
                    {site.ctas.primary}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
