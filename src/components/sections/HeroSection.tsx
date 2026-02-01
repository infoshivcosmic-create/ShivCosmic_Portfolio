"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState, memo, useMemo } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useIsMobile } from "@/hooks/use-mobile";

// Dynamically import shader background to avoid SSR issues
const ShaderBackground = dynamic(
    () => import("@/components/ui/shader-background").then(mod => mod.ShaderBackground),
    { ssr: false, loading: () => null }
);

// Memoized FloatingParticle - only rendered on desktop
const FloatingParticle = memo(({ delay, duration, size, left, top }: {
    delay: number;
    duration: number;
    size: number;
    left: string;
    top: string;
}) => (
    <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ width: size, height: size, left, top, willChange: "transform, opacity" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -60],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    />
));
FloatingParticle.displayName = "FloatingParticle";

function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const isMobile = useIsMobile();

    // Aggressively disable heavy effects on mobile
    const disableHeavyEffects = shouldReduceMotion || isMobile;

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate particles only once, reduce count for performance
    const particles = useMemo(() =>
        Array.from({ length: 10 }, (_, i) => ({
            id: i,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 2,
            size: 2 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        })), []
    );

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
            {/* Shader Background - disabled on mobile/reduced motion */}
            {!disableHeavyEffects && <ShaderBackground speed={0.3} />}

            {/* Floating particles - desktop only */}
            {mounted && !disableHeavyEffects && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map((particle) => (
                        <FloatingParticle key={particle.id} {...particle} />
                    ))}
                </div>
            )}

            {/* Static gradient orbs for mobile, animated for desktop */}
            <div className="absolute inset-0 pointer-events-none">
                {disableHeavyEffects ? (
                    // Static orbs for mobile
                    <>
                        <div
                            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
                            }}
                        />
                        <div
                            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[130px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
                            }}
                        />
                    </>
                ) : (
                    // Animated orbs for desktop
                    <>
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
                                willChange: "transform, opacity",
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
                                willChange: "transform, opacity",
                            }}
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.2, 0.35, 0.2],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        />
                    </>
                )}
            </div>

            {/* Main Content */}
            <div className="section-container relative z-10 py-20 lg:py-32">
                {/* Mobile Hero - shown only on small screens */}
                <div className="lg:hidden flex flex-col items-center text-center pt-4">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 mb-5"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span className="text-xs font-medium text-[var(--accent)]">Astro Mapping™</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight"
                    >
                        <span className="text-[var(--text-primary)]">Your Space</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Shapes Success
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base text-[var(--text-secondary)] max-w-sm mb-8 leading-relaxed"
                    >
                        Practical Vastu solutions that combine cosmic energy with your birth chart. No demolition. Just results.
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-center gap-6 mb-8"
                    >
                        <div className="text-center">
                            <p className="text-2xl font-bold text-[var(--text-primary)]">12+</p>
                            <p className="text-xs text-[var(--text-secondary)]">Years</p>
                        </div>
                        <div className="w-px h-10 bg-[var(--border)]" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-[var(--text-primary)]">500+</p>
                            <p className="text-xs text-[var(--text-secondary)]">Spaces</p>
                        </div>
                        <div className="w-px h-10 bg-[var(--border)]" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-[var(--text-primary)]">98%</p>
                            <p className="text-xs text-[var(--text-secondary)]">Happy</p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col w-full max-w-xs gap-3"
                    >
                        <Link href="https://shivcosmic.in/forms/" className="w-full">
                            <button className="btn-primary text-base flex items-center justify-center gap-2 w-full">
                                <span>Book Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                        <Link href="#services" className="w-full">
                            <button className="btn-secondary text-base w-full">
                                Explore Services
                            </button>
                        </Link>
                    </motion.div>

                    {/* Founder mention */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 text-sm text-[var(--text-muted)]"
                    >
                        By <span className="text-[var(--text-secondary)]">Mr. Shivsharan Manshetti</span> • Pune
                    </motion.p>
                </div>

                {/* Desktop Hero - hidden on mobile */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Text */}
                    <div>
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight"
                        >
                            <span className="text-[var(--text-primary)]">Your Space </span>
                            <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                                Shapes
                            </span>
                            <span className="text-[var(--text-primary)]"> Your</span>
                            <br />
                            <span className="text-[var(--text-primary)]"> </span>
                            <span className="bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                                Success
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-[var(--text-secondary)] max-w-xl mb-8 leading-relaxed"
                        >
                            I help business owners and homeowners fix their spaces using{" "}
                            <span className="text-[var(--accent)] font-semibold">Astro Mapping™</span> — a practical,
                            no-demolition approach that combines Vastu principles with your birth chart.
                            No superstition. Just results.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-start gap-4"
                        >
                            <Link href="https://shivcosmic.in/forms/">
                                <button className="btn-primary text-base flex items-center gap-2 group">
                                    <span>Book Consultation</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="btn-secondary text-base">
                                    Explore Services
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column - Image (Desktop only) */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative aspect-square max-w-md mx-0 ml-auto"
                        >
                            {/* Animated rotating glow ring */}
                            <motion.div
                                className="absolute inset-[-6px] rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent, #A78BFA, #6366F1, #818CF8, transparent)',
                                    opacity: 0.5,
                                    willChange: "transform",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Static glow background */}
                            <div
                                className="absolute inset-[-4px] rounded-full blur-xl"
                                style={{
                                    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, transparent 70%)',
                                }}
                            />

                            {/* Image frame */}
                            <div
                                className="absolute inset-0 rounded-full p-[3px]"
                                style={{
                                    background: 'linear-gradient(135deg, #4a4a5a 0%, #A78BFA 25%, #3a3a4a 50%, #6366F1 75%, #2a2a35 100%)',
                                }}
                            >
                                <div
                                    className="w-full h-full rounded-full p-[3px]"
                                    style={{ background: 'linear-gradient(135deg, #1f1f28 0%, #151520 50%, #0c0c10 100%)' }}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a20] relative">
                                        <Image
                                            src="/founder.png"
                                            alt="Mr. Shivsharan Manshetti - Founder of Shiv Cosmic Energy Solutions"
                                            fill
                                            priority
                                            quality={90}
                                            sizes="(max-width: 768px) 100vw, 500px"
                                            className="object-cover"
                                            style={{ filter: 'grayscale(20%) contrast(1.05) brightness(0.98)' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Logo badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="absolute top-0 right-0 z-20 w-20 h-20 rounded-2xl bg-[var(--background-card)]/90 border border-[var(--border-accent)] shadow-xl flex items-center justify-center backdrop-blur-lg"
                            >
                                <Image
                                    src="/logo-icon.png"
                                    alt=""
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Experience badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.6,
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                                className="absolute -left-12 top-1/4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--background-card)]/90 border border-[var(--border-accent)] backdrop-blur-lg shadow-lg"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A78BFA]/30 to-[#6366F1]/20 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[var(--text-primary)]">12+ Years</p>
                                    <p className="text-xs text-[var(--text-secondary)]">Experience</p>
                                </div>
                            </motion.div>

                            {/* Location badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.7,
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                                }}
                                className="absolute -right-8 bottom-1/4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--background-card)]/90 border border-[var(--border-accent)] backdrop-blur-lg shadow-lg"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A78BFA]/30 to-[#6366F1]/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[var(--text-primary)]">Pune, India</p>
                                    <p className="text-xs text-[var(--text-secondary)]">Based in</p>
                                </div>
                            </motion.div>

                            {/* Astro Mapping badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 px-5 py-3 rounded-2xl bg-[var(--background-card)]/90 border border-[var(--border-accent)] backdrop-blur-lg shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                                    <span className="text-sm font-semibold bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">
                                        Astro Mapping™
                                    </span>
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] mt-1">Proprietary Technique</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator - simplified */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <div className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default memo(HeroSection);
