"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Mail, Phone, User, CheckCircle, Send } from "lucide-react";

export default function BookingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Booking submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", preferredDate: "", message: "" });
        }, 5000);
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl backdrop-blur-sm border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all" +
        " bg-[rgba(255,255,255,0.03)] border-[rgba(212,175,55,0.25)]" +
        " focus:border-[#D4AF37] focus:ring-[#D4AF37]/30" +
        " hover:border-[rgba(212,175,55,0.4)]";

    return (
        <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            <span className="text-[var(--text-primary)]">Secure Your </span>
                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                                Consultation Slot
                            </span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg">
                            Fill the form below and we'll confirm your booking within 24 hours
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl p-8 sm:p-10 backdrop-blur-2xl border"
                        style={{
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(26, 31, 58, 0.7) 50%, rgba(10, 14, 31, 0.8) 100%)',
                            borderColor: 'rgba(212, 175, 55, 0.3)',
                            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 175, 55, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Booking Received! 🎉
                                </h3>
                                <p className="text-gray-300 text-lg mb-2">
                                    Thank you for booking your consultation with Shiv Sir.
                                </p>
                                <p className="text-gray-400">
                                    We'll contact you within 24 hours to confirm your session.
                                </p>
                                <p className="text-[#D4AF37] font-semibold mt-4">
                                    Check your email for confirmation details.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2 flex items-center gap-2">
                                        <User className="w-4 h-4 text-[#D4AF37]" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={inputClasses}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-[#D4AF37]" />
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={inputClasses}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-white font-medium mb-2 flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-[#D4AF37]" />
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={inputClasses}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="preferredDate" className="block text-white font-medium mb-2 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                                        Preferred Date & Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Brief Description (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="Tell us briefly about your concern or what you need help with..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(212, 175, 55, 0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl text-lg font-bold text-[#0A0E1F] overflow-hidden group relative"
                                    style={{
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                                        boxShadow: '0 6px 25px rgba(212, 175, 55, 0.35)',
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                    />
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" />
                                        Confirm Booking & Pay ₹999
                                    </span>
                                </motion.button>

                                <p className="text-center text-gray-400 text-sm mt-4">
                                    By booking, you agree to our Terms & Conditions
                                </p>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
