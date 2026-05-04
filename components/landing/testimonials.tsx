"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    avatar: "https://i.pravatar.cc/80?img=47",
    role: "YouTube Creator · 890K subs",
    stars: 5,
    quote:
      "ClipFarmer literally changed my workflow. I upload my 2-hour podcast and it finds the best 60-second moments automatically. My TikTok grew 400% in 3 months.",
  },
  {
    name: "Marcus Williams",
    handle: "@marcustech",
    avatar: "https://i.pravatar.cc/80?img=12",
    role: "Tech Influencer · 1.2M followers",
    stars: 5,
    quote:
      "The Gemini AI highlight detection is insanely accurate. It found clips I would have never thought to make, and they went viral. The auto-captions are chef's kiss.",
  },
  {
    name: "Priya Sharma",
    handle: "@priyacooks",
    avatar: "https://i.pravatar.cc/80?img=44",
    role: "Food Creator · 520K followers",
    stars: 5,
    quote:
      "I went from spending 4 hours editing one video to publishing 10 clips in 20 minutes. The scheduling feature alone saves me an entire day every week. Absolutely love it.",
  },
  {
    name: "Jake Morrison",
    handle: "@jakefitness",
    avatar: "https://i.pravatar.cc/80?img=8",
    role: "Fitness Coach · 340K subs",
    stars: 5,
    quote:
      "The SEO scores are a game-changer. ClipFarmer tells me exactly which clips will perform best before I even post. My views have tripled since I started using it.",
  },
  {
    name: "Luna Park",
    handle: "@lunadesigns",
    avatar: "https://i.pravatar.cc/80?img=49",
    role: "Design Creator · 210K followers",
    stars: 5,
    quote:
      "The Remotion captions look so professional. Word-level highlighting, custom fonts, perfectly synced — it looks better than clips I used to spend hours editing manually.",
  },
  {
    name: "David Okonkwo",
    handle: "@davidfinance",
    avatar: "https://i.pravatar.cc/80?img=15",
    role: "Finance Creator · 450K subs",
    stars: 5,
    quote:
      "I use the Enterprise plan for my agency. The API access and team features are exactly what we needed. We now produce 200+ clips per week across 12 client accounts.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-pink-500/20 text-xs font-medium text-pink-300 mb-4"
          >
            <Star size={12} fill="currentColor" />
            Loved by creators worldwide
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Creators Love{" "}
            <span className="gradient-text">ClipFarmer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Join 10,000+ creators already growing faster with AI-powered short clips.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid glass-card glass-card-hover rounded-2xl p-6 mb-5"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-violet-500/40 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={13} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-violet-500/20 object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
