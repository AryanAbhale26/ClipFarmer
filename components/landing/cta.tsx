"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Glow bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/15 to-pink-600/20 rounded-3xl blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-card rounded-3xl p-12 md:p-20 text-center border border-violet-500/25 overflow-hidden"
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer pointer-events-none" />

          {/* Decorative orbs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-sm font-medium text-violet-300 mb-6">
              <Sparkles size={14} />
              Start free, no credit card required
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Ready to{" "}
              <span className="gradient-text">10x Your</span>
              <br />
              Content Output?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Join 10,000+ creators using ClipFarmer to turn every long video into a week of
              short-form content. Set up takes less than 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/sign-up"
                className="btn-primary flex items-center gap-2 text-base px-10 py-4 glow-purple"
              >
                <Sparkles size={18} />
                Start Creating for Free
                <ArrowRight size={16} />
              </a>
              <a href="#pricing" className="btn-outline text-base px-10 py-4">
                View Pricing
              </a>
            </div>

            <p className="text-xs text-muted-foreground/60 mt-6">
              Free forever · No credit card · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
