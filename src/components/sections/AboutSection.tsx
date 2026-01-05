"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { Award, Users, MapPin, Calendar } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const stats = [
    { icon: Calendar, value: 12, suffix: "+", label: "Years Experience" },
    { icon: Users, value: 500, suffix: "+", label: "Spaces Aligned" },
    { icon: MapPin, value: 40, suffix: "+", label: "Cities Covered" },
    { icon: Award, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

const values = [
    "Science-Based Approach",
    "No Demolition Required",
    "Practical Solutions",
    "Zero Superstition",
];

// Optimized counter - uses RAF instead of setInterval
function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 1500;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setDisplayValue(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return <>{displayValue}{suffix}</>;
}

function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="about" className="py-16 md:py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background - static on mobile */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full blur-[130px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Image */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-lg mx-auto lg:mx-0 relative">
                            {/* Glow ring - static on mobile */}
                            {shouldReduceMotion ? (
                                <div
                                    className="absolute inset-[-6px] rounded-3xl"
                                    style={{
                                        background: 'conic-gradient(from 45deg, transparent, #A78BFA, #6366F1, #818CF8, transparent)',
                                        opacity: 0.4,
                                    }}
                                />
                            ) : (
                                <motion.div
                                    className="absolute inset-[-6px] rounded-3xl"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent, #A78BFA, #6366F1, #818CF8, transparent)',
                                        opacity: 0.4,
                                        willChange: "transform",
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                />
                            )}

                            {/* Glow */}
                            <div
                                className="absolute inset-[-4px] rounded-3xl blur-lg"
                                style={{
                                    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
                                }}
                            />

                            {/* Image frame */}
                            <div
                                className="absolute inset-0 rounded-3xl p-[3px]"
                                style={{
                                    background: 'linear-gradient(135deg, #4a4a5a 0%, #A78BFA 25%, #3a3a4a 50%, #6366F1 75%, #2a2a35 100%)',
                                }}
                            >
                                <div className="w-full h-full rounded-[calc(1.5rem-3px)] bg-gradient-to-b from-[#1f1f28] to-[#0c0c10] p-[3px]">
                                    <div className="w-full h-full rounded-[calc(1.5rem-6px)] overflow-hidden">
                                        <img
                                            src="/founder.png"
                                            alt="Mr. Shivsharan Manshetti"
                                            width={400}
                                            height={400}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                            style={{ filter: 'grayscale(30%) contrast(1.05)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-semibold mb-4">
                                About the Founder
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                <span className="text-[var(--text-primary)]">Mr. Shivsharan </span>
                                <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">
                                    Manshetti
                                </span>
                            </h2>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                With over 12 years of experience in Vastu and astrology, I&apos;ve developed
                                <span className="text-[var(--accent)] font-semibold"> Astro Mapping™</span> — a
                                methodology that combines your birth chart with spatial analysis.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                My approach is simple: No demolition, no superstition. Just
                                practical, science-based solutions that respect your space and your life.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="p-4 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] hover:border-[rgba(167,139,250,0.3)] transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A78BFA]/20 to-[#6366F1]/10 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-[var(--accent)]" />
                                            </div>
                                        </div>
                                        <p className="text-2xl font-bold text-[var(--text-primary)]">
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                                        </p>
                                        <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-2"
                        >
                            {values.map((value, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-[var(--background-card)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:border-[rgba(167,139,250,0.3)] hover:text-[var(--accent)] transition-colors"
                                >
                                    {value}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(AboutSection);
