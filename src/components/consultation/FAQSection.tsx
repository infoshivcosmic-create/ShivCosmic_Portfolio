"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass rounded-xl overflow-hidden"
        >
            <button
                onClick={onClick}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-200"
            >
                <span className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-[var(--accent)]" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What happens during a consultation?",
            answer: "During your consultation, Shiv Sir will analyze your space using his proprietary Astro Mapping™ technique. You'll discuss your challenges, goals, and receive personalized Vastu recommendations tailored to your specific situation. Each session is comprehensive and focused on delivering practical solutions."
        },
        {
            question: "How long does a consultation take?",
            answer: "A typical consultation session lasts 60-90 minutes, depending on the complexity of your space and requirements. This ensures adequate time for thorough analysis and detailed recommendations. Follow-up sessions, if needed, are usually shorter."
        },
        {
            question: "Do you offer online consultations?",
            answer: "Yes! We offer both in-person and online consultations via video call. Online consultations are just as effective, requiring only photos/floor plans of your space. This makes our services accessible to clients across India and internationally."
        },
        {
            question: "What information do I need to provide?",
            answer: "For the best results, please provide floor plans or layout sketches of your space, photos of key areas, your date of birth, and specific concerns or goals you want to address. Don't worry if you don't have everything - we'll guide you through the process."
        },
        {
            question: "Can I get a refund if I'm not satisfied?",
            answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with your consultation within 7 days, we'll provide a full refund or offer a complimentary follow-up session. Your satisfaction is our priority."
        },
        {
            question: "How soon will I see results?",
            answer: "Many clients report feeling positive changes within 21-40 days of implementing the recommended Vastu corrections. However, results vary based on the specific changes made and your individual circumstances. Shiv Sir provides guidance on which changes to prioritize for fastest results."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.04) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Everything you need to know about our consultation process
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-[var(--text-secondary)] text-lg mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="https://wa.me/919834151702"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
                    >
                        Contact us on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
