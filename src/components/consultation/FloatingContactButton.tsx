"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
    const phoneNumber = "7039902917";

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            <motion.a
                href={`https://wa.me/91${phoneNumber}?text=Hi, I want to book a consultation with Shiv Sir`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                }}
                aria-label="WhatsApp"
            >
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </motion.a>

            <motion.a
                href={`tel:+91${phoneNumber}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
                }}
                aria-label="Call Now"
            >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A0E1F]" />
            </motion.a>
        </div>
    );
}
