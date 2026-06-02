"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: "⚙️",
    title: "Functional Prototypes",
    desc: "Turn your engineering concepts into test-ready physical parts with high dimensional accuracy.",
    highlight: "Engineering-grade accuracy",
  },
  {
    icon: "🏛️",
    title: "Architectural Models",
    desc: "Detailed scale models for architects, interior designers, and real estate presentations.",
    highlight: "Scale-accurate details",
  },
  {
    icon: "🎨",
    title: "Custom Design Prints",
    desc: "Upload your own design or work with us to create one-of-a-kind custom objects.",
    highlight: "Your design, our print",
  },
  {
    icon: "🎓",
    title: "Educational Models",
    desc: "3D printed visual aids for schools and universities — anatomy, geography, science models.",
    highlight: "Used in 10+ schools",
  },
  {
    icon: "🔧",
    title: "Replacement Parts",
    desc: "Can't find a spare part? We can replicate broken or discontinued components on demand.",
    highlight: "Same-day quotes",
  },
  {
    icon: "🏆",
    title: "Awards & Trophies",
    desc: "Custom-designed trophies, plaques, and recognition pieces for events and competitions.",
    highlight: "Fully customizable",
  },
];

const WHY_US = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Most orders ready within 24–72 hours depending on complexity.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    desc: "Using high-grade PLA, ABS, and specialty filaments for durable prints.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Competitive rates with transparent pricing — no hidden fees.",
  },
  {
    icon: "🤝",
    title: "Expert Support",
    desc: "Our team guides you from design file to finished product.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Your Idea",
    desc: "Bring a sketch, file (.STL, .OBJ, .3MF), or just an idea. We handle the rest.",
  },
  {
    step: "02",
    title: "Get a Quote",
    desc: "We review your design and provide a fast, transparent price estimate.",
  },
  {
    step: "03",
    title: "Print & Deliver",
    desc: "Your item is printed with precision and ready for pickup at our Makandura location.",
  },
];

