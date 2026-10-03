"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { img, api } from "@/lib/asset";

const inquiryTypes = [
  // Guided Trips
  "Guided Wade Trip (3 Hours — $700)",
  "Guided Wade Trip (6 Hours — $800)",
  "Guided Float Trip (3 Hours — $700)",
  "Guided Float Trip (6 Hours — $800)",
  "Guided Lake Trip (Full Day — $875)",
  "Kids Trout Fishing Trip",
  "Instructional Guided Trip",
  // Schools & Programs
  "Fly Casting Instruction",
  "Private One-on-One Instruction",
  "Online Zoom Fly Casting Instruction",
  "Fly Casting Mastery Workshop",
  "Masterclass Fly Casting Workshop",
  "Spey & Switch Casting Clinic",
  "Saltwater Fly Casting Masterclass",
  "Dry Fly Weekend Clinic",
  "Wet Fly Weekend Clinic",
  "Euro & Nymphing Weekend Clinic",
  "Streamer Weekend Clinic",
  "Oar Frame Rowing School",
  "Smoky Mountain Weekend Schools",
  "4-Day Fly Fishing Guide School",
  // Corporate / Other
  "Corporate / Group Outing",
  "Speaking Engagement",
  "Zoom Speaking Engagement (Clubs)",
  "Fly Casting Presentations (Clubs)",
  "Gear Store Question",
  "Other",
];

