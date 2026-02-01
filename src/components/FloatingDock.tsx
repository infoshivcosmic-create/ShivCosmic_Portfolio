"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, User, Compass, Briefcase, Heart, Video, Star, Mail } from "lucide-react";

const navItems = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#astro-mapping", label: "Astro Mapping™", icon: Compass },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#benefits", label: "Benefits", icon: Heart },
    { href: "#media", label: "Media", icon: Video },
    { href: "#testimonials", label: "Reviews", icon: Star },
    { href: "#contact", label: "Contact", icon: Mail },
];

function FloatingDock() {
    const [activeSection, setActiveSection] = useState("#hero");

    // Throttled scroll handler
    // Intersection Observer for better performance (O(1) vs O(N) scroll listener)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top/center
                threshold: 0,
            }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.href.slice(1));
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
            style={{ willChange: "transform" }}
        >
            {/* Container with gradient border */}
            <div
                className="relative rounded-full p-[1px]"
                style={{
                    background: "linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(167, 139, 250, 0.2) 100%)",
                }}
            >
                <div
                    className="rounded-full px-2 py-2 sm:px-3 sm:py-3 flex items-center gap-0.5 sm:gap-1"
                    style={{
                        background: "rgba(15, 15, 20, 0.9)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                    }}
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-2 sm:px-4 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-200"
                            >
                                {/* Active background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: "linear-gradient(135deg, #A78BFA 0%, #818CF8 50%, #6366F1 100%)",
                                        }}
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}

                                <Icon
                                    className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                                        }`}
                                />

                                <AnimatePresence mode="wait">
                                    {isActive && (
                                        <motion.span
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: "auto", opacity: 1 }}
                                            exit={{ width: 0, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="overflow-hidden whitespace-nowrap text-white relative z-10"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
}

export default memo(FloatingDock);
