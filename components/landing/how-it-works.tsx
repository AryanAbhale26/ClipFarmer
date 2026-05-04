"use client";

import { motion } from "framer-motion";
import { Upload, Brain, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Upload Your Long Video",
    description:
      "Drag & drop or paste a YouTube/S3 URL. We accept MP4, MOV, and WebM up to 4GB. Your video is securely stored on AWS S3 with end-to-end encryption.",
    gradient: "from-violet-600 to-purple-600",
    detail: "Supports MP4, MOV, WebM · Up to 4GB · S3 encrypted",
  },
  {
    num: "02",
    icon: Brain,
    title: "AI Analyzes & Scores Highlights",
    description:
      "Deepgram transcribes every word with timestamps. Gemini AI reads the full transcript and returns the top highlight segments with virality score, SEO score, and reasoning.",
    gradient: "from-pink-600 to-rose-600",
    detail: "JSON: { start, end, score, seo_score, reason }",
  },
  {
    num: "03",
    icon: Scissors,
    title: "Clips Cut & Captions Added",
    description:
      "AWS Lambda + FFmpeg cuts each segment frame-perfectly. Remotion Lambda renders animated captions synced to word-level timestamps. TTS audio generated if needed.",
    gradient: "from-indigo-600 to-blue-600",
    detail: "9:16 · 1:1 · 16:9 · MP4 H.264 output",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Schedule & Publish Everywhere",
    description:
      "Preview your clips, select platforms, pick a schedule, and hit publish. Zernio posts to TikTok, Instagram Reels, YouTube Shorts, and LinkedIn at the perfect time.",
    gradient: "from-fuchsia-600 to-pink-600",
    detail: "TikTok · Instagram · YouTube · LinkedIn",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/20 text-xs font-medium text-violet-300 mb-4"
          >
            <Rocket size={12} />
            4 steps to go viral
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            From Upload to Published{" "}
            <span className="gradient-text">in Minutes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our fully automated AI pipeline handles everything. You just upload and review.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-violet-600/40 via-pink-600/40 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 glass-card glass-card-hover rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <step.icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-muted-foreground mb-1">{step.num}</div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-violet-500/8 border border-violet-500/15 text-xs font-mono text-violet-400">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center number bubble */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-black text-lg shadow-2xl glow-purple`}>
                    {i + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
