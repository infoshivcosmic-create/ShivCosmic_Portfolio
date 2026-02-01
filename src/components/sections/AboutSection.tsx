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
            {/* Enhanced Background with Animations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Aurora gradient layers */}
                {shouldReduceMotion ? (
                    <>
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(167, 139, 250, 0.12) 100%)',
                            }}
                        />
                        <div
                            className="absolute top-0 left-0 w-full h-[400px] blur-[120px]"
                            style={{
                                background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, transparent 100%)',
                            }}
                        />
                    </>
                ) : (
                    <>
                        {/* Top flowing gradient curtain */}
                        <motion.div
                            className="absolute -top-[200px] left-0 w-[150%] h-[600px] blur-[120px]"
                            style={{
                                background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 100%)',
                            }}
                            animate={{
                                x: ['-10%', '10%', '-10%'],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />


                        {/* Bottom flowing gradient curtain */}
                        <motion.div
                            className="absolute -bottom-[200px] right-0 w-[150%] h-[600px] blur-[120px]"
                            style={{
                                background: 'linear-gradient(0deg, rgba(59, 130, 246, 0.2) 0%, rgba(167, 139, 250, 0.12) 40%, transparent 100%)',
                            }}
                            animate={{
                                x: ['10%', '-10%', '10%'],
                                rotate: [0, -5, 0],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />


                        {/* Animated wave overlay 1 */}
                        <motion.div
                            className="absolute left-0 top-1/4 w-full h-[300px] blur-[100px]"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(167, 139, 250, 0.18) 0%, transparent 70%)',
                            }}
                            animate={{
                                x: ['-20%', '20%', '-20%'],
                                scaleX: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />


                        {/* Animated wave overlay 2 */}
                        <motion.div
                            className="absolute right-0 bottom-1/4 w-full h-[300px] blur-[100px]"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                            }}
                            animate={{
                                x: ['20%', '-20%', '20%'],
                                scaleX: [1, 1.4, 1],
                            }}
                            transition={{
                                duration: 14,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />


                        {/* Shimmer particle 1 */}
                        <motion.div
                            className="absolute top-1/3 left-1/4 w-[250px] h-[250px] rounded-full blur-[90px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
                            }}
                            animate={{
                                y: [0, -50, 0],
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Shimmer particle 2 */}
                        <motion.div
                            className="absolute bottom-1/3 right-1/4 w-[220px] h-[220px] rounded-full blur-[85px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)',
                            }}
                            animate={{
                                y: [0, 50, 0],
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.15, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </>
                )}
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
                        <div className="aspect-video max-w-2xl mx-auto lg:mx-0 relative">



                            {/* Animated particle glows */}
                            {!shouldReduceMotion && (
                                <>
                                    <motion.div
                                        className="absolute w-[120px] h-[120px] rounded-full blur-2xl"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
                                            top: '10%',
                                            left: '10%',
                                        }}
                                        animate={{
                                            x: ['0%', '80%', '0%'],
                                            y: ['0%', '70%', '0%'],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute w-[100px] h-[100px] rounded-full blur-xl"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)',
                                            bottom: '10%',
                                            right: '10%',
                                        }}
                                        animate={{
                                            x: ['0%', '-70%', '0%'],
                                            y: ['0%', '-60%', '0%'],
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute w-[90px] h-[90px] rounded-full blur-lg"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)',
                                            top: '50%',
                                            right: '5%',
                                        }}
                                        animate={{
                                            x: ['0%', '-50%', '0%'],
                                            y: ['-25%', '25%', '-25%'],
                                        }}
                                        transition={{
                                            duration: 12,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </>
                            )}


                            {/* Video frame */}
                            <div
                                className="absolute inset-0 rounded-3xl p-[3px]"
                                style={{
                                    background: 'linear-gradient(135deg, #4a4a5a 0%, #A78BFA 25%, #3a3a4a 50%, #6366F1 75%, #2a2a35 100%)',
                                }}
                            >
                                <div className="w-full h-full rounded-[calc(1.5rem-3px)] bg-gradient-to-b from-[#1f1f28] to-[#0c0c10] p-[3px]">
                                    <div className="w-full h-full rounded-[calc(1.5rem-6px)] overflow-hidden">
                                        <iframe
                                            src="https://www.youtube.com/embed/-7oALzHZES8?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&disablekb=1"
                                            title="VSL - Shiv Cosmic Energy Solutions"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full"
                                            style={{ border: 'none' }}
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
