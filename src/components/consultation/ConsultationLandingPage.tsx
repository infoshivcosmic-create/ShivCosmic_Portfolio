"use client";

import { Star, Clock, User, Phone, Check, ArrowRight, Sparkles, Play } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useState } from "react";

// Dynamically import shader background
const AnimatedShaderBackground = dynamic(
    () => import("@/components/ui/animated-shader-background"),
    { ssr: false }
);

// Animation variants
// Animation variants - "Premium Smooth"
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function ConsultationLandingPage() {
    const shouldReduceMotion = useReducedMotion();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const scrollToBooking = () => {
        const element = document.getElementById('booking');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-[var(--background)]" style={{ scrollBehavior: 'smooth' }}>
            {/* Sacred Geometry Pattern Background */}
            <div className="fixed inset-0 pointer-events-none opacity-5 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, rgba(212, 175, 55, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 🔥 PREMIUM HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
                {/* Animated Background */}
                {!shouldReduceMotion && <AnimatedShaderBackground />}

                {/* Premium gradient orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
                            filter: 'blur(100px)'
                        }}
                    />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
                            filter: 'blur(100px)'
                        }}
                    />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-6xl mx-auto text-center relative z-10"
                >
                    {/* Premium Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '0.5px solid rgba(212, 175, 55, 0.3)',
                            willChange: 'transform, opacity'
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: 'var(--gold-accent)' }} />
                        <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--gold-accent)', fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.5px' }}>
                            Premium Vastu Consultation
                        </span>
                    </motion.div>

                    {/* Main Headline - Serif */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1]"
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            willChange: 'transform, opacity',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        <span className="block text-[var(--text-primary)] mb-3">Transform Your Space</span>
                        <span className="block bg-gradient-to-r from-white via-[#E8C878] to-[#D4AF37] bg-clip-text text-transparent">
                            With Expert Guidance
                        </span>
                    </motion.h1>

                    {/* Expert Photo with Ethereal Glow */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative w-44 h-44 md:w-56 md:h-56 mx-auto mb-10"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {/* Vibrant Energy Glow */}
                        <div className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0.1) 40%, transparent 70%)',
                                filter: 'blur(40px)',
                                transform: 'scale(1.3)'
                            }}
                        />
                        <div className="absolute inset-0 rounded-full animate-pulse"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
                                filter: 'blur(30px)',
                                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                            }}
                        />

                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 shadow-2xl"
                            style={{
                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25), inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <Image
                                src="/founder.png"
                                alt="Mr. Shivsharan Manshetti"
                                fill
                                className="object-cover"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-[var(--gold-accent)] flex items-center justify-center shadow-lg"
                            style={{
                                boxShadow: '0 10px 30px -10px rgba(212, 175, 55, 0.6)'
                            }}
                        >
                            <Check className="w-7 h-7 text-black" />
                        </div>
                    </motion.div>

                    {/* Expert Name - Serif */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2"
                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                            Mr. Shivsharan Manshetti
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]"
                            style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}
                        >
                            Master Vastu Consultant • 12+ Years Experience
                        </p>
                    </motion.div>

                    {/* Premium Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-10 mb-14"
                    >
                        <motion.div
                            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, transition: { duration: 0.2 } }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '0.5px solid rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <User className="w-6 h-6" style={{ color: 'var(--gold-accent)' }} />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold" style={{ color: 'var(--gold-accent)', fontFamily: 'var(--font-jakarta), sans-serif' }}>1000+</div>
                                <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>Clients Guided</div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05, transition: { duration: 0.2 } }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '0.5px solid rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <Star className="w-6 h-6 fill-current" style={{ color: 'var(--gold-accent)' }} />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold" style={{ color: 'var(--gold-accent)', fontFamily: 'var(--font-jakarta), sans-serif' }}>4.9/5</div>
                                <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>Rating</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Premium CTA with Breathing Pulse */}
                    <motion.button
                        variants={fadeInUp}
                        onClick={scrollToBooking}
                        whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-12 py-6 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300"
                        style={{
                            background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 50%, #D4AF37 100%)',
                            boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                            willChange: 'transform',
                            fontFamily: 'var(--font-jakarta), sans-serif',
                            letterSpacing: '0.3px',
                            animation: shouldReduceMotion ? 'none' : 'breathing-glow 5s ease-in-out infinite'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="relative z-10 flex items-center gap-2 text-black font-semibold">
                            Book Your Consultation Now
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </motion.button>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-8 text-[var(--text-secondary)]"
                        style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}
                    >
                        ✓ Personalized guidance • ✓ Proven results • ✓ Limited slots
                    </motion.p>
                </motion.div>
            </section>

            {/* 🎥 PREMIUM VIDEO SECTION */}
            <section className="relative px-4 overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5"
                            style={{ fontFamily: 'var(--font-playfair), serif', letterSpacing: '-0.01em' }}
                        >
                            See How It Works
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]"
                            style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}
                        >
                            Watch this before booking your consultation
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative aspect-video rounded-3xl overflow-hidden"
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '0.5px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.15)',
                            borderRadius: '24px',
                            willChange: 'transform, opacity'
                        }}
                    >
                        {!isVideoPlaying && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-[var(--gold-accent)] opacity-20 blur-3xl animate-pulse" />
                                    <div className="relative w-20 h-20 rounded-full bg-[var(--gold-accent)] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                                        style={{
                                            boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4)'
                                        }}
                                    >
                                        <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <iframe
                            src={`https://www.youtube.com/embed/g6Xbmtsh0K0?rel=0&modestbranding=1&showinfo=0${isVideoPlaying ? '&autoplay=1' : ''}`}
                            title="Consultation Video"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* 💎 PREMIUM GLASSMORPHISM PRICING */}
            <section id="booking" className="relative px-4 overflow-hidden" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
                <div className="max-w-2xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5"
                            style={{ fontFamily: 'var(--font-playfair), serif', letterSpacing: '-0.01em' }}
                        >
                            Investment
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]"
                            style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}
                        >
                            One-time payment for lifetime transformation
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative p-12 md:p-14 rounded-3xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '0.5px solid',
                            borderImage: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(255, 255, 255, 0.1)) 1',
                            boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px'
                        }}
                    >
                        {/* Offer Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                            <span className="px-7 py-3 rounded-full text-black text-sm font-semibold shadow-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 100%)',
                                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                                    fontFamily: 'var(--font-jakarta), sans-serif',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Limited Time Offer
                            </span>
                        </div>

                        {/* Details */}
                        <div className="space-y-7 mb-10 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        border: '0.5px solid rgba(212, 175, 55, 0.2)'
                                    }}
                                >
                                    <Clock className="w-7 h-7" style={{ color: 'var(--gold-accent)' }} />
                                </div>
                                <div>
                                    <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>Duration</div>
                                    <div className="text-xl font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>1 Hour One-to-One</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        border: '0.5px solid rgba(212, 175, 55, 0.2)'
                                    }}
                                >
                                    <User className="w-7 h-7" style={{ color: 'var(--gold-accent)' }} />
                                </div>
                                <div>
                                    <div className="text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>Format</div>
                                    <div className="text-xl font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>Personal Consultation</div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="text-center py-10 mb-10"
                            style={{
                                borderTop: '0.5px solid rgba(255, 255, 255, 0.1)',
                                borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="mb-3">
                                <span className="text-2xl text-[var(--text-secondary)] line-through" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>₹2,000</span>
                            </div>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-7xl md:text-8xl font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 50%, #D4AF37 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontFamily: 'var(--font-playfair), serif'
                                    }}
                                >
                                    ₹999
                                </span>
                            </div>
                            <p className="mt-4 text-sm font-medium" style={{ color: 'var(--gold-accent)', fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}>
                                Save ₹1,001 • 50% OFF
                            </p>
                        </div>

                        {/* Book Button */}
                        <a
                            href="https://wa.me/919158202870?text=Hi,%20I%20want%20to%20book%20a%201-on-1%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-6 rounded-full text-center text-xl font-semibold text-black transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 50%, #D4AF37 100%)',
                                boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                                fontFamily: 'var(--font-jakarta), sans-serif',
                                letterSpacing: '0.3px'
                            }}
                        >
                            Book Your Slot Now
                        </a>

                        <p className="text-center mt-6 text-sm text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                            💳 Secure payment • 🔒 Money-back guarantee
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ⭐ GLASSMORPHISM TESTIMONIALS */}
            <section className="relative px-4 overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5"
                            style={{ fontFamily: 'var(--font-playfair), serif', letterSpacing: '-0.01em' }}
                        >
                            Client Success Stories
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]"
                            style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}
                        >
                            Join 1000+ satisfied clients
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Rajesh Kumar", text: "Transformative experience. My business has grown 3x." },
                            { name: "Priya Sharma", text: "Personalized guidance that actually works. Highly recommended!" },
                            { name: "Amit Patel", text: "Professional, clear, and results-driven. Worth every rupee." },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '0.5px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
                                    borderRadius: '24px'
                                }}
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--gold-accent)' }} />
                                    ))}
                                </div>
                                <p className="text-[var(--text-secondary)] mb-7 leading-relaxed text-lg" style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.2px' }}>
                                    "{testimonial.text}"
                                </p>
                                <p className="font-semibold" style={{ color: 'var(--gold-accent)', fontFamily: 'var(--font-jakarta), sans-serif' }}>
                                    — {testimonial.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🚀 FINAL BREATHING CTA */}
            <section className="relative px-4 overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-8 leading-[1.1]"
                            style={{ fontFamily: 'var(--font-playfair), serif', letterSpacing: '-0.02em' }}
                        >
                            Ready to Transform<br />Your Space?
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] mb-12" style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}>
                            Limited slots available this month
                        </p>

                        <a
                            href="https://wa.me/919158202870?text=Hi,%20I%20want%20to%20book%20a%201-on-1%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-14 py-7 rounded-full text-2xl font-semibold text-black transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 50%, #D4AF37 100%)',
                                boxShadow: '0 20px 50px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                                fontFamily: 'var(--font-jakarta), sans-serif',
                                letterSpacing: '0.3px',
                                animation: 'breathing-glow 5s ease-in-out infinite'
                            }}
                        >
                            Book Your Consultation Now
                        </a>

                        <p className="mt-8 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                            🔥 Only 5 slots left this week
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 📞 CONTACT */}
            <section className="relative px-4" style={{ paddingTop: '100px', paddingBottom: '100px', borderTop: '0.5px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8" style={{ fontFamily: 'var(--font-jakarta), sans-serif', letterSpacing: '0.3px' }}>
                        Have questions? Call us directly
                    </p>
                    <a
                        href="tel:+919158202870"
                        className="inline-flex items-center gap-4 px-10 py-5 rounded-3xl hover:scale-105 transition-transform"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '0.5px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px'
                        }}
                    >
                        <Phone className="w-7 h-7" style={{ color: 'var(--gold-accent)' }} />
                        <span className="text-3xl font-bold"
                            style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #E8C878 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontFamily: 'var(--font-jakarta), sans-serif'
                            }}
                        >
                            +91 91582 02870
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}
