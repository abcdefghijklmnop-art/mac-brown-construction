"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook, Youtube } from "lucide-react";
import { img, api } from "@/lib/utils";

const inquiryTypes = [
  "4-Day Fly Fishing Guide School",
  "Fly Casting Instruction",
  "Private One-on-One Instruction",
  "Advanced 2-Day Fly Casting School",
  "Spey & Switch Casting Clinic",
  "Saltwater Fly Casting Masterclass",
  "Dry Fly Weekend Clinic",
  "Wet Fly Weekend Clinic",
  "Euro & Nymphing Weekend Clinic",
  "Streamer Weekend Clinic",
  "Oar Frame Rowing School",
  "NC Smoky Mountain Classes",
  "Near Atlanta — Southeast School",
  "Group or Corporate School",
  "General Question",
  "Other",
];

const REDIRECT_LINKS: Record<string, { description: string; linkLabel: string; url: string; external: boolean }> = {
  "Fly Casting Instruction": {
    description: "Fly casting instruction is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Fly Casting Instruction",
    url: "https://macbrownflyfish.com/fly-casting-instruction/",
    external: true,
  },
  "Private One-on-One Instruction": {
    description: "Private one-on-one instruction is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Fly Casting & Private Instruction",
    url: "https://macbrownflyfish.com/fly-casting-instruction/",
    external: true,
  },
  "Advanced 2-Day Fly Casting School": {
    description: "The Advanced 2-Day Fly Casting School is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Advanced 2-Day Fly Casting School",
    url: "https://macbrownflyfish.com/advanced-2-day-fly-casting-school/",
    external: true,
  },
  "Spey & Switch Casting Clinic": {
    description: "The Spey & Switch Casting Clinic is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Spey & Switch Casting Clinic",
    url: "https://macbrownflyfish.com/spey-elite-casting-clinic/",
    external: true,
  },
  "Saltwater Fly Casting Masterclass": {
    description: "The Saltwater Fly Casting Masterclass is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Saltwater Fly Casting Masterclass",
    url: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/",
    external: true,
  },
  "Dry Fly Weekend Clinic": {
    description: "The Dry Fly Weekend Clinic is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Dry Fly Weekend Clinic",
    url: "https://macbrownflyfish.com/dry-fly-clinic/",
    external: true,
  },
  "Wet Fly Weekend Clinic": {
    description: "The Wet Fly Weekend Clinic is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Wet Fly Weekend Clinic",
    url: "https://macbrownflyfish.com/wet-fly-clinic/",
    external: true,
  },
  "Euro & Nymphing Weekend Clinic": {
    description: "The Euro & Nymphing Weekend Clinic is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Euro & Nymphing Weekend Clinic",
    url: "https://macbrownflyfish.com/nymph-fishing-clinic/",
    external: true,
  },
  "Streamer Weekend Clinic": {
    description: "The Streamer Weekend Clinic is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Streamer Weekend Clinic",
    url: "https://macbrownflyfish.com/streamer-clinic/",
    external: true,
  },
  "Oar Frame Rowing School": {
    description: "The Oar Frame Rowing School is scheduled and registered on the Mac Brown Fly Fish site — not through this form.",
    linkLabel: "View Oar Frame Rowing School",
    url: "https://macbrownflyfish.com/drift-boat-rowing-school/",
    external: true,
  },
  "NC Smoky Mountain Classes": {
    description: "NC Smoky Mountain weekend schools are listed on the Mac Brown Fly Fish site with open dates and registration.",
    linkLabel: "View Smoky Mountain Weekend Schools",
    url: "https://macbrownflyfish.com/smoky-mountain-weekend-schools/",
    external: true,
  },
  "Near Atlanta — Southeast School": {
    description: "The Atlanta-area Guide School has its own page with full details, dates, and how to register.",
    linkLabel: "View Atlanta Fly Fishing Guide School",
    url: "/atlanta-fly-fishing-guide-school/",
    external: false,
  },
  "4-Day Fly Fishing Guide School": {
    description: "Ready to enroll? Skip the inbox — go straight to the reservation form to secure your spot.",
    linkLabel: "Enroll — Go to Reservation Form",
    url: "/reservation-form/",
    external: false,
  },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "", date: "", message: "" });

  const redirectLink = REDIRECT_LINKS[form.inquiry] ?? null;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img
          src={img("/images/smokies-river-fall.webp")}
          srcSet={`${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`}
          sizes="100vw"
          alt="Tuckasegee River — Fly Fishing Guide School, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Get in Touch</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">Contact</h1>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Enroll or Inquire</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send a Message</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-md shadow-sm">
                <h3 className="text-amber-950 font-bold uppercase tracking-wide text-sm mb-2 flex items-center">⚠️ Looking for School Schedules or Trip Availability?</h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Please <strong>do not use this form</strong> to check dates or inquire about standard classes. All live schedules, open dates, and program registrations are managed exclusively on our official <Link href="/reservation-form/" className="underline font-bold text-blue-900 hover:text-blue-700 transition-colors">Reservation Form</Link>.
                </p>
                <p className="text-xs text-amber-800 mt-2 italic">
                  *This contact form is strictly monitored for corporate events, speaking engagements, and unique media requests only. General school inquiries sent here will not receive a reply.
                </p>
              </div>

              {submitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center border border-border">
                  <div className="h-14 w-14 bg-primary flex items-center justify-center mb-6">
                    <Check size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Message Sent</h3>
                  <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                    We&apos;ll get back to you within 24 hours — usually sooner.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSending(true);
                    setError("");
                    try {
                      const res = await fetch(api("/ffgs-contact"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(form),
                      });
                      const data = await res.json();
                      if (!res.ok) throw new Error(data.error || "Something went wrong.");
                      setSubmitted(true);
                    } catch (err: unknown) {
                      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
                    } finally {
                      setSending(false);
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handle} placeholder="John Smith" className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handle} placeholder="john@email.com" className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="(828) 555-0100" className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Preferred Start Date</label>
                      <input type="date" name="date" value={form.date} onChange={handle} className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white [color-scheme:light]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">I&apos;m Interested In *</label>
                    <select required name="inquiry" value={form.inquiry} onChange={handle} className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer">
                      <option value="" disabled>Select an option...</option>
                      {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {redirectLink && (
                      <div className="mt-3 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <p className="text-sm font-semibold text-blue-900 mb-1">👉 This is handled on the Mac Brown Fly Fish site</p>
                        <p className="text-xs text-blue-800 leading-relaxed mb-2">{redirectLink.description}</p>
                        {redirectLink.external ? (
                          <a href={redirectLink.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-bold uppercase tracking-wide text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 transition-colors">
                            {redirectLink.linkLabel} →
                          </a>
                        ) : (
                          <Link href={redirectLink.url} className="inline-block text-xs font-bold uppercase tracking-wide text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 transition-colors">
                            {redirectLink.linkLabel} →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Message *</label>
                    <textarea required name="message" value={form.message} onChange={handle} rows={6} placeholder="Tell us about your experience level, group size, goals, and any questions…" className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white resize-none" />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">{error}</p>
                  )}
                  {redirectLink ? (
                    redirectLink.external ? (
                      <a href={redirectLink.url} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-[0.15em] py-4 flex items-center justify-center gap-2 transition-colors">
                        {redirectLink.linkLabel} →
                      </a>
                    ) : (
                      <Link href={redirectLink.url} className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-[0.15em] py-4 flex items-center justify-center gap-2 transition-colors">
                        {redirectLink.linkLabel} →
                      </Link>
                    )
                  ) : (
                    <button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                      <Send size={14} /> {sending ? "Sending…" : "Send Message"}
                    </button>
                  )}
                </form>
              )}
            </div>

            <div className="lg:col-span-2 pt-4">
              <div className="flex flex-col items-center text-center mb-12 pb-12 border-b border-border">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/20 mb-5 shrink-0">
                  <img
                    src={img("/images/mac-brown-headshot.webp")}
                    alt="Mac Brown — Fly Fishing Guide School"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <p className="font-serif text-xl font-bold text-foreground leading-tight">Mac Brown</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mt-1">FFI Master Casting Instructor</p>
                <p className="text-xs text-muted-foreground mt-1">Bryson City, NC · Est. 1987</p>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Location & Hours</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-10">Find Us</h2>

              <div className="space-y-8 mb-12">
                {[
                  { icon: MapPin, title: "Location", lines: ["779 West Deep Creek Rd", "Bryson City, NC 28713"], href: "https://maps.google.com/?q=779+West+Deep+Creek+Rd+Bryson+City+NC+28713" },
                  { icon: Phone, title: "Phone", lines: ["(828) 736-1469", "Mon–Sat, 7am–7pm ET"], href: "tel:+18287361469" },
                  { icon: Mail, title: "Email", lines: ["flyfishingguideschool@gmail.com", "Reply within 24 hours"], href: "mailto:flyfishingguideschool@gmail.com" },
                  { icon: Clock, title: "Season", lines: ["Schools Run Year-Round", "Peak: March – October"], href: undefined },
                ].map((info, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="h-10 w-10 bg-muted flex items-center justify-center shrink-0">
                      <info.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">{info.title}</p>
                      {info.lines.map((l, j) =>
                        j === 0 && info.href ? (
                          <a key={j} href={info.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                        ) : (
                          <p key={j} className="text-sm text-muted-foreground">{l}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6 mb-10">
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/Flyfishingguideschool/", label: "Facebook" },
                  { Icon: Instagram, url: "https://www.instagram.com/macbrownflyfish/", label: "Instagram" },
                  { Icon: Youtube, url: "https://www.youtube.com/@macbrown3137", label: "YouTube" },
                ].map(({ Icon, url, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>

              <div className="overflow-hidden border border-border" style={{ height: 300 }}>
                <iframe
                  title="Bryson City — Fly Fishing Guide School"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-84.05%2C35.30%2C-83.05%2C35.90&layer=mapnik"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Bryson City, NC · Great Smoky Mountains</p>
                <a href="https://maps.google.com/?q=779+West+Deep+Creek+Rd,+Bryson+City,+NC+28713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium uppercase tracking-wider hover:underline shrink-0">
                  <MapPin size={11} /> Get Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-4">Ready to Enroll?</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Schools Fill Months in Advance</h2>
        <p className="text-primary-foreground/90 mb-8 text-sm max-w-md mx-auto">
          Send us a message above or call <a href="tel:+18287361469" className="underline">(828) 736-1469</a> to check availability.
        </p>
      </section>
    </div>
  );
}
