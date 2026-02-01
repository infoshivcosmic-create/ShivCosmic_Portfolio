"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Target, Users } from "lucide-react";
import Image from "next/image";

export default function AboutExpert() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 md:py-28 bg-[var(--background-secondary)] relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Meet Your Expert
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Trusted Vastu consultant with proven track record
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent blur-2xl" />

                                    {/* Photo */}
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[var(--accent)]/20 bg-[var(--background-card)]">
                                        <Image
                                            src="/founder.png"
                                            alt="Mr. Shivsharan Manshetti - Vastu Expert"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Award badge */}
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl glass flex items-center justify-center border-2 border-[var(--accent)]/30">
                                        <Award className="w-10 h-10 text-[var(--accent)]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
                                Mr. Shivsharan Manshetti
                            </h3>

                            <div className="space-y-4 mb-8">
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                    Renowned Vastu and Astrology expert with <strong className="text-[var(--accent)]">12+ years of experience</strong> transforming spaces and lives through his proprietary <strong className="text-[var(--accent)]">Astro Mapping™</strong> technique.
                                </p>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                    Personally guided <strong className="text-[var(--accent)]">1000+ professionals, business owners, and families</strong> to achieve harmony, prosperity, and success through scientifically aligned cosmic energy solutions.
                                </p>
                            </div>

                            {/* Credentials */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="glass rounded-xl p-4 flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm text-[var(--text-secondary)]">Certified</div>
                                        <div className="font-semibold text-[var(--text-primary)]">Vastu Expert</div>
                                    </div>
                                </div>
                                <div className="glass rounded-xl p-4 flex items-start gap-3">
                                    <Target className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm text-[var(--text-secondary)]">Specialized in</div>
                                        <div className="font-semibold text-[var(--text-primary)]">Astro Mapping™</div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="glass rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-[var(--accent)]" />
                                    <h4 className="font-semibold text-[var(--text-primary)] text-lg">
                                        Results-Driven Approach
                                    </h4>
                                </div>
                                <p className="text-[var(--text-secondary)]">
                                    Combines ancient Vedic wisdom with modern spatial optimization, delivering measurable outcomes for residential, commercial, and industrial spaces.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
