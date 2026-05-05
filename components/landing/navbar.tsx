"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#040409]/80 backdrop-blur-3xl border-violet-500/20 shadow-lg shadow-violet-950/20"
          : "bg-[#040409]/60 backdrop-blur-2xl border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center glow-purple group-hover:scale-110 transition-transform">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="text-xl font-black gradient-text">ClipFarmer</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-violet-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Show when="signed-out">
            <Link 
              href="/sign-in" 
              className={cn(buttonVariants({ variant: "ghost" }), "text-muted-foreground hover:text-foreground")}
            >
              Sign In
            </Link>
            <Link 
              href="/dashboard" 
              className={cn(buttonVariants({ variant: "outline" }), "bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white")}
            >
              Start Free
            </Link>
          </Show>
          <Show when="signed-in">
            <Link 
              href="/dashboard" 
              className={cn(buttonVariants({ variant: "ghost" }), "text-muted-foreground hover:text-foreground mr-2")}
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }} />
          </Show>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-violet-500/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-violet-400 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-violet-500/10 flex flex-col gap-3">
                <Show when="signed-out">
                  <Link 
                    href="/sign-in" 
                    onClick={() => setMobileOpen(false)}
                    className={cn(buttonVariants({ variant: "ghost" }), "w-full text-muted-foreground hover:text-foreground")}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/dashboard" 
                    onClick={() => setMobileOpen(false)}
                    className={cn(buttonVariants({ variant: "outline" }), "w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white")}
                  >
                    Start Free
                  </Link>
                </Show>
                <Show when="signed-in">
                  <Link 
                    href="/dashboard" 
                    onClick={() => setMobileOpen(false)}
                    className={cn(buttonVariants({ variant: "ghost" }), "w-full text-muted-foreground hover:text-foreground mb-2")}
                  >
                    Dashboard
                  </Link>
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }} />
                  </div>
                </Show>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
