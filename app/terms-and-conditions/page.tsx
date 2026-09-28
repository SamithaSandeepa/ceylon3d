import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_CONFIG.companyName}`,
  description:
    "Terms governing the use of Ceylon 3D's website and its 3D printing, scanning and prototyping services.",
  alternates: { canonical: "/terms-and-conditions" },
};

/* ─────────────────────────────────────────────────────────
   LEGAL REVIEW NOTICE
   The sections marked ⚠ REVIEW contain neutral/placeholder
   wording for policies that must be confirmed by the
   business owner before this page is published.
   ───────────────────────────────────────────────────────── */

export default function TermsAndConditionsPage() {
  return (
    <div className="font-[var(--font-sans)]">
      <Navbar />
      <main>
        <LegalPageLayout
          eyebrow="Legal"
          heading="Terms & Conditions"
          lastUpdated="September 2026"
        >

          {/* 1. Introduction */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to {SITE_CONFIG.companyName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;). By accessing or using our website at{" "}
              <a
                href={SITE_CONFIG.url}
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2"
              >
                {SITE_CONFIG.url}
              </a>{" "}
              or by engaging our services, you agree to be bound by these Terms &amp;
              Conditions. Please read them carefully before proceeding.
            </p>
          </section>

          {/* 2. Acceptance of Terms */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">2. Acceptance of Terms</h2>
            <p>
              By submitting an enquiry, placing an order, or using any part of this
              website, you confirm that you have read, understood, and agree to these
              Terms &amp; Conditions in full. If you do not agree, please do not use our
              website or services.
            </p>
          </section>

          {/* 3. Services */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">3. Services</h2>
            <p>
              {SITE_CONFIG.companyName} provides the following professional services from
              our premises in {SITE_CONFIG.address.line1}, Sri Lanka:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>3D Prototyping — turning CAD designs into functional physical prototypes</li>
              <li>
                3D Scanning — converting physical components into accurate digital 3D models
              </li>
              <li>
                3D Printing — producing physical parts from digital models for prototypes,
                replacements, or custom components
              </li>
            </ul>
            <p className="mt-3">
              All services are subject to feasibility assessment. We reserve the right to
              decline any order at our discretion.
            </p>
          </section>

          {/* 4. Quotations and Pricing */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">4. Quotations and Pricing</h2>
            <p>
              All prices and quotations are provided on a per-project basis following
              review of the customer&rsquo;s design files, specifications, and requirements.
              Quotations are estimates based on the information provided at the time of
              enquiry. Final pricing may vary if:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Design files are modified after the quotation is issued</li>
              <li>Material requirements change</li>
              <li>Additional complexity or post-processing is required</li>
            </ul>
            <p className="mt-3">
              All prices are quoted in Sri Lankan Rupees (LKR) unless otherwise stated.
              Quotations are valid for a limited period as stated at the time of issue.
            </p>
          </section>

          {/* 5. Customer-Supplied Designs and Files */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              5. Customer-Supplied Designs and Files
            </h2>
            <p>
              When you supply design files (STL, OBJ, STEP, or other formats), you confirm
              that:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>You own or have the legal right to reproduce the design</li>
              <li>
                The design does not infringe any third-party intellectual property rights
              </li>
              <li>
                The design does not represent any prohibited item as described in
                Section 16
              </li>
            </ul>
            <p className="mt-3">
              {SITE_CONFIG.companyName} accepts no liability for errors, defects, or
              dimensional inaccuracies that originate from customer-supplied files. We may
              advise on print suitability but the customer remains responsible for the
              accuracy of their designs.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">6. Intellectual Property</h2>
            <p>
              All website content — including text, images, graphics, and the Ceylon 3D
              logo — is the intellectual property of {SITE_CONFIG.companyName} or its
              licensors and is protected under applicable Sri Lankan and international law.
            </p>
            <p className="mt-3">
              Customer-supplied design files remain the property of the customer.{" "}
              {SITE_CONFIG.companyName} will not reproduce, share, or exploit customer files
              beyond the scope of the agreed service without written consent.
            </p>
          </section>

          {/* 7. Manufacturing and 3D Printing Limitations */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              7. Manufacturing and 3D Printing Limitations
            </h2>
            <p>
              3D printing and scanning are subject to inherent technical limitations.
              Customers should be aware that:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>
                Not all geometries are suitable for 3D printing; designs may require
                modification to be manufacturable
              </li>
              <li>
                Surface finish, layer lines, and material properties may differ from
                machined or injection-moulded equivalents
              </li>
              <li>
                Colour consistency may vary between print runs
              </li>
              <li>
                3D scanning accuracy depends on the condition, size, and surface texture
                of the scanned object
              </li>
            </ul>
          </section>

          {/* 8. Prototype Limitations */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">8. Prototype Limitations</h2>
            <p>
              Prototypes produced by {SITE_CONFIG.companyName} are intended for design
              validation, concept demonstration, and non-critical testing purposes.
              They are not certified for use in safety-critical applications, load-bearing
              structural roles, medical devices, or any other regulated application without
              independent professional certification.
            </p>
          </section>

          {/* 9. Accuracy and Tolerances */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">9. Accuracy and Tolerances</h2>
            <p>
              We work to achieve the best possible dimensional accuracy within the
              capabilities of FDM and SLA 3D printing technology. However, exact
              tolerances cannot be guaranteed for all geometries and materials. If
              dimensional precision is critical to your application, please discuss
              tolerances with us before placing an order.
            </p>
          </section>

          {/* 10. Payment — ⚠ REVIEW */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">10. Payment</h2>
            <p>
              Payment terms will be communicated at the time of quotation.{" "}
              {/* ⚠ REVIEW: Confirm actual payment terms — deposit %, final payment timing, accepted methods */}
              We may require a deposit before commencing production. The outstanding
              balance is due upon completion before collection or dispatch of the order.
              We accept payment methods as communicated at the time of order confirmation.
            </p>
          </section>

          {/* 11. Orders */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">11. Orders</h2>
            <p>
              An order is confirmed only when {SITE_CONFIG.companyName} provides written
              confirmation (by phone, WhatsApp, or email) and any required deposit has been
              received. Submission of a project enquiry does not constitute a confirmed order.
            </p>
          </section>

          {/* 12. Delivery / Collection */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              12. Delivery and Collection
            </h2>
            <p>
              Completed orders are available for collection from our premises in{" "}
              {SITE_CONFIG.address.line1}. Turnaround times are estimates only and may be
              affected by design complexity, material availability, and production capacity.
              We will notify you when your order is ready.
            </p>
            <p className="mt-3">
              {/* ⚠ REVIEW: Confirm whether courier/delivery is offered and under what terms */}
              Delivery arrangements, where offered, are subject to separate agreement and
              additional charges.
            </p>
          </section>

          {/* 13. Cancellations — ⚠ REVIEW */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">13. Cancellations</h2>
            <p>
              {/* ⚠ REVIEW: Confirm actual cancellation policy — when is deposit forfeited? */}
              Orders may be cancelled prior to production commencing. If production has
              already begun, cancellation charges may apply to cover materials and
              labour costs incurred. Please contact us as early as possible if you wish
              to cancel.
            </p>
          </section>

          {/* 14. Returns and Refunds — ⚠ REVIEW */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              14. Returns and Refunds
            </h2>
            <p>
              {/* ⚠ REVIEW: Confirm actual return/refund policy */}
              Due to the custom nature of our products, returns are generally not accepted
              for change-of-mind purposes. Where a product has been manufactured with a
              defect attributable to {SITE_CONFIG.companyName} and not caused by the
              customer&rsquo;s design file, we will work with you to remedy the issue at no
              additional cost. Please contact us within a reasonable time of receiving your
              order if you have a concern.
            </p>
          </section>

          {/* 15. Customer Responsibilities */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              15. Customer Responsibilities
            </h2>
            <p>Customers are responsible for:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Providing accurate design files and specifications</li>
              <li>
                Reviewing and approving designs before confirming production
              </li>
              <li>Collecting or arranging delivery of completed orders promptly</li>
              <li>
                Ensuring the intended use of printed parts is lawful and safe
              </li>
            </ul>
          </section>

          {/* 16. Prohibited Designs */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">16. Prohibited Designs</h2>
            <p>
              {SITE_CONFIG.companyName} will not manufacture any item that is illegal under
              Sri Lankan law, including but not limited to weapons, weapon components,
              counterfeit goods, or items that infringe the rights of others.
              We reserve the right to refuse any order without explanation.
            </p>
          </section>

          {/* 17. Website Use */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">17. Website Use</h2>
            <p>
              You may use this website for lawful purposes only. You must not:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>
                Attempt to gain unauthorised access to any part of the website or its
                infrastructure
              </li>
              <li>Transmit harmful, offensive, or unlawful content through the site</li>
              <li>
                Use automated tools to scrape or harvest data from the website without
                prior written permission
              </li>
            </ul>
          </section>

          {/* 18. Third-Party Links */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">18. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Google Maps
              or Google Reviews). These links are provided for convenience only.{" "}
              {SITE_CONFIG.companyName} has no control over and accepts no responsibility
              for the content or practices of any third-party sites.
            </p>
          </section>

          {/* 19. Limitation of Liability */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              19. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law,{" "}
              {SITE_CONFIG.companyName} shall not be liable for any indirect, incidental,
              or consequential loss arising from the use of our services or website,
              including but not limited to loss of profit, data, or business opportunity.
              Our liability for any claim relating to a specific order shall not exceed
              the amount paid for that order.
            </p>
          </section>

          {/* 20. Changes to Terms */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">20. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any time.
              Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
              Continued use of our website or services after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          {/* 21. Governing Law */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">21. Governing Law</h2>
            <p>
              {/* ⚠ REVIEW: Confirm jurisdiction with legal adviser */}
              These Terms &amp; Conditions are governed by and construed in accordance with
              the laws of Sri Lanka. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of Sri Lanka.
            </p>
          </section>

          {/* 22. Contact */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">22. Contact</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please contact
              us:
            </p>
            <ul className="mt-3 list-none space-y-1.5">
              <li>
                <strong className="text-white/80">Business:</strong>{" "}
                {SITE_CONFIG.companyName}
              </li>
              <li>
                <strong className="text-white/80">Address:</strong>{" "}
                {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2}
              </li>
              <li>
                <strong className="text-white/80">Phone / WhatsApp:</strong>{" "}
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-orange-400 hover:text-orange-300"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </section>

        </LegalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
