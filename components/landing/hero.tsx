"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { ParticleCanvas } from "./particle-canvas";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Hero() {
  const { isSignedIn } = useAuth();
  const startFreeHref = isSignedIn ? "/dashboard" : "/sign-up";
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card animated-border text-sm font-medium text-violet-300"
        >
          <Sparkles size={14} className="text-violet-400" />
          Powered by Gemini AI &amp; Deepgram
          <span className="ml-1 px-2 py-0.5 bg-violet-500/20 rounded-full text-xs text-violet-300">New</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
        >
          Turn Long Videos
          <br />
          <span className="gradient-text">Into Viral Clips</span>
          <br />
          <span className="text-white/90">With AI</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Upload any long-form video. Our AI finds the best moments, cuts them perfectly,
          adds captions, and schedules to all your socials — in minutes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={startFreeHref}
            className="btn-primary flex items-center gap-2 text-base px-8 py-3.5 pulse-glow"
          >
            Start Free — No Credit Card
            <ArrowRight size={16} />
          </a>
          <button className="btn-outline flex items-center gap-2 text-base px-8 py-3.5">
            <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
              <Play size={10} fill="currentColor" className="text-violet-400 ml-0.5" />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
              ))}
            </span>
            <span>Loved by <strong className="text-foreground">10,000+</strong> creators</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Video Card Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-20 mx-6 max-w-4xl w-full"
      >
        <div className="glass-card rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-950/50">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-violet-500/10 bg-black/20">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4">
              <div className="h-5 rounded-full bg-white/5 border border-white/10 flex items-center px-3">
                <span className="text-xs text-muted-foreground">clipfarmer.ai/dashboard</span>
              </div>
            </div>
          </div>
          {/* Dashboard preview */}
          <div className="p-6 bg-gradient-to-b from-[#0d0d1a] to-[#06060e]">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {["10K Videos", "50K Clips", "2M Posts"].map((stat, i) => (
                <div key={i} className="rounded-xl p-3 bg-violet-500/5 border border-violet-500/10">
                  <div className="text-xs text-muted-foreground mb-1">{stat.split(" ")[1]}</div>
                  <div className="text-lg font-bold gradient-text">{stat.split(" ")[0]}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-violet-500/10 bg-black/30 h-24 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/5" />
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center">
                      <Play size={12} fill="white" className="text-white ml-0.5" />
                    </div>
                    <div>
                      <Skeleton className="w-16 h-2 bg-white/10 rounded mb-1" />
                      <Skeleton className="w-10 h-2 bg-violet-500/30 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 text-xs font-medium text-green-400 border-green-500/20 flex items-center gap-1.5 float-animation shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          AI Processing...
        </div>
    
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-violet-500/20 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-violet-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