const REDIRECT_LINKS: Record<string, { description: string; linkLabel: string; url: string; external: boolean }> = {
  "Guided Wade Trip (3 Hours — $700)": {
    description: "Wade a trophy section of the Tuckasegee — 3 hours, 1–2 anglers per guide, all gear included. Book directly on the trip page.",
    linkLabel: "Book a 3-Hour Guided Wade Trip",
    url: "/guided-wade-fly-fishing-trips/",
    external: false,
  },
  "Guided Wade Trip (6 Hours — $800)": {
    description: "A full morning on the Tuckasegee — 6 hours wading, 1–2 anglers per guide, all gear included. Book directly on the trip page.",
    linkLabel: "Book a 6-Hour Guided Wade Trip",
    url: "/guided-wade-fly-fishing-trips/",
    external: false,
  },
  "Guided Float Trip (3 Hours — $700)": {
    description: "Float the Tuckasegee in a Clackacraft drift boat — 3 hours, 1–2 anglers per boat, all gear included. Book directly on the trip page.",
    linkLabel: "Book a 3-Hour Guided Float Trip",
    url: "/guided-float-fly-fishing-trips/",
    external: false,
  },
  "Guided Float Trip (6 Hours — $800)": {
    description: "A full float on the Tuckasegee — 6 hours in a Clackacraft drift boat, 1–2 anglers per boat, all gear included. Book directly on the trip page.",
    linkLabel: "Book a 6-Hour Guided Float Trip",
    url: "/guided-float-fly-fishing-trips/",
    external: false,
  },
  "Guided Lake Trip (Full Day — $875)": {
    description: "Full-day guided fishing on Fontana, Cheoah, or local lakes — 1–2 anglers per boat, all gear included. Book directly on the trip page.",
    linkLabel: "Book a Guided Lake Trip",
    url: "/guided-lake-fly-fishing-trips/",
    external: false,
  },
  "Kids Trout Fishing Trip": {
    description: "Book a kids trout fishing trip directly on the trip page — details and booking are all there.",
    linkLabel: "Book a Kids Trout Fishing Trip",
    url: "/kids-trout-fishing-trips/",
    external: false,
  },
  "Instructional Guided Trip": {
    description: "Book an instructional guided trip directly on the trip page — details and booking are all there.",
    linkLabel: "Book an Instructional Guided Trip",
    url: "/instructional-guided-trips/",
    external: false,
  },
  "Fly Casting Instruction": {
    description: "Fly casting instruction is booked directly on the program page — not through this form.",
    linkLabel: "View Fly Casting Instruction",
    url: "/fly-casting-instruction/",
    external: false,
  },
  "Private One-on-One Instruction": {
    description: "Private one-on-one instruction is booked directly on the program page — not through this form.",
    linkLabel: "View Fly Casting & Private Instruction",
    url: "/fly-casting-instruction/",
    external: false,
  },
  "Online Zoom Fly Casting Instruction": {
    description: "Online Zoom instruction is booked directly on the program page — not through this form.",
    linkLabel: "View Online Zoom Fly Casting Instruction",
    url: "/online-fly-casting-lessons/",
    external: false,
  },
  "Fly Casting Mastery Workshop": {
    description: "The Fly Casting Mastery Workshop is booked directly on the program page — not through this form.",
    linkLabel: "View Fly Casting Mastery Workshop",
    url: "/fly-casting-mastery-workshop/",
    external: false,
  },
  "Masterclass Fly Casting Workshop": {
    description: "The Masterclass Fly Casting Workshop is booked directly on the program page — not through this form.",
    linkLabel: "View Masterclass Fly Casting Workshop",
    url: "/masterclass-fly-casting-workshop/",
    external: false,
  },
  "Spey & Switch Casting Clinic": {
    description: "The Spey & Switch Casting Clinic is booked directly on the program page — not through this form.",
    linkLabel: "View Spey & Switch Casting Clinic",
    url: "/spey-elite-casting-clinic/",
    external: false,
  },
  "Saltwater Fly Casting Masterclass": {
    description: "The Saltwater Fly Casting Masterclass is booked directly on the program page — not through this form.",
    linkLabel: "View Saltwater Fly Casting Masterclass",
    url: "/saltwater-fly-casting-elite-masterclass-workshop/",
    external: false,
  },
  "Dry Fly Weekend Clinic": {
    description: "The Dry Fly Weekend Clinic is booked directly on the program page — not through this form.",
    linkLabel: "View Dry Fly Weekend Clinic",
    url: "/dry-fly-clinic/",
    external: false,
  },
  "Wet Fly Weekend Clinic": {
    description: "The Wet Fly Weekend Clinic is booked directly on the program page — not through this form.",
    linkLabel: "View Wet Fly Weekend Clinic",
    url: "/wet-fly-clinic/",
    external: false,
  },
  "Euro & Nymphing Weekend Clinic": {
    description: "The Euro & Nymphing Weekend Clinic is booked directly on the program page — not through this form.",
    linkLabel: "View Euro & Nymphing Weekend Clinic",
    url: "/nymph-fishing-clinic/",
    external: false,
  },
  "Streamer Weekend Clinic": {
    description: "The Streamer Weekend Clinic is booked directly on the program page — not through this form.",
    linkLabel: "View Streamer Weekend Clinic",
    url: "/streamer-clinic/",
    external: false,
  },
  "Oar Frame Rowing School": {
    description: "The Oar Frame Rowing School is booked directly on the program page — not through this form.",
    linkLabel: "View Oar Frame Rowing School",
    url: "/drift-boat-rowing-school/",
    external: false,
  },
  "Smoky Mountain Weekend Schools": {
    description: "Smoky Mountain Weekend Schools are booked directly on the program page — not through this form.",
    linkLabel: "View Smoky Mountain Weekend Schools",
    url: "/smoky-mountain-weekend-schools/",
    external: false,
  },
  "4-Day Fly Fishing Guide School": {
    description: "The 4-Day Guide School is run through our sister site — enroll directly on the reservation form to secure your spot.",
    linkLabel: "Enroll — Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com/reservation-form/",
    external: true,
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
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img src={img("/images/fall-river-fishing.webp")} alt="Fall fly fishing on a Western North Carolina river — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-[center_60%]" loading="lazy" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Get in Touch</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">Contact</h1>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground shrink-0">Book a Service</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <Link href="/instructional-guided-trips" className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.12em] hover:gap-4 transition-all">Guided Wade or Float Trip <ArrowRight size={13} /></Link>
            <Link href="/guided-lake-fly-fishing-trips" className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.12em] hover:gap-4 transition-all">Guided Lake Trip <ArrowRight size={13} /></Link>
            <Link href="/fly-casting-instruction" className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.12em] hover:gap-4 transition-all">Fly Casting Instruction <ArrowRight size={13} /></Link>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Book or Inquire</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send a Message</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-md shadow-sm">
                <h3 className="text-amber-950 font-bold uppercase tracking-wide text-sm mb-2 flex items-center">⚠️ Looking for School Schedules or Trip Availability?</h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Please <strong>do not use this form</strong> to check dates or inquire about standard classes. All live schedules, open dates, and program registrations are managed exclusively on our official <Link href="/events-calendar" className="underline font-bold text-blue-900 hover:text-blue-700 transition-colors">Events Calendar</Link>.
                </p>
                <p className="text-xs text-amber-800 mt-2 italic">
                  *This contact form is strictly monitored for corporate events, speaking engagements, and unique media requests only. General school inquiries sent here will not receive a reply.
                </p>
              </div>
              {submitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center border border-border">
                  <div className="h-14 w-14 bg-primary flex items-center justify-center mb-6"><Check size={24} className="text-primary-foreground" /></div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Message Sent</h3>
                  <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">We'll get back to you within 24 hours — usually sooner.</p>
                </div>
              ) : (
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true); setError("");
                  try {
                    const res = await fetch(api("/contact"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.error || "Something went wrong.");
                    setSubmitted(true);
                  } catch (err: any) { setError(err.message || "Failed to send. Please try again."); }
                  finally { setSending(false); }
                }} className="space-y-6">
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
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">Preferred Date</label>
                      <input type="date" name="date" value={form.date} onChange={handle} className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white [color-scheme:light]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">I'm Interested In *</label>
                    <select required name="inquiry" value={form.inquiry} onChange={handle} className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer">
                      <option value="" disabled>Select an option...</option>
                      {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {redirectLink && (
                      <div className="mt-3 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
                        <p className="text-sm font-semibold text-blue-900 mb-1">👉 Book directly on the program page</p>
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
                    <textarea required name="message" value={form.message} onChange={handle} rows={6} placeholder="Tell us about your experience level, group size, and any questions..." className="w-full border border-border px-4 py-3.5 text-sm focus:outline-none focus:border-primary bg-white resize-none" />
                  </div>
                  {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">{error}</p>}
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
              <div className="flex items-center gap-5 mb-10">
                <img src={img("/images/mac-brown-seminars-portrait.webp")} alt="Mac Brown — Fly Fishing Guide and Instructor, Bryson City NC" className="w-20 h-20 rounded-full object-cover border-4 border-border shrink-0" />
                <div>
                  <p className="font-serif text-xl font-bold text-foreground leading-tight">Mac Brown</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">Guide & Instructor · Est. 1987</p>
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Location & Hours</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-10">Find Us</h2>
              <div className="space-y-8 mb-12">
                {[
                  { icon: MapPin, title: "Location", lines: ["779 West Deep Creek Rd", "Bryson City, NC 28713"], href: "https://maps.google.com/?q=779+West+Deep+Creek+Rd+Bryson+City+NC+28713" },
                  { icon: Phone, title: "Phone", lines: ["(828) 736-1469", "Mon–Sat, 7am–7pm ET"], href: "tel:+18287361469" },
                  { icon: Mail, title: "Email", lines: ["macbrownflyfish@gmail.com", "Reply within 24 hours"], href: "mailto:macbrownflyfish@gmail.com" },
                  { icon: Clock, title: "Season", lines: ["Open Year-Round", "Peak: March – October"], href: undefined },
                ].map((info, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="h-10 w-10 bg-muted flex items-center justify-center shrink-0"><info.icon size={16} className="text-primary" /></div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">{info.title}</p>
                      {info.lines.map((l, j) => j === 0 && info.href ? (
                        <a key={j} href={info.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                      ) : (
                        <p key={j} className="text-sm text-muted-foreground">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mb-10">
                {[
                  { Icon: Instagram, url: "https://www.instagram.com/macbrownflyfish/", label: "Instagram" },
                  { Icon: Facebook, url: "https://www.facebook.com/macbrownflyfish", label: "Facebook" },
                  { Icon: Youtube, url: "https://www.youtube.com/@macbrown3137", label: "YouTube" },
                ].map(({ Icon, url, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>
              <div className="overflow-hidden border border-border" style={{ height: 340 }}>
                <iframe title="Bryson City & Great Smoky Mountains National Park" width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-84.05%2C35.30%2C-83.05%2C35.90&layer=mapnik" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Bryson City, NC · Gateway to Great Smoky Mountains</p>
                <a href="https://maps.google.com/?q=779+West+Deep+Creek+Rd,+Bryson+City,+NC+28713" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary font-medium uppercase tracking-wider hover:underline shrink-0">
                  <MapPin size={11} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
