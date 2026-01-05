"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Astro Mapping™", href: "#astro-mapping" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
];

const legalLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-16 bg-[var(--background-secondary)] border-t border-[var(--border)] relative overflow-hidden">
            {/* Static background gradient orb */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[150px] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.03) 0%, transparent 70%)',
                }}
            />

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4 group">
                            <motion.img
                                src="/logo-full.png"
                                alt="Shiv Cosmic Energy Solutions"
                                className="h-10 w-auto"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm mb-4">
                            Aligning destiny with space through scientific cosmic energy optimization
                            and the proprietary Astro Mapping™ methodology.
                        </p>
                        <p
                            className="text-sm inline-flex items-center gap-2 bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent"
                        >
                            Guided by the Universe ✨
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all text-sm"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all text-sm"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[var(--text-muted)] text-sm">
                        <p>© {new Date().getFullYear()} Shiv Cosmic Energy Solutions</p>
                        <span className="hidden sm:inline text-[var(--accent)]/30">•</span>
                        <p>Crafted by <span className="text-[var(--accent)]">Team Cosmic</span></p>
                    </div>

                    {/* Back to Top - Enhanced */}
                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-[var(--accent)] text-sm font-medium transition-all duration-300"
                        whileHover={{
                            scale: 1.02,
                            borderColor: 'rgba(167, 139, 250, 0.5)',
                            boxShadow: '0 0 20px rgba(167, 139, 250, 0.2)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
