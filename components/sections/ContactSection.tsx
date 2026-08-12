import { CONTACT_HEADER, CONTACT_CARDS, BUSINESS_HOURS, CONTACT_CTA } from "@/content";
import { SectionHeader, ContactCard, GlowButton } from "@/components/ui";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader data={CONTACT_HEADER} />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone & Location cards */}
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}

          {/* Hours card — custom layout */}
          <div className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 text-center group">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
              🕐
            </div>
            <h3 className="text-white font-bold text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              {BUSINESS_HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between ${h.isClosed ? "text-gray-400" : "text-gray-300"}`}
                >
                  <span>{h.day}</span>
                  <span className={h.isClosed ? "text-gray-500" : "text-orange-400 font-medium"}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-gray-950 via-orange-500/10 to-gray-950 border border-orange-500/20 rounded-3xl p-10 text-center">
          <h3 className="text-white font-black text-3xl mb-3">{CONTACT_CTA.heading}</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">{CONTACT_CTA.description}</p>
          <GlowButton href={CONTACT_CTA.buttonHref}>
            {CONTACT_CTA.buttonLabel}
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
