import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Refund Policy | Shiv Cosmic Energy Solutions",
    description: "Refund Policy for Shiv Cosmic Energy Solutions - Understanding our consultation refund and cancellation terms.",
};

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] py-20">
            <div className="section-container max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                    Refund Policy
                </h1>
                <p className="text-[var(--text-secondary)] mb-12">
                    Last updated: December 26, 2025
                </p>

                {/* Content */}
                <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            1. Overview
                        </h2>
                        <p>
                            At Shiv Cosmic Energy Solutions, we are committed to providing high-quality
                            Vastu consulting and Astro Mapping™ services. This Refund Policy outlines
                            the terms and conditions under which refunds may be processed for our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            2. Consultation Services
                        </h2>

                        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 mt-6">
                            Before Consultation Delivery
                        </h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Full Refund:</strong> If you cancel at least 48 hours before
                                your scheduled consultation, you are eligible for a full refund.
                            </li>
                            <li>
                                <strong>50% Refund:</strong> Cancellations made between 24-48 hours
                                before the consultation are eligible for a 50% refund.
                            </li>
                            <li>
                                <strong>No Refund:</strong> Cancellations made less than 24 hours
                                before the scheduled consultation are not eligible for a refund.
                            </li>
                        </ul>

                        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 mt-6">
                            After Consultation Delivery
                        </h3>
                        <p>
                            Once a consultation has been conducted and recommendations/reports have
                            been delivered, refunds are generally not available as the service has
                            been rendered. However, we will address specific concerns on a case-by-case basis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            3. Rescheduling Policy
                        </h2>
                        <p className="mb-4">
                            We understand that schedules can change. Instead of cancellation, we offer
                            flexible rescheduling options:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Free rescheduling if requested 24+ hours in advance</li>
                            <li>One complimentary reschedule per booking</li>
                            <li>Additional reschedules may incur a nominal fee</li>
                            <li>Rescheduled appointments must be within 30 days of original date</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            4. No-Show Policy
                        </h2>
                        <p>
                            If you fail to attend a scheduled consultation without prior notice
                            (no-show), no refund will be provided. We will attempt to contact you
                            15 minutes after the scheduled time. If unreachable, the consultation
                            will be marked as a no-show.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            5. Service Packages
                        </h2>
                        <p className="mb-4">
                            For multi-session or premium service packages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Partial refunds may be available for unused sessions</li>
                            <li>Refund amount will be calculated based on sessions utilized</li>
                            <li>Package discounts will be adjusted proportionally</li>
                            <li>Transfer of package to another person is not permitted</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            6. On-Site Visit Consultations
                        </h2>
                        <p className="mb-4">
                            For on-site property visits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Cancellation must be made at least 72 hours in advance for full refund</li>
                            <li>Travel expenses already incurred are non-refundable</li>
                            <li>If we need to cancel due to unforeseen circumstances, full refund will be provided</li>
                            <li>Rescheduling options are available as per our standard policy</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            7. Report and Analysis Deliverables
                        </h2>
                        <p>
                            Written reports, Astro Mapping™ charts, and analysis documents are
                            prepared specifically for each client. Once these deliverables have
                            been prepared or sent, they are non-refundable as they represent
                            completed intellectual work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            8. Quality Guarantee
                        </h2>
                        <p className="mb-4">
                            We stand behind the quality of our services. If you are unsatisfied
                            with your consultation:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Contact us within 7 days of the consultation</li>
                            <li>Explain your concerns in detail</li>
                            <li>We will review and offer appropriate resolution</li>
                            <li>Resolution may include follow-up consultation or partial credit</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            9. Refund Processing
                        </h2>
                        <p className="mb-4">
                            When a refund is approved:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Refunds will be processed within 7-10 business days</li>
                            <li>Amount will be credited to the original payment method</li>
                            <li>Bank processing times may vary (typically 3-5 additional days)</li>
                            <li>You will receive email confirmation when refund is initiated</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            10. Special Circumstances
                        </h2>
                        <p className="mb-4">
                            We understand that exceptional situations may arise. In cases of:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Medical emergencies</li>
                            <li>Natural disasters or unforeseen events</li>
                            <li>Technical issues on our end</li>
                        </ul>
                        <p className="mt-4">
                            Please contact us directly, and we will work with you to find a fair
                            and reasonable solution.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            11. How to Request a Refund
                        </h2>
                        <p className="mb-4">To request a refund:</p>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>Email us at info.shivcosmic@gmail.com with subject &quot;Refund Request&quot;</li>
                            <li>Include your booking details and payment information</li>
                            <li>Explain the reason for your refund request</li>
                            <li>We will respond within 2 business days</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            12. Contact Information
                        </h2>
                        <p className="mb-4">
                            For refund inquiries or to discuss your specific situation:
                        </p>
                        <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-xl p-6">
                            <p className="font-semibold text-[var(--text-primary)] mb-2">
                                Shiv Cosmic Energy Solutions
                            </p>
                            <p>Email: info.shivcosmic@gmail.com</p>
                            <p>Address: BA IRIS, Baif Road, Wagholi, Pune - 412207</p>
                            <p className="mt-4 text-sm text-[var(--text-muted)]">
                                Business Hours: Monday - Saturday, 10:00 AM - 7:00 PM IST
                            </p>
                        </div>
                    </section>

                    {/* Summary Box */}
                    <section className="mt-12">
                        <div className="bg-[var(--background-card)] border border-[var(--border-accent)] rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                                Quick Refund Summary
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                    <p><strong>48+ hours before:</strong> Full refund</p>
                                    <p><strong>24-48 hours before:</strong> 50% refund</p>
                                    <p><strong>Less than 24 hours:</strong> No refund</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Processing time:</strong> 7-10 business days</p>
                                    <p><strong>Rescheduling:</strong> Free (24+ hours notice)</p>
                                    <p><strong>No-show:</strong> No refund</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
