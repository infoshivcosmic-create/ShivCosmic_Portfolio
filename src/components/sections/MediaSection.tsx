"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink, Eye } from "lucide-react";

const mediaAppearances = [
    {
        id: "1",
        title: "The Science Behind Vastu",
        context: "Interview on cosmic energy principles",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        platform: "YouTube",
        views: "4K",
    },
    {
        id: "2",
        title: "Astro Mapping™ Explained",
        context: "Deep dive into the methodology",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        platform: "YouTube",
        views: "4K",
    },
    {
        id: "3",
        title: "Business Success Through Vastu",
        context: "Panel discussion on commercial spaces",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        platform: "YouTube",
        views: "4K",
    },
    {
        id: "4",
        title: "Health & Home Environment",
        context: "How your space affects well-being",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        platform: "YouTube",
        views: "4K",
    },
];

interface VideoCardProps {
    video: typeof mediaAppearances[0];
    index: number;
    isInView: boolean;
}

function VideoCard({ video, index, isInView }: VideoCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-2xl"
            aria-label={`Watch: ${video.title} - ${video.context}`}
        >
            <motion.div
                className="relative overflow-hidden rounded-2xl bg-[var(--background-card)] border border-[var(--border)] transition-all duration-300"
                whileHover={{
                    y: -5,
                    borderColor: 'rgba(167, 139, 250, 0.5)',
                }}
                style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
            >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
                        }}
                    />
                </div>

                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                    {/* Thumbnail Image with Zoom */}
                    <motion.img
                        src={video.thumbnail}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-card)] via-black/20 to-transparent opacity-70" />

                    {/* Dark Overlay on Hover */}
                    <motion.div
                        className="absolute inset-0 bg-black/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Play Button with Pulse */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0.7, scale: 0.9 }}
                        animate={{
                            opacity: isHovered ? 1 : 0.7,
                            scale: isHovered ? 1 : 0.9
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative">
                            {/* Static glow rings */}
                            <div
                                className="absolute inset-0 rounded-full bg-[var(--accent)]/20 scale-125"
                            />
                            <div
                                className="absolute inset-0 rounded-full bg-[var(--accent)]/10 scale-150"
                            />

                            {/* Play button */}
                            <motion.div
                                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.95) 0%, rgba(99, 102, 241, 0.95) 100%)',
                                    boxShadow: '0 4px 20px rgba(167, 139, 250, 0.4)',
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" fill="currentColor" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Platform Badge with glow */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <span
                            className="px-2.5 py-1 rounded-full text-white text-xs font-medium"
                            style={{
                                background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                                boxShadow: '0 2px 10px rgba(255, 0, 0, 0.3)',
                            }}
                        >
                            {video.platform}
                        </span>
                    </div>

                    {/* Views Badge */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-xs font-medium">
                            <Eye className="w-3 h-3" />
                            {video.views}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 relative">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                        {video.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-1">
                        {video.context}
                    </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
            </motion.div>
        </motion.a>
    );
}

export default function MediaSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="media" className="py-16 md:py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                {/* Static gradient orbs */}
                <div
                    className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-1/3 left-0 w-[300px] h-[300px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-semibold mb-6 cursor-default"
                        style={{
                            boxShadow: '0 0 20px rgba(167, 139, 250, 0.15)',
                        }}
                    >
                        Media & Interviews
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
                    >
                        <span className="text-[var(--text-primary)]">Featured </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Appearances
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-xl mx-auto"
                    >
                        Conversations, interviews, and deep dives on Vastu, astrology, and space optimization.
                    </motion.p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                    {mediaAppearances.map((video, index) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* View All Link - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-10 sm:mt-12"
                >
                    <motion.a
                        href="https://www.youtube.com/@shivcosmicenergysolution"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--text-secondary)] text-sm font-medium transition-all duration-300 group"
                        whileHover={{
                            borderColor: 'rgba(167, 139, 250, 0.6)',
                            color: 'var(--accent)',
                            boxShadow: '0 0 25px rgba(167, 139, 250, 0.2)',
                        }}
                    >
                        View all on YouTube
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
