"use client";

import { useState } from "react";
import { MapPin, Phone, Clock3, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { BUSINESS_HOURS } from "@/content";
import Link from "next/link";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    quantity: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone/WhatsApp number.";
    if (!formData.service || formData.service === "Select a service") newErrors.service = "Please select a service.";
    if (!formData.details.trim()) newErrors.details = "Please tell us about your project.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waNumber = SITE_CONFIG.whatsappNumber;

    const message = `Hello Ceylon 3D,

I'd like to discuss a project.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Service: ${formData.service}
Quantity: ${formData.quantity.trim() || "Not specified"}

Project Requirement:
${formData.details.trim()}

I can send my CAD file/reference images here.`;

    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="scroll-mt-24 relative bg-gray-950 py-24 sm:py-32 lg:py-36">
      {/* top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* ─── LEFT COLUMN: Info ─── */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-orange-500/50" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                  Get In Touch
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Let’s build your <br className="hidden sm:block" />
                <span className="text-orange-500">next part.</span>
              </h2>
              <p className="text-base leading-7 text-gray-400">
                Tell us what you need, share your design or reference part, and we’ll help you determine the next step.
              </p>
            </div>

            <div className="space-y-10">
              {/* Phone */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Phone size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Direct Contact
                  </span>
                </div>
                <Link 
                  href={SITE_CONFIG.phoneHref}
                  className="group inline-block transition-opacity hover:opacity-80"
                >
                  <div className="text-2xl font-semibold text-white tracking-wide">
                    {SITE_CONFIG.phone}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-orange-400">
                    Call or WhatsApp
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>

              <div className="h-px w-full bg-white/[0.04]" />

              {/* Location */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Workshop
                  </span>
                </div>
                <div className="text-base text-gray-300">
                  {SITE_CONFIG.address.line1}
                  <br />
                  {SITE_CONFIG.address.line2}
                </div>
              </div>

              <div className="h-px w-full bg-white/[0.04]" />

              {/* Hours */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Clock3 size={14} className="text-orange-400/70" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Opening Hours
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {BUSINESS_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-400">{h.day}</span>
                      <span className={h.isClosed ? "text-gray-600" : "font-medium text-orange-400"}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Project Inquiry Form ─── */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10 lg:p-12 h-full flex flex-col">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/80">
                Start a Project
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                Have a design, part or idea?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                Share the basic details and we&apos;ll help determine the best next step.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry-name" className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder-gray-500 transition-colors focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                    {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry-phone" className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="07X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder-gray-500 transition-colors focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                    {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry-service" className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      What do you need?
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 text-white transition-colors focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50 [&:invalid]:text-gray-500"
                      required
                    >
                      <option value="" disabled className="text-gray-900">Select a service</option>
                      <option value="3D Printing" className="text-gray-900">3D Printing</option>
                      <option value="Prototyping" className="text-gray-900">Prototyping</option>
                      <option value="3D Scanning" className="text-gray-900">3D Scanning</option>
                      <option value="Reverse Engineering" className="text-gray-900">Reverse Engineering</option>
                      <option value="Not sure yet" className="text-gray-900">Not sure yet</option>
                    </select>
                    {errors.service && <span className="text-xs text-red-400">{errors.service}</span>}
                  </div>

                  {/* Quantity */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiry-qty" className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                      Quantity <span className="lowercase font-normal text-white/30 ml-1">(Optional)</span>
                    </label>
                    <input
                      id="inquiry-qty"
                      type="text"
                      placeholder="e.g. 1, 5, 20"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder-gray-500 transition-colors focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="inquiry-details" className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                    Tell us about your project
                  </label>
                  <textarea
                    id="inquiry-details"
                    placeholder="Describe the part, intended use, approximate dimensions or what you need help with..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="min-h-[140px] w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white placeholder-gray-500 transition-colors focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                  />
                  {errors.details && <span className="text-xs text-red-400">{errors.details}</span>}
                </div>

                {/* Helper / Hints Row */}
                <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    Helpful to include:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono tracking-wider text-orange-400/80">
                    <span>CAD FILE</span>
                    <span className="text-white/20">·</span>
                    <span>DIMENSIONS</span>
                    <span className="text-white/20">·</span>
                    <span>QUANTITY</span>
                    <span className="text-white/20">·</span>
                    <span>INTENDED USE</span>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="mt-2 flex flex-col gap-4">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-[15px] font-bold text-white transition-all hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-[0.98]"
                  >
                    Send via WhatsApp
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-center text-xs text-gray-500">
                    Have a CAD file or reference photo? You can send it to us in WhatsApp after submitting your request.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