const GALLERY_ITEMS = [
  { label: "Mechanical Gear Assembly", color: "from-orange-900 to-gray-900", tag: "Engineering" },
  { label: "Architectural House Model", color: "from-amber-900 to-gray-900", tag: "Architecture" },
  { label: "Custom Phone Stand", color: "from-orange-800 to-gray-900", tag: "Consumer" },
  { label: "School Anatomy Model", color: "from-yellow-900 to-gray-900", tag: "Education" },
  { label: "Trophy Design", color: "from-amber-800 to-gray-900", tag: "Awards" },
  { label: "Replacement Bracket", color: "from-orange-700 to-gray-900", tag: "Parts" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-black text-white group-hover:scale-110 transition-transform">
              3D
            </div>
            <span className="font-bold text-xl text-white">
              Ceylon<span className="text-orange-400">3D</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="tel:0743117565"
            className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <span>📞</span> 074 311 7565
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-orange-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-950/98 border-t border-orange-500/20 px-4 pb-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-orange-400 border-b border-gray-800 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0743117565"
              className="mt-3 flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit"
            >
              📞 074 311 7565
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="section-fade">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Now Open in Makandura
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Print Your
              <br />
              <span className="gradient-text">Ideas</span>
              <br />
              Into Reality
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Ceylon 3D is Sri Lanka&apos;s trusted 3D printing studio in Makandura. From prototypes to
              custom models — we bring your digital designs to life with precision and speed.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="glow-btn inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Explore Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Get a Quote
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-black text-orange-400">5.0⭐</div>
                <div className="text-gray-500 text-sm mt-1">Google Rating</div>
              </div>
              <div className="border-l border-gray-700 pl-8">
                <div className="text-3xl font-black text-white">Fast</div>
                <div className="text-gray-500 text-sm mt-1">24–72 hr delivery</div>
              </div>
              <div className="border-l border-gray-700 pl-8">
                <div className="text-3xl font-black text-white">LKR</div>
                <div className="text-gray-500 text-sm mt-1">Affordable pricing</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden md:flex justify-center items-center">
            <div className="float-anim relative w-72 h-72">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                <div className="text-8xl">🖨️</div>
                <div className="text-center">
                  <div className="text-orange-400 font-bold text-lg">Ceylon 3D</div>
                  <div className="text-gray-400 text-sm">Printing in progress...</div>
                </div>
                <div className="w-48 bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full w-3/4"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl">
                ✨
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to creation — we handle every stage of the 3D printing process with quality and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-6"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/20">
                  {s.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
              Why Choose <span className="gradient-text">Ceylon 3D</span>?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Located in the heart of Makandura at the Public Library Shopping Complex, Ceylon 3D brings
              professional-grade 3D printing to your doorstep. We combine cutting-edge technology with
              friendly local service.
            </p>
            <div className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
              <span className="text-4xl">📍</span>
              <div>
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-400 text-sm">No 23 Gonavila, Makandura 60170</div>
                <div className="text-gray-400 text-sm">Public Library Shopping Complex</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="card-hover bg-gray-900 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-5"
              >
                <div className="text-3xl mb-3">{w.icon}</div>
                <h4 className="text-white font-bold mb-2">{w.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Getting your 3D print is easy. Three simple steps from idea to finished product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative text-center group">
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 border-2 border-orange-500/40 group-hover:border-orange-500 transition-colors mb-6 mx-auto">
                  <span className="text-orange-400 font-black text-2xl">{p.step}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Sample <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A glimpse of the precision and variety we deliver for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`card-hover relative h-56 rounded-2xl bg-gradient-to-br ${item.color} border border-gray-800 overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-center">{item.label}</span>
                  <span className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full border border-orange-500/30">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RATING BANNER ── */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl font-black text-white mb-3">5.0 ★★★★★</div>
          <p className="text-orange-100 text-xl font-semibold mb-2">Rated 5 Stars on Google</p>
          <p className="text-orange-100/80 text-base">
            Our customers love the quality and service. Come see why Ceylon 3D is Makandura&apos;s
            top-rated printing service.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              Visit or <span className="gradient-text">Contact Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We&apos;d love to hear about your project. Reach out through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:0743117565"
              className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                📞
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-orange-400 font-semibold text-xl">074 311 7565</p>
              <p className="text-gray-500 text-sm mt-2">Mon–Sat, until 5 PM</p>
            </a>

            {/* Location */}
            <div className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                📍
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Find Us</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                No 23 Gonavila, Makandura 60170
                <br />
                Public Library Shopping Complex
              </p>
            </div>

            {/* Hours */}
            <div className="card-hover bg-gray-950 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-8 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                🕐
              </div>
              <h3 className="text-white font-bold text-lg mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Monday – Friday</span>
                  <span className="text-orange-400 font-medium">Open till 5 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span className="text-orange-400 font-medium">Open till 5 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-gray-950 via-orange-500/10 to-gray-950 border border-orange-500/20 rounded-3xl p-10 text-center">
            <h3 className="text-white font-black text-3xl mb-3">Ready to print your idea?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Send us your file or description and we&apos;ll get back to you with a quote within hours.
            </p>
            <a
              href="tel:0743117565"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors glow-btn"
            >
              📞 Call Now: 074 311 7565
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-black text-white">
                  3D
                </div>
                <span className="font-bold text-xl text-white">
                  Ceylon<span className="text-orange-400">3D</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional 3D printing services in Makandura, Sri Lanka. Turning ideas into physical reality.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block text-gray-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <a href="tel:0743117565" className="hover:text-orange-400 transition-colors">
                    074 311 7565
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span>No 23 Gonavila, Makandura 60170</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🕐</span>
                  <span>Open daily until 5 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">© 2025 Ceylon 3D. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-500 text-sm">5.0 on Google</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
