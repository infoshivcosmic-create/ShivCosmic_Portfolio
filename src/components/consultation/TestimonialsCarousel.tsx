"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Mehta",
        role: "Business Owner",
        feedback: "Shiv Sir's consultation transformed my office space. Revenue increased by 40% within 3 months!",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Homemaker",
        feedback: "The energy in our home completely changed. Family harmony and peace like never before.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "IT Professional",
        feedback: "Practical, scientific approach. Got promotion within weeks of implementing his suggestions.",
        rating: 5,
    },
    {
        id: 4,
        name: "Sneha Desai",
        role: "Entrepreneur",
        feedback: "His Astro Mapping™ technique is brilliant. My business is thriving now.",
        rating: 5,
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Real Estate Developer",
        feedback: "Expert guidance for commercial properties. All my projects are now Vastu-compliant.",
        rating: 5,
    },
    {
        id: 6,
        name: "Anjali Kapoor",
        role: "Doctor",
        feedback: "Simple changes, profound results. My clinic's patient flow doubled!",
        rating: 5,
    },
];

export default function TestimonialsCarousel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-[var(--text-primary)]">What </span>
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                            People Say
                        </span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Real results from real people who transformed their spaces
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group"
                        >
                            <div
                                className="relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 h-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(26, 31, 58, 0.6) 100%)',
                                    borderColor: 'rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                {/* Gradient hover effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
                                    }}
                                />

                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <Quote className="w-16 h-16 text-[#D4AF37]" />
                                </div>

                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * i }}
                                        >
                                            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-[var(--text-secondary)] mb-5 relative z-10 leading-relaxed text-base">
                                    "{testimonial.feedback}"
                                </p>

                                <div className="relative z-10">
                                    <p className="font-bold text-[var(--text-primary)] text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-[#D4AF37] font-medium">{testimonial.role}</p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37]/60 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
