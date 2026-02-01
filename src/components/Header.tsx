"use client";

import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100 bg-transparent"
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group" aria-label="Shiv Cosmic Energy Solutions Home">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-12 md:h-16 w-32 md:w-48"
                        >
                            <Image
                                src="/logo-full.png"
                                alt="Shiv Cosmic Energy Solutions"
                                width={192}
                                height={64}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <span className="status-badge status-badge-active text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Available
                        </span>
                        <Link href="https://shivcosmic.in/forms/" className="btn-primary text-sm">
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-[var(--text-primary)] p-2 hover:bg-white/5 rounded-lg transition-colors"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 right-0 bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)]"
                    >
                        <nav className="flex flex-col items-center gap-4 py-8 px-4">
                            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                                About
                            </MobileNavLink>
                            <MobileNavLink href="#astro-mapping" onClick={() => setIsMobileMenuOpen(false)}>
                                Astro Mapping™
                            </MobileNavLink>
                            <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                                Services
                            </MobileNavLink>
                            <MobileNavLink href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>
                                Benefits
                            </MobileNavLink>
                            <Link
                                href="https://shivcosmic.in/forms/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-sm font-semibold mt-4 w-full text-center"
                            >
                                Book Consultation
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}

function MobileNavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-[var(--text-primary)] text-lg font-medium hover:text-[var(--accent)] transition-colors w-full text-center py-2"
        >
            {children}
        </Link>
    );
}
