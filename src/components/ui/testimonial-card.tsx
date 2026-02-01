"use client"

import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar?: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "group flex flex-col rounded-2xl border border-[var(--border)]",
                "bg-gradient-to-b from-[var(--background-card)] to-[var(--background-secondary)]",
                "p-5 text-start sm:p-6",
                "hover:border-[rgba(167,139,250,0.4)]",
                "min-w-[300px] max-w-[320px] sm:max-w-[360px]",
                "transition-all duration-300 relative overflow-hidden",
                className
            )}
            style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            }}
        >
            {/* Top glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.08) 0%, transparent 50%)',
                    }}
                />
            </div>

            {/* Quote decoration */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-[var(--accent)]" />
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 relative z-10">
                {/* Avatar with gradient */}
                <div
                    className="h-12 w-12 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%)',
                        border: '2px solid rgba(167, 139, 250, 0.4)',
                    }}
                >
                    {/* Subtle glow on hover - no animation */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
                            }}
                        />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-br from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent relative z-10">
                        {author.name.charAt(0)}
                    </span>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-base font-semibold leading-none text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {author.name}
                    </h3>
                    <p className="text-sm text-[var(--accent)] mt-1">
                        {author.handle}
                    </p>
                </div>
            </div>

            {/* Testimonial text */}
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] relative z-10">
                &ldquo;{text}&rdquo;
            </p>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
        </Card>
    )
}
