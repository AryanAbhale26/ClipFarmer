"use client";

import { motion } from "framer-motion";
import {
  Brain, Mic2, Scissors, MessageSquare, CalendarClock, BarChart3,
  Zap, Shield, Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Highlight Detection",
    description: "Gemini AI analyzes your transcript and scores each segment for virality, emotion, and SEO potential. Returns structured JSON with timestamps.",
    gradient: "from-violet-600 to-purple-600",
    badge: "Gemini AI",
  },
  {
    icon: Mic2,
    title: "Auto Transcription",
    description: "Deepgram Nova-2 transcribes every word with millisecond timestamps, speaker detection, and 99%+ accuracy across 30+ languages.",
    gradient: "from-pink-600 to-rose-600",
    badge: "Deepgram",
  },
  {
    icon: Scissors,
    title: "Precision FFmpeg Cutting",
    description: "AWS Lambda runs FFmpeg serverlessly to cut frame-perfect clips at exact timestamps. No quality loss, instant processing.",
    gradient: "from-indigo-600 to-blue-600",
    badge: "AWS Lambda",
  },
  {
    icon: MessageSquare,
    title: "Remotion Captions",
    description: "Remotion renders word-level animated captions synced to AI-generated TTS or the original audio. Export in 9:16, 1:1, or 16:9.",
    gradient: "from-purple-600 to-violet-600",
    badge: "Remotion",
  },
  {
    icon: CalendarClock,
    title: "Social Media Scheduling",
    description: "Schedule clips to TikTok, Instagram Reels, YouTube Shorts, and LinkedIn simultaneously with Zernio's scheduling API.",
    gradient: "from-fuchsia-600 to-pink-600",
    badge: "Zernio",
  },
  {
    icon: BarChart3,
    title: "SEO Score & Analytics",
    description: "Every clip gets an AI SEO score, recommended hashtags, caption suggestions, and projected reach estimate before you publish.",
    gradient: "from-violet-600 to-indigo-600",
    badge: "Analytics",
  },
  {
    icon: Zap,
    title: "Inngest Background Jobs",
    description: "The entire pipeline runs as reliable background jobs — retry on failure, progress tracking, real-time status updates in your dashboard.",
    gradient: "from-yellow-600 to-orange-600",
    badge: "Inngest",
  },
  {
    icon: Shield,
    title: "Arcjet Protection",
    description: "Rate limiting, bot detection, and AI prompt injection protection on every API endpoint. Your content and account are always secure.",
    gradient: "from-green-600 to-teal-600",
    badge: "Arcjet",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Transcribe and generate captions in 30+ languages. Auto-translate captions for global reach with a single upload.",
    gradient: "from-cyan-600 to-blue-600",
    badge: "Global",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/20 text-xs font-medium text-violet-300 mb-4"
          >
            <Brain size={12} />
            Powered by 9 AI services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Go Viral</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A complete AI pipeline — from raw footage to published short-form content — all in one platform.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${feat.gradient} shadow-lg flex-shrink-0`}>
                  <feat.icon size={20} className="text-white" />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400 font-medium">
                  {feat.badge}
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
