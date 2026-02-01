"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Star, Award, TrendingUp } from "lucide-react";

interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    suffix?: string;
    label: string;
    delay: number;
}

function StatItem({ icon, value, suffix = "", label, delay }: StatItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        const timer = setTimeout(() => {
            requestAnimationFrame(animate);
        }, delay);

        return () => clearTimeout(timer);
    }, [isInView, value, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delay / 1000 }}
            className="flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl glass"
        >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--accent)]/10">
                {icon}
            </div>
            <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-2">
                    {count}{suffix}
                </div>
                <div className="text-base md:text-lg text-[var(--text-secondary)] font-medium">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

export default function StatsShowcase() {
    return (
        <section className="py-16 md:py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Join our community of satisfied clients who transformed their spaces
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <StatItem
                        icon={<Users className="w-7 h-7 text-[var(--accent)]" />}
                        value={1000}
                        suffix="+"
                        label="Clients Guided"
                        delay={0}
                    />
                    <StatItem
                        icon={<Award className="w-7 h-7 text-[var(--accent)]" />}
                        value={12}
                        suffix="+"
                        label="Years Experience"
                        delay={200}
                    />
                    <StatItem
                        icon={<Star className="w-7 h-7 text-[var(--accent)]" />}
                        value={4.9}
                        label="Average Rating"
                        delay={400}
                    />
                    <StatItem
                        icon={<TrendingUp className="w-7 h-7 text-[var(--accent)]" />}
                        value={95}
                        suffix="%"
                        label="Satisfaction Rate"
                        delay={600}
                    />
                </div>
            </div>
        </section>
    );
}
