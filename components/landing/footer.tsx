import { Zap } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Developers: [
    { label: "API Docs", href: "/docs/api" },
    { label: "Webhooks", href: "/docs/webhooks" },
    { label: "SDKs", href: "/docs/sdks" },
    { label: "Status", href: "/status" },
    { label: "GitHub", href: "https://github.com/AryanAbhale26/ClipFarmer" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

const socials = [
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: FaGithub, href: "https://github.com/AryanAbhale26/ClipFarmer", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

const techStack = ["Next.js 16", "Gemini AI", "Deepgram", "AWS S3", "Remotion", "Inngest", "Arcjet", "Clerk", "Neon DB"];

export function Footer() {
  return (
    <footer className="relative border-t border-violet-500/10 bg-[#040409]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-black gradient-text">ClipFarmer</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              The AI-powered video repurposing platform that turns long videos into viral short clips automatically.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg glass-card border border-violet-500/15 flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:border-violet-500/40 transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="border-t border-violet-500/10 py-4 overflow-hidden">
        <div className="flex gap-6 items-center text-xs text-muted-foreground/40 font-mono whitespace-nowrap animate-[marquee_20s_linear_infinite] w-max">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-violet-500/40">✦</span> {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-violet-500/10 pt-5 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} ClipFarmer. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Built with ✦ using Next.js, Gemini AI, AWS, and Remotion
          </p>
        </div>
      </div>
    </footer>
  );
}
