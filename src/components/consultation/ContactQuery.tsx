"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactQuery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const phoneNumber = "7039902917";

    return (
        <section className="py-16 sm:py-20 bg-[var(--background-card)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-8">
                        If you have any query, you can call on the number below 👇
                    </p>

                    <motion.a
                        href={`tel:+91${phoneNumber}`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-2xl sm:text-3xl transition-all"
                        style={{
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
                            border: '2px solid rgba(212, 175, 55, 0.3)',
                            color: '#D4AF37',
                        }}
                    >
                        <Phone className="w-7 h-7" />
                        +91 {phoneNumber}
                    </motion.a>

                    <p className="text-[var(--text-secondary)] text-sm mt-6">
                        Tap to call directly from mobile • Available 10 AM - 7 PM
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8"
                    >
                        <p className="text-[var(--text-secondary)] mb-4">Or message us on WhatsApp:</p>
                        <motion.a
                            href={`https://wa.me/91${phoneNumber}?text=Hi, I want to book a consultation with Shiv Sir`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all"
                            style={{
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                            }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Now
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
