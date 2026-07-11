import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DB Enterprises",
};

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
          Terms of Service
        </h1>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
          <p>
            By requesting a quote or engaging DB Enterprises for services, you
            agree to the following terms.
          </p>
          <p>
            All work is performed by Red Seal certified technicians. Quotes are
            valid for 30 days unless otherwise specified. Pricing may vary based
            on site conditions discovered during the work.
          </p>
          <p>
            Payment terms are outlined in each project proposal. DB Enterprises
            reserves the right to adjust scope and pricing for unforeseen
            conditions.
          </p>
          <p>
            For questions about these terms, please contact us by phone at
            587-333-4822.
          </p>
          <p className="text-xs text-muted-foreground pt-4">
            Last updated: June 2026
          </p>
        </div>
      </div>
    </div>
  );
}
