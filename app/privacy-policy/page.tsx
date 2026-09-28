import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.companyName}`,
  description:
    "Learn how Ceylon 3D handles information submitted through its website and project enquiry channels.",
  alternates: { canonical: "/privacy-policy" },
};

/*
 * This Privacy Policy reflects the actual data practices observed in the codebase:
 *
 * COLLECTED via contact form: name, phone number, service type, quantity, description.
 * COLLECTED via WhatsApp (wa.me): phone number of the user who initiates chat.
 * EXTERNAL SERVICES USED: Directus CMS (gallery images), Google Reviews (link only).
 * NOT DETECTED: Google Analytics, cookies, Meta Pixel, session tracking, login systems.
 *
 * If analytics or additional services are added in future, this policy must be updated.
 */

export default function PrivacyPolicyPage() {
  return (
    <div className="font-[var(--font-sans)]">
      <Navbar />
      <main>
        <LegalPageLayout
          eyebrow="Legal"
          heading="Privacy Policy"
          lastUpdated="September 2026"
        >

          {/* 1. Introduction */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">1. Introduction</h2>
            <p>
              {SITE_CONFIG.companyName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is committed to protecting the privacy of anyone who
              contacts us or uses our website at{" "}
              <a
                href={SITE_CONFIG.url}
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2"
              >
                {SITE_CONFIG.url}
              </a>
              . This Privacy Policy explains what information we collect, how we use it,
              and how we protect it.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              2. Information We Collect
            </h2>
            <p>We collect information in the following ways:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Information you provide directly through the website contact form</li>
              <li>
                Information exchanged when you contact us via WhatsApp using the
                floating button on our website
              </li>
              <li>
                Information you share when contacting us by phone or visiting our
                premises
              </li>
            </ul>
          </section>

          {/* 3. Information You Provide */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              3. Information You Provide
            </h2>
            <p>
              When you submit a project enquiry through our website contact form, you
              may provide:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>The type of service you are interested in</li>
              <li>Quantity requirements</li>
              <li>A description of your project or requirements</li>
            </ul>
            <p className="mt-3">
              This information is used solely to respond to your enquiry and to prepare
              a quotation or provide guidance about our services.
            </p>
          </section>

          {/* 4. How We Use Your Information */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              4. How We Use Your Information
            </h2>
            <p>We use the information you provide to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li>Respond to your project enquiry</li>
              <li>Prepare and communicate a quotation</li>
              <li>Manage and fulfil your order if you proceed</li>
              <li>Contact you regarding the status of your project</li>
            </ul>
            <p className="mt-3">
              We do not use your information for unsolicited marketing purposes.
            </p>
          </section>

          {/* 5. Project Enquiries */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              5. Project Enquiries
            </h2>
            <p>
              Enquiries submitted through our website contact form are received directly
              by {SITE_CONFIG.companyName}. We do not use automated third-party marketing
              platforms to process your enquiry data.
            </p>
          </section>

          {/* 6. WhatsApp Communication */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              6. WhatsApp Communication
            </h2>
            <p>
              Our website includes a floating button that opens a WhatsApp chat with our
              team. If you use this button, you will be redirected to WhatsApp
              (wa.me), a service operated by Meta Platforms, Inc. Any communication
              conducted via WhatsApp is subject to WhatsApp&rsquo;s own Privacy Policy and
              Terms of Service.
            </p>
            <p className="mt-3">
              {SITE_CONFIG.companyName} receives only the content of messages you
              voluntarily send to us through WhatsApp. We do not collect your WhatsApp
              profile data or phone number unless you share them directly.
            </p>
          </section>

          {/* 7. Cookies and Analytics */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              7. Cookies and Analytics
            </h2>
            <p>
              Our website does not currently use cookies for tracking or analytics
              purposes. We do not operate Google Analytics, Meta Pixel, or any other
              behavioural tracking service.
            </p>
            <p className="mt-3">
              If we introduce analytics in the future, this policy will be updated and
              you will be informed.
            </p>
          </section>

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              8. Third-Party Services
            </h2>
            <p>
              Our website uses the following third-party services:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white/80">Directus CMS</strong> — our gallery
                images are served from a content management system hosted at{" "}
                <span className="text-gray-300">cms.print3d.hitinnovations.lk</span>.
                Visiting our gallery may result in your browser making requests to this
                server to load images. No personal data is shared with this service
                beyond standard HTTP request metadata (IP address, browser type) as part
                of normal web operation.
              </li>
              <li>
                <strong className="text-white/80">Google Reviews</strong> — we link to
                our Google Reviews page. Clicking this link takes you to Google&rsquo;s
                website, which is governed by Google&rsquo;s own Privacy Policy.
              </li>
              <li>
                <strong className="text-white/80">WhatsApp (Meta)</strong> — as
                described in Section 6 above.
              </li>
            </ul>
          </section>

          {/* 9. Data Storage */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">9. Data Storage</h2>
            <p>
              Project enquiry information received via our contact form and WhatsApp is
              stored internally by {SITE_CONFIG.companyName} for the purpose of managing
              your project. We take reasonable steps to keep this information secure.
            </p>
          </section>

          {/* 10. Data Retention */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">10. Data Retention</h2>
            <p>
              We retain enquiry and order information for as long as is necessary to
              fulfil the related project and for a reasonable period thereafter for
              business record-keeping purposes. If you would like your information to be
              removed from our records, please contact us.
            </p>
          </section>

          {/* 11. Data Security */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">11. Data Security</h2>
            <p>
              We take reasonable steps to protect the information you share with us from
              unauthorised access, loss, or disclosure. However, no method of
              transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* 12. Sharing of Information */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              12. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or share your personal information with third parties
              for marketing purposes. We may share information only where required by law
              or in connection with the direct fulfilment of your order (for example,
              if delivery is arranged through a courier service).
            </p>
          </section>

          {/* 13. External Links */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">13. External Links</h2>
            <p>
              Our website may contain links to external websites, including Google Reviews
              and WhatsApp. We are not responsible for the privacy practices or content
              of those sites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>
          </section>

          {/* 14. Changes to This Policy */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">
              14. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in
              our practices or legal requirements. Any updates will be posted on this page
              with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          {/* 15. Contact */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-white">15. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your
              information, please contact us:
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
