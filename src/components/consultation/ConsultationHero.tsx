"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Star, TrendingUp } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

interface ConsultationHeroProps {
    onBookNowClick: () => void;
}

export default function ConsultationHero({ onBookNowClick }: ConsultationHeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Animated Shader Background */}
            <AnimatedShaderBackground />

            {/* Subtle gradient orbs matching main site */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-[160px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10 text-center px-4 py-28 md:py-36">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main Headline with enhanced typography */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-20 tracking-tight leading-[1.05]">
                        <motion.span
                            className="block text-[var(--text-primary)] font-light mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Get Personally Guided by
                        </motion.span>
                        <motion.span
                            className="block text-[var(--accent)] font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                filter: 'drop-shadow(0 0 60px rgba(232, 232, 232, 0.3))',
                                textShadow: '0 0 80px rgba(232, 232, 232, 0.2)',
                            }}
                        >
                            Shiv Sir
                        </motion.span>
                    </h1>

                    {/* Sub-headline with improved spacing */}
                    <motion.p
                        className="text-2xl sm:text-3xl md:text-4xl text-[var(--text-secondary)] mb-24 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        1-on-1 Consultation to Solve Your Exact Problem
                    </motion.p>

                    {/* Authority Badges with enhanced animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-16"
                    >
                        {/* 1000+ people guided */}
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="glass flex items-center gap-3 px-7 py-4 rounded-2xl"
                        >
                            <Users className="w-5 h-5 text-[var(--accent)]" />
                            <span className="text-[var(--text-primary)] font-medium text-base">1000+ People Guided</span>
                        </motion.div>

                        {/* 4.9/5 Rating */}
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="glass flex items-center gap-3 px-7 py-4 rounded-2xl"
                        >
                            <Star className="w-5 h-5 text-[var(--accent)] fill-[var(--accent)]" />
                            <span className="text-[var(--text-primary)] font-medium text-base">4.9/5 Rating</span>
                        </motion.div>

                        {/* Trusted by professionals */}
                        <motion.div
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className="glass flex items-center gap-3 px-7 py-4 rounded-2xl"
                        >
                            <TrendingUp className="w-5 h-5 text-[var(--accent)]" />
                            <span className="text-[var(--text-primary)] font-medium text-base">Trusted by Professionals</span>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced CTA Button with pulsing glow */}
                    <motion.button
                        onClick={onBookNowClick}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            boxShadow: [
                                '0 10px 40px rgba(232, 232, 232, 0.15)',
                                '0 15px 50px rgba(232, 232, 232, 0.25)',
                                '0 10px 40px rgba(232, 232, 232, 0.15)',
                            ]
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.6 },
                            scale: { duration: 0.6, delay: 0.6 },
                            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 20px 60px rgba(232, 232, 232, 0.35)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary group relative px-12 sm:px-16 py-6 sm:py-7 rounded-full text-xl sm:text-2xl font-bold overflow-hidden"
                    >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <CheckCircle className="w-6 h-6" />
                            Book 1-to-1 Consultation Now
                        </span>
                    </motion.button>

                    {/* Enhanced trust indicator */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mt-10 text-[var(--text-secondary)] text-base font-light"
                    >
                        Join 1000+ satisfied clients who transformed their spaces
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
