"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Send, CheckCircle, ArrowUpRight } from "lucide-react";

const spaceTypes = [
    "Residential",
    "Commercial",
    "Industrial",
    "Spiritual Space",
    "Other",
];

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        spaceType: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[rgba(167,139,250,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(167,139,250,0.2)] transition-all duration-300";

    return (
        <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                {/* Static gradient orbs */}
                <div
                    className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[150px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[130px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                {/* Large Typography Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-16 px-2"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                        <span className="text-[var(--text-primary)]">Let&apos;s </span>
                        <span className="bg-gradient-to-r from-[#A78BFA] via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                            Transform
                        </span>
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"><br /></span>
                        <span className="text-[var(--text-primary)]"> Your Space</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
                        Ready to align your space with cosmic energies? Get in touch.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Email Card - Enhanced */}
                        <motion.a
                            href="mailto:info.shivcosmic@gmail.com"
                            className="group block relative overflow-hidden rounded-2xl bg-[var(--background-card)] border border-[var(--border)] p-6 transition-all duration-300"
                            whileHover={{
                                y: -3,
                                borderColor: 'rgba(167, 139, 250, 0.5)',
                            }}
                            style={{
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
                                    }}
                                />
                            </div>

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                            border: '1px solid rgba(167, 139, 250, 0.3)',
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Mail className="w-6 h-6 text-[var(--accent)]" />
                                    </motion.div>
                                    <div>
                                        <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1">Email</p>
                                        <p className="text-[var(--text-primary)] font-semibold text-sm sm:text-base lg:text-lg group-hover:text-[var(--accent)] transition-colors break-all">info.shivcosmic@gmail.com</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
                        </motion.a>

                        {/* Location Card - Enhanced */}
                        <motion.div
                            className="group relative overflow-hidden rounded-2xl bg-[var(--background-card)] border border-[var(--border)] p-6 transition-all duration-300"
                            whileHover={{
                                y: -3,
                                borderColor: 'rgba(167, 139, 250, 0.5)',
                            }}
                            style={{
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
                                    }}
                                />
                            </div>

                            <div className="flex items-center gap-4 relative z-10">
                                <motion.div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                        border: '1px solid rgba(167, 139, 250, 0.3)',
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <MapPin className="w-6 h-6 text-[var(--accent)]" />
                                </motion.div>
                                <div>
                                    <p className="text-[var(--text-secondary)] text-sm mb-1">Office Location</p>
                                    <p className="text-[var(--text-primary)] font-semibold group-hover:text-[var(--accent)] transition-colors">BA IRIS, Baif Road</p>
                                    <p className="text-[var(--text-secondary)] text-sm">Wagholi, Pune – 412207, Maharashtra</p>
                                </div>
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
                        </motion.div>

                        {/* Social Links - Enhanced with brand colors */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                {
                                    name: "Instagram",
                                    href: "https://www.instagram.com/shivcosmicenergysolutions/",
                                    icon: "📸",
                                    gradient: "from-[#E1306C] via-[#F77737] to-[#FCAF45]",
                                    hoverBg: "rgba(225, 48, 108, 0.15)"
                                },
                                {
                                    name: "Facebook",
                                    href: "https://www.facebook.com/shivcosmicenergysolutions/",
                                    icon: "📘",
                                    gradient: "from-[#1877F2] to-[#3b5998]",
                                    hoverBg: "rgba(24, 119, 242, 0.15)"
                                },
                                {
                                    name: "YouTube",
                                    href: "https://www.youtube.com/@shivcosmicenergysolution",
                                    icon: "🎬",
                                    gradient: "from-[#FF0000] to-[#CC0000]",
                                    hoverBg: "rgba(255, 0, 0, 0.15)"
                                },
                                {
                                    name: "WhatsApp",
                                    href: "https://wa.me/917039902917",
                                    icon: "💬",
                                    gradient: "from-[#25D366] to-[#128C7E]",
                                    hoverBg: "rgba(37, 211, 102, 0.15)"
                                },
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-5 py-2.5 rounded-full overflow-hidden border border-[var(--border)] text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                    style={{
                                        background: 'var(--background-card)',
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: 'rgba(167, 139, 250, 0.6)',
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Gradient background on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: social.hoverBg }}
                                    />

                                    {/* Icon */}
                                    <span className="text-base relative z-10 group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>

                                    {/* Text with gradient on hover */}
                                    <span className={`relative z-10 text-[var(--text-secondary)] group-hover:bg-gradient-to-r group-hover:${social.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                                        {social.name}
                                    </span>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-md -z-10"
                                        style={{
                                            background: `linear-gradient(135deg, ${social.hoverBg}, transparent)`,
                                        }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            className="relative overflow-hidden rounded-2xl bg-[var(--background-card)] border border-[var(--border)] p-6 lg:p-8"
                            style={{
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            {/* Form glow effect */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.05) 0%, transparent 40%)',
                                    }}
                                />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-[var(--text-primary)] font-medium mb-2 text-sm">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={inputClasses}
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-[var(--text-primary)] font-medium mb-2 text-sm">
                                            Email
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
                                        <label htmlFor="phone" className="block text-[var(--text-primary)] font-medium mb-2 text-sm">
                                            Phone
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

                                {/* Space Type */}
                                <div>
                                    <label htmlFor="spaceType" className="block text-[var(--text-primary)] font-medium mb-2 text-sm">
                                        Type of Space
                                    </label>
                                    <select
                                        id="spaceType"
                                        required
                                        value={formData.spaceType}
                                        onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select space type</option>
                                        {spaceTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-[var(--text-primary)] font-medium mb-2 text-sm">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="Tell us about your space..."
                                    />
                                </div>

                                {/* Submit Button - Enhanced */}
                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        scale: 1.01,
                                        boxShadow: '0 0 30px rgba(167, 139, 250, 0.5), 0 0 60px rgba(167, 139, 250, 0.3)',
                                    }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full py-4 px-6 rounded-xl font-semibold text-[var(--background)] flex items-center justify-center gap-2 relative overflow-hidden group"
                                    style={{
                                        background: 'linear-gradient(135deg, #A78BFA 0%, #818CF8 50%, #6366F1 100%)',
                                        boxShadow: '0 4px 20px rgba(167, 139, 250, 0.4)',
                                    }}
                                >
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                    />

                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5 relative z-10" />
                                            <span className="relative z-10">Request Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 relative z-10" />
                                            <span className="relative z-10">Request Consultation</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
