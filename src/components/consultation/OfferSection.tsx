"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Clock, Users, Video } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

interface OfferSectionProps {
    onBookNowClick: () => void;
}

export default function OfferSection({ onBookNowClick }: OfferSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        { icon: Clock, text: "1 Full Hour One-on-One Session" },
        { icon: Video, text: "Personal Video/In-Person Consultation" },
        { icon: CheckCircle, text: "Detailed Astro Mapping™ Analysis" },
        { icon: CheckCircle, text: "Customized Action Plan" },
        { icon: CheckCircle, text: "Post-Session Support via WhatsApp" },
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#0A0E1F] via-[#1A1F3A] to-[#0A0E1F] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-6">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-6 py-2 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold uppercase tracking-wide animate-pulse"
                        >
                            ⚡ Limited Time Offer
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden backdrop-blur-2xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(26, 31, 58, 0.9) 50%, rgba(10, 14, 31, 0.9) 100%)',
                            border: '2px solid rgba(212, 175, 55, 0.4)',
                            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 60px rgba(212, 175, 55, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <div className="p-8 sm:p-10 lg:p-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
                                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                                    1-to-1 Personal Consultation
                                </span>
                            </h2>

                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <span className="text-2xl sm:text-3xl text-gray-500 line-through">₹1,999</span>
                                    <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#D4AF37]">₹999</span>
                                </div>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    <span className="font-semibold text-red-400">Save ₹1,000</span> • One-Time Payment
                                </p>
                            </div>

                            <div className="mb-10">
                                <CountdownTimer />
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6">
                                    What You'll Get:
                                </h3>
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                            className="flex items-center gap-3 text-gray-200 group/item"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.1) 100%)',
                                                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                                                }}
                                            >
                                                <feature.icon className="w-5 h-5 text-[#D4AF37]" />
                                            </div>
                                            <span className="text-base sm:text-lg font-medium">{feature.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                onClick={onBookNowClick}
                                whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-bold text-[#0A0E1F] overflow-hidden group relative"
                                style={{
                                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                                    boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                />
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <Users className="w-6 h-6" />
                                    Book Consultation Now
                                </span>
                            </motion.button>

                            <p className="text-center text-gray-400 text-sm mt-6">
                                🔒 Secure Payment • 100% Confidential • Money-Back Guarantee
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
