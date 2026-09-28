import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Shared layout shell for legal pages (Terms & Conditions, Privacy Policy).
 * Provides consistent typography, spacing, and readable prose width.
 * Each page supplies its own heading and content — no policy content lives here.
 */
export function LegalPageLayout({
  eyebrow,
  heading,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 pt-28 md:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-12 sm:mb-16 border-b border-white/[0.08] pb-10">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
            {eyebrow}
          </span>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {heading}
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        </div>

        {/*
         * Prose content area.
         * Sections are rendered by the page component via children.
         * Each section should use:
         *   <h2>  — section heading
         *   <p>   — body paragraph
         *   <ul>  — list items
         */}
        <div className="legal-prose space-y-10 text-[15px] leading-relaxed text-gray-400">
          {children}
        </div>

      </div>
    </div>
  );
}
