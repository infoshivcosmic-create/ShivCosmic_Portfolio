"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [phase, setPhase] = useState<"logo" | "tagline" | "exit">("logo");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("tagline"), 600);
        const t2 = setTimeout(() => setPhase("exit"), 1100);
        const t3 = setTimeout(() => setIsLoading(false), 1600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading"
                    className="fixed inset-0 z-[10000] bg-[#0C0C0C] flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit="exit"
                >
                    {/* Content */}
                    <motion.div
                        className="relative z-10 text-center px-8"
                        animate={phase === "exit" ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                    >
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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

                        {/* Name */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <motion.span
                                    className="inline-block text-[var(--text-primary)]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    Shiv
                                </motion.span>
                                <motion.span
                                    className="inline-block mx-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.25 }}
                                >
                                    {" "}
                                </motion.span>
                                <motion.span
                                    className="inline-block italic font-normal"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

                        {/* Underline */}
                        <motion.div
                            className="h-[2px] w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                        />

                        {/* Tagline */}
                        <motion.p
                            className="mt-6 text-base text-[var(--text-secondary)] font-light tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={phase !== "logo" ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            Aligning Destiny with Space
                        </motion.p>
                    </motion.div>

                    {/* Wipe curtains — slide up to reveal page */}
                    <AnimatePresence>
                        {phase === "exit" && (
                            <>
                                {/* Top half wipes up */}
                                <motion.div
                                    key="curtain-top"
                                    className="absolute inset-x-0 top-0 h-1/2 bg-[#0C0C0C] origin-top z-20"
                                    initial={{ scaleY: 1 }}
                                    animate={{ scaleY: 0 }}
                                    transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                                />
                                {/* Bottom half wipes down */}
                                <motion.div
                                    key="curtain-bottom"
                                    className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0C0C0C] origin-bottom z-20"
                                    initial={{ scaleY: 1 }}
                                    animate={{ scaleY: 0 }}
                                    transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
