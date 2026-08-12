import { RATING_BANNER } from "@/content";

export function RatingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-5xl font-black text-white mb-3">{RATING_BANNER.rating}</div>
        <p className="text-orange-100 text-xl font-semibold mb-2">{RATING_BANNER.headline}</p>
        <p className="text-orange-100/80 text-base">{RATING_BANNER.description}</p>
      </div>
    </section>
  );
}
