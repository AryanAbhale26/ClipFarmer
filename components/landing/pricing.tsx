"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "0",
    period: "forever free",
    description: "Perfect for trying ClipFarmer and small creators just getting started.",
    gradient: "from-slate-600 to-slate-700",
    features: [
      "5 long video uploads / month",
      "10 short clips generated",
      "720p export quality",
      "Basic captions (static)",
      "1 social platform scheduling",
      "7-day clip storage",
      "Community support",
    ],
    cta: "Get Started Free",
    ctaStyle: "btn-outline",
    popular: false,
  },
  {
    icon: Sparkles,
    name: "Pro",
    price: "29",
    period: "per month",
    description: "For serious creators who want to dominate short-form content.",
    gradient: "from-violet-600 to-pink-600",
    features: [
      "Unlimited video uploads",
      "Unlimited clip generation",
      "4K export quality",
      "Animated word-level captions",
      "All social platforms",
      "Custom TTS voice",
      "SEO score & hashtag AI",
      "90-day clip storage",
      "Priority processing",
      "Priority email support",
    ],
    cta: "Start Pro Trial",
    ctaStyle: "btn-primary",
    popular: true,
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "99",
    period: "per month",
    description: "For agencies and teams producing content at scale.",
    gradient: "from-indigo-600 to-violet-600",
    features: [
      "Everything in Pro",
      "5 team seats included",
      "Custom branding & watermark",
      "API access (REST + Webhooks)",
      "Custom Lambda processing",
      "Dedicated S3 bucket",
      "SLA 99.9% uptime",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom contract & invoicing",
    ],
    cta: "Contact Sales",
    ctaStyle: "btn-outline",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-violet-500/20 text-xs font-medium text-violet-300 mb-4"
          >
            <Sparkles size={12} />
            Simple transparent pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Pricing That{" "}
            <span className="gradient-text">Scales With You</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            No hidden fees. No per-clip charges. Just flat monthly pricing.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl p-8 ${
                plan.popular
                  ? "border-violet-500/40 shadow-2xl shadow-violet-950/50 scale-105"
                  : "glass-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-xs font-bold text-white shadow-lg">
                  ⭐ Most Popular
                </div>
              )}

              {/* Icon & name */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{plan.name}</div>
                  <div className="text-xs text-muted-foreground">{plan.description.split(" ").slice(0, 4).join(" ")}...</div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-lg text-muted-foreground">$</span>
                  <span className="text-5xl font-black gradient-text">{plan.price}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
              </div>

              {/* CTA */}
              <a
                href="/sign-up"
                className={`${plan.ctaStyle} block text-center w-full mb-8 text-sm`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-violet-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          All plans include a <strong className="text-violet-400">7-day free trial</strong>. Cancel anytime. No credit card required for Starter.
        </motion.p>
      </div>
    </section>
  );
}
