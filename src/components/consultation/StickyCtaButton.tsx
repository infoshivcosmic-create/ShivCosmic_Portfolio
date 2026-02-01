"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

interface StickyCtaButtonProps {
    onClick: () => void;
}

export default function StickyCtaButton({ onClick }: StickyCtaButtonProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"
                >
                    <div className="section-container">
                        <motion.button
                            onClick={onClick}
                            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-full text-lg font-bold text-[#0A0E1F] overflow-hidden group relative"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                                boxShadow: '0 6px 30px rgba(212, 175, 55, 0.4)',
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                            />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Book Consultation Now
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
