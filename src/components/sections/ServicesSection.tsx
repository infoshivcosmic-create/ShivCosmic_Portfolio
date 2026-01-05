"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Factory, Flower2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Home,
        title: "Residential Vastu",
        subtitle: "Homes, Flats & Bungalows",
        description: "Whether you're moving into a new home or want to improve your current space, I'll analyze your floor plan and birth chart to suggest practical changes. No breaking walls — just smart adjustments to your kitchen, bedroom, and entrance.",
        tags: ["Energy Flow", "Directional Balance", "Birth Chart Alignment", "Remedies"],
    },
    {
        icon: Building2,
        title: "Commercial Vastu",
        subtitle: "Shops, Offices & Studios",
        description: "Running a business from a space that works against you? I'll help you rearrange your office layout, seating positions, and entrance to improve cash flow and reduce workplace friction.",
        tags: ["Wealth Flow", "Client Attraction", "Team Harmony", "Growth Focus"],
    },
    {
        icon: Flower2,
        title: "Spiritual Spaces",
        subtitle: "Ashrams & Healing Centers",
        description: "For yoga studios, meditation centers, and wellness spaces that need higher energy. I use placement principles and sacred geometry to make your space feel right for healing work.",
        tags: ["Sacred Geometry", "Sound Integration", "Yantra Placement", "Positive Energy"],
    },
    {
        icon: Factory,
        title: "Industrial Vastu",
        subtitle: "Factories & Warehouses",
        description: "Factory outputs depend on more than machinery. I'll optimize your layout, equipment positions, and flow patterns to reduce breakdowns and improve efficiency.",
        tags: ["Layout Planning", "Machine Placement", "Energy Flow", "Output Boost"],
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-16 md:py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[150px]"
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
                        Our Services
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-[var(--text-primary)]">Comprehensive </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Alignment
                        </span>
                        <span className="text-[var(--text-primary)]"> Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto"
                    >
                        From homes to high-rise offices, from factories to meditation centers —
                        we bring cosmic alignment to every type of space.
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="group relative"
                        >
                            <motion.div
                                className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start p-6 lg:p-8 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] transition-all duration-300"
                                whileHover={{
                                    y: -5,
                                    borderColor: 'rgba(167, 139, 250, 0.5)',
                                }}
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.08) 0%, transparent 50%)',
                                        }}
                                    />
                                </div>

                                {/* Large Number with gradient */}
                                <div className="flex-shrink-0 relative">
                                    <span
                                        className="text-[5rem] lg:text-[8rem] font-bold leading-none bg-gradient-to-br from-[#A78BFA]/15 to-transparent bg-clip-text text-transparent group-hover:from-[#A78BFA]/25 transition-all"
                                    >
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-[var(--accent)] text-sm font-medium">
                                                {service.subtitle}
                                            </p>
                                        </div>

                                        {/* Animated Icon */}
                                        <div
                                            className="hidden sm:flex w-14 h-14 rounded-xl items-center justify-center relative overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                                border: '1px solid rgba(167, 139, 250, 0.3)',
                                            }}
                                        >
                                            {/* Glow on hover */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="absolute inset-0 bg-[var(--accent)]/20 blur-md" />
                                            </div>
                                            <service.icon className="w-7 h-7 text-[var(--accent)] relative z-10 group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>

                                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">
                                        {service.description}
                                    </p>

                                    {/* Tags with hover effects */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--background)] border border-[var(--border)] text-[var(--text-secondary)] cursor-default transition-all duration-200"
                                                whileHover={{
                                                    backgroundColor: 'rgba(167, 139, 250, 0.15)',
                                                    borderColor: 'rgba(167, 139, 250, 0.4)',
                                                    color: 'var(--accent)',
                                                }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Enhanced CTA */}
                                    <Link href="#contact">
                                        <motion.span
                                            className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="relative">
                                                Learn More
                                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </motion.span>
                                    </Link>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-b-2xl" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
