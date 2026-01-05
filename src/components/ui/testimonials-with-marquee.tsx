"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsMarquee({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            id="testimonials"
            className={cn(
                "bg-[var(--background)] text-[var(--text-primary)]",
                "py-16 sm:py-24 px-0 overflow-hidden relative",
                className
            )}
        >
            {/* Background gradient orbs - static */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full blur-[100px] sm:blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 sm:gap-12 text-center relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-3 px-4 sm:gap-5"
                >
                    <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs sm:text-sm font-semibold">
                        Client Stories
                    </span>
                    <h2 className="max-w-[720px] text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        <span className="text-[var(--text-primary)]">What </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base max-w-[600px] font-medium text-[var(--text-secondary)]">
                        {description}
                    </p>
                </motion.div>

                {/* Marquee Container - optimized for smooth performance */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] sm:[--gap:1.5rem] [gap:var(--gap)] flex-row">
                        <div
                            className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee"
                        >
                            {/* Duplicate sets for seamless loop - 2 sets is optimal */}
                            {[...Array(2)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    {/* Gradient overlays for fade effect */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-1/6 bg-gradient-to-r from-[var(--background)] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-1/6 bg-gradient-to-l from-[var(--background)] to-transparent" />
                </div>
            </div>
        </section>
    )
}
