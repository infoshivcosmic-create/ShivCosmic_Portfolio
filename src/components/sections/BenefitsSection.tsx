"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Eye, Lightbulb, Target, Check } from "lucide-react";

const benefits = [
    {
        icon: Sparkles,
        title: "Peace",
        description: "A calmer home means a calmer mind. The right setup reduces daily friction.",
    },
    {
        icon: TrendingUp,
        title: "Prosperity",
        description: "When your space supports your goals, good things start happening.",
    },
    {
        icon: Eye,
        title: "Clarity",
        description: "Stop second-guessing. Proper alignment helps you think straight.",
    },
    {
        icon: Lightbulb,
        title: "Growth",
        description: "Your environment shapes you. Design it for who you want to become.",
    },
    {
        icon: Target,
        title: "Purpose",
        description: "Connect your space to your birth chart. Understand why you're here.",
    },
];

const usp = [
    "No demolition required",
    "Science-based approach",
    "Zero superstition",
    "Practical solutions",
    "Long-term results",
    "Personalized analysis",
];

export default function BenefitsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="benefits" className="py-16 md:py-20 lg:py-32 bg-[var(--background-secondary)] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                {/* Static gradient orbs */}
                <div
                    className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
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
                        Key Benefits
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-[var(--text-primary)]">What Changes </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            For You
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
                    >
                        These aren&apos;t promises — they&apos;re patterns I&apos;ve seen repeatedly in clients who follow through.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="group"
                        >
                            <motion.div
                                className="h-full text-center p-6 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] transition-all duration-300 relative overflow-hidden"
                                whileHover={{
                                    y: -5,
                                    borderColor: 'rgba(167, 139, 250, 0.5)',
                                }}
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                {/* Top glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
                                        }}
                                    />
                                </div>

                                {/* Icon with pulse animation */}
                                <motion.div
                                    className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                        border: '1px solid rgba(167, 139, 250, 0.3)',
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {/* Static glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div
                                            className="absolute inset-0 rounded-2xl border border-[#A78BFA]/30"
                                        />
                                    </div>
                                    <benefit.icon className="w-7 h-7 text-[var(--accent)] relative z-10" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Bottom gradient line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* USP Tags - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {usp.map((item, index) => (
                        <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)',
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--border-accent)] text-[var(--accent)] text-sm font-medium cursor-default transition-all"
                            style={{
                                boxShadow: '0 0 10px rgba(167, 139, 250, 0.1)',
                            }}
                        >
                            <Check className="w-4 h-4" />
                            {item}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
