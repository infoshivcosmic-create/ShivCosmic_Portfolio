"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Search, Lightbulb, Sparkles } from "lucide-react";

interface ProcessStepProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

function ProcessStep({ number, icon, title, description, delay }: ProcessStepProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="relative flex flex-col items-center text-center group"
        >
            {/* Number Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--background)] flex items-center justify-center font-bold text-lg z-10">
                {number}
            </div>

            {/* Card */}
            <div className="glass rounded-2xl p-8 md:p-10 w-full h-full transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    {icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4">
                    {title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function ProcessFlow() {
    return (
        <section className="py-16 md:py-24 bg-[var(--background-secondary)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Simple 4-step process to transform your space
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto">
                    <ProcessStep
                        number="1"
                        icon={<Calendar className="w-8 h-8 text-[var(--accent)]" />}
                        title="Book Consultation"
                        description="Schedule your personalized session with Shiv Sir at your convenience"
                        delay={0}
                    />
                    <ProcessStep
                        number="2"
                        icon={<Search className="w-8 h-8 text-[var(--accent)]" />}
                        title="Space Analysis"
                        description="Expert evaluation of your space using advanced Astro Mapping™ technique"
                        delay={0.15}
                    />
                    <ProcessStep
                        number="3"
                        icon={<Lightbulb className="w-8 h-8 text-[var(--accent)]" />}
                        title="Get Solutions"
                        description="Receive custom recommendations tailored to your unique situation"
                        delay={0.3}
                    />
                    <ProcessStep
                        number="4"
                        icon={<Sparkles className="w-8 h-8 text-[var(--accent)]" />}
                        title="Transform"
                        description="Implement changes and experience positive results in your life"
                        delay={0.45}
                    />
                </div>

                {/* Bottom CTA hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-[var(--text-secondary)] text-lg">
                        Ready to get started? <span className="text-[var(--accent)] font-medium">Book your consultation below</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
