"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

interface VideoSectionProps {
    onReadyClick: () => void;
}

export default function VideoSection({ onReadyClick }: VideoSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const videoId = "dQw4w9WgXcQ";

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background-card)] relative overflow-hidden">
            {/* Enhanced Cosmic Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(244, 208, 63, 0.05) 40%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(244, 208, 63, 0.07) 0%, rgba(212, 175, 55, 0.04) 40%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.18, 1],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[170px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 60%)',
                    }}
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.5, 0.75, 0.5],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Accent particles */}
                <motion.div
                    className="absolute top-1/3 right-1/3 w-[180px] h-[180px] rounded-full blur-[75px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(244, 208, 63, 0.12) 0%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, 70, 0],
                        y: [0, -70, 0],
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Decorative gradient lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-30" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-30" />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-10 sm:mb-12">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold mb-4"
                        >
                            <Play className="w-4 h-4" />
                            Important Message
                        </motion.span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            <span className="text-[var(--text-primary)]">Watch This </span>
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                                Before Booking
                            </span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl mb-10"
                        style={{
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
                        }}
                    >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                title="Consultation Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ border: 'none' }}
                            />
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-[#D4AF37]/20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center"
                    >
                        <motion.button
                            onClick={onReadyClick}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(212, 175, 55, 0.5)' }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 sm:px-10 py-4 rounded-full text-lg sm:text-xl font-bold text-[#0A0E1F] overflow-hidden group relative"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                                boxShadow: '0 6px 25px rgba(212, 175, 55, 0.35)',
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                            />
                            <span className="relative z-10">
                                Yes, I'm Ready for a 1-to-1 Consultation
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
