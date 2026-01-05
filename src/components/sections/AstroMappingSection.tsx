"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Compass, Building2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        icon: Star,
        title: "Planetary Influence",
        description: "Understanding cosmic influences and planetary alignments that affect spatial energy and personal destiny.",
    },
    {
        icon: Compass,
        title: "Energy Flow",
        description: "Ancient principles of directional energy flow combined with modern spatial analysis.",
    },
    {
        icon: Building2,
        title: "Architectural Alignment",
        description: "Modern structural principles optimized for energy balance and harmonious living.",
    },
    {
        icon: Zap,
        title: "Birth Chart Correlation",
        description: "Personal horoscope integration for customized spatial recommendations.",
    },
];

export default function AstroMappingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="astro-mapping" className="py-16 md:py-20 lg:py-32 bg-[var(--background-secondary)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(167, 139, 250, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167, 139, 250, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Static orbs */}
                <div
                    className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[150px] -translate-y-1/2"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--border-accent)] text-[var(--accent)] text-sm font-semibold mb-6 cursor-default"
                        style={{
                            boxShadow: '0 0 20px rgba(167, 139, 250, 0.15)',
                        }}
                    >
                        Proprietary Methodology
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-[var(--text-primary)]">Astro </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Mapping™
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto"
                    >
                        A structured, scientific approach that bridges ancient wisdom with modern architecture —
                        serving as a diagnostic and optimization framework, not a belief system.
                    </motion.p>
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="group"
                        >
                            <motion.div
                                className="h-full relative overflow-hidden rounded-2xl bg-[var(--background-card)] border border-[var(--border)] p-6 transition-all duration-300"
                                whileHover={{
                                    borderColor: 'rgba(167, 139, 250, 0.5)',
                                    y: -5,
                                }}
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.08) 0%, transparent 60%)',
                                        }}
                                    />
                                </div>

                                {/* Number with gradient */}
                                <span
                                    className="text-6xl font-bold absolute top-4 right-4 bg-gradient-to-br from-[#A78BFA]/20 to-transparent bg-clip-text text-transparent group-hover:from-[#A78BFA]/30 transition-all"
                                >
                                    0{index + 1}
                                </span>

                                {/* Icon with pulse animation on hover */}
                                <div className="relative mb-6 z-10">
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                            border: '1px solid rgba(167, 139, 250, 0.3)',
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {/* Static glow on hover */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute inset-0 rounded-2xl border border-[#A78BFA]/30" />
                                        </div>
                                        <pillar.icon className="w-7 h-7 text-[var(--accent)] relative z-10" />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 relative z-10 group-hover:text-[var(--accent)] transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                                    {pillar.description}
                                </p>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center mt-16"
                >
                    <p className="text-[var(--text-muted)] text-sm mb-6">
                        Experience the transformation through structured, scientific spatial optimization
                    </p>
                    <Link href="#contact">
                        <motion.button
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[var(--background)] bg-[var(--accent)] relative overflow-hidden group"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 30px rgba(167, 139, 250, 0.5), 0 0 60px rgba(167, 139, 250, 0.3)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                boxShadow: '0 4px 20px rgba(167, 139, 250, 0.3)',
                            }}
                        >
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                            />
                            <span className="relative z-10">Get Your Space Analyzed</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
