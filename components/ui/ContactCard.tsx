import type { ContactCardData } from "@/types";

interface ContactCardProps {
  card: ContactCardData;
}

export function ContactCard({ card }: ContactCardProps) {
  const Wrapper = card.href ? "a" : "div";
  const wrapperProps = card.href ? { href: card.href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 text-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
        {card.icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
      {card.primary && (
        <p className="text-orange-400 font-semibold text-xl">{card.primary}</p>
      )}
      {card.lines?.map((line) => (
        <p key={line} className="text-gray-300 text-sm leading-relaxed">
          {line}
        </p>
      ))}
      {card.subtitle && (
        <p className="text-gray-500 text-sm mt-2">{card.subtitle}</p>
      )}
    </Wrapper>
  );
}
