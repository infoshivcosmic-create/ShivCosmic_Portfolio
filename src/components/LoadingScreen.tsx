"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [showTagline, setShowTagline] = useState(false);

    useEffect(() => {
        // Show tagline after signature animation
        const taglineTimer = setTimeout(() => {
            setShowTagline(true);
        }, 800);

        // Reduced loading duration for better LCP
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
            clearTimeout(taglineTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed inset-0 z-[10000] bg-[#0C0C0C] flex flex-col items-center justify-center"
                >
                    <div className="relative z-10 text-center px-8">
                        {/* Logo icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <img
                                src="/logo-icon.png"
                                alt=""
                                className="w-20 h-20 mx-auto opacity-90"
                                width={80}
                                height={80}
                            />
                        </motion.div>

                        {/* Main text */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <motion.span
                                    className="inline-block text-[var(--text-primary)]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                >
                                    Shiv
                                </motion.span>
                                <motion.span
                                    className="inline-block mx-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.3 }}
                                >
                                    {" "}
                                </motion.span>
                                <motion.span
                                    className="inline-block italic font-normal"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    style={{
                                        background: "linear-gradient(135deg, #E8E8E8 0%, #A78BFA 50%, #C4B5FD 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Cosmic
                                </motion.span>
                            </motion.h1>
                        </div>

                        {/* Simple underline */}
                        <motion.div
                            className="h-[2px] w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />

                        {/* Tagline */}
                        <motion.p
                            className="mt-6 text-base text-[var(--text-secondary)] font-light tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={showTagline ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4 }}
                        >
                            Aligning Destiny with Space
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
