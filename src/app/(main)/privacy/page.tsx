import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DB Enterprises",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
          Privacy Policy
        </h1>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
          <p>
            DB Enterprises respects your privacy. This policy outlines how we
            collect, use, and protect your personal information.
          </p>
          <p>
            We collect information you provide through our quote form, including
            your name, phone number, email address, and project details. This
            information is used solely to respond to your service request.
          </p>
          <p>
            We do not sell, share, or distribute your personal information to
            third parties except as required by law.
          </p>
          <p>
            If you have questions about this policy, please contact us by phone
            at 587-333-4822.
          </p>
          <p className="text-xs text-muted-foreground pt-4">
            Last updated: June 2026
          </p>
        </div>
      </div>
    </div>
  );
}
