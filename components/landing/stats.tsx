"use client";

import { motion } from "framer-motion";
import { TrendingUp, Video, Share2, Users } from "lucide-react";

const stats = [
  { icon: Video, value: "10K+", label: "Videos Processed", color: "text-violet-400" },
  { icon: TrendingUp, value: "50K+", label: "Short Clips Generated", color: "text-pink-400" },
  { icon: Share2, value: "2M+", label: "Social Posts Scheduled", color: "text-indigo-400" },
  { icon: Users, value: "98%", label: "Creator Satisfaction", color: "text-purple-400" },
];

export function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="section-divider mb-16" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-current/10 mb-3 ${stat.color}`}
                style={{ background: "rgba(139,92,246,0.08)" }}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16" />
    </section>
  );
}
