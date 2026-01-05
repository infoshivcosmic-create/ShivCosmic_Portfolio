import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms & Conditions | Shiv Cosmic Energy Solutions",
    description: "Terms and Conditions for Shiv Cosmic Energy Solutions - Vastu consulting and Astro Mapping™ services.",
};

export default function TermsPage() {
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
                    Terms & Conditions
                </h1>
                <p className="text-[var(--text-secondary)] mb-12">
                    Last updated: December 26, 2025
                </p>

                {/* Content */}
                <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using the services provided by Shiv Cosmic Energy Solutions
                            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms and Conditions.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            2. Services Description
                        </h2>
                        <p className="mb-4">
                            Shiv Cosmic Energy Solutions provides Vastu consulting, Astro Mapping™,
                            and cosmic energy alignment services. Our services include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Residential Vastu consultations</li>
                            <li>Commercial and office space analysis</li>
                            <li>Astro Mapping™ assessments</li>
                            <li>Energy optimization recommendations</li>
                            <li>Remote and on-site consultations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            3. Consultation Process
                        </h2>
                        <p className="mb-4">
                            Our consultation process involves the following:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Initial consultation scheduling through our website or contact channels</li>
                            <li>Collection of relevant information about your space and requirements</li>
                            <li>Analysis using our proprietary Astro Mapping™ methodology</li>
                            <li>Delivery of recommendations and remedies</li>
                            <li>Follow-up support as per the chosen service package</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            4. Client Responsibilities
                        </h2>
                        <p className="mb-4">As a client, you agree to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Provide accurate information about your property and requirements</li>
                            <li>Share relevant floor plans, birth details, or other requested documents</li>
                            <li>Make timely payments as per agreed terms</li>
                            <li>Respect scheduled appointment times</li>
                            <li>Implement recommendations at your own discretion and responsibility</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            5. Payment Terms
                        </h2>
                        <p className="mb-4">
                            Payment terms are as follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Consultation fees are to be paid in advance or as agreed</li>
                            <li>We accept payments via bank transfer, UPI, and other specified methods</li>
                            <li>All prices are quoted in Indian Rupees (INR) unless otherwise stated</li>
                            <li>GST and other applicable taxes will be charged as per government regulations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            6. Disclaimer
                        </h2>
                        <p className="mb-4">
                            Our services are based on traditional Vastu Shastra principles combined with
                            our proprietary Astro Mapping™ methodology. Please note:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Results may vary based on individual circumstances and implementation</li>
                            <li>We do not guarantee specific outcomes or timelines</li>
                            <li>Our recommendations are advisory in nature</li>
                            <li>Clients are responsible for implementing suggestions at their own discretion</li>
                            <li>We are not liable for decisions made based on our consultations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            7. Intellectual Property
                        </h2>
                        <p>
                            All content, methodologies, reports, and materials provided by Shiv Cosmic
                            Energy Solutions, including the Astro Mapping™ technique, are protected by
                            intellectual property rights. Clients may not reproduce, distribute, or
                            commercially use our materials without written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            8. Confidentiality
                        </h2>
                        <p>
                            We maintain strict confidentiality regarding all client information,
                            property details, and consultation records. Your personal information
                            will only be used for providing our services and will not be shared
                            with third parties without your consent, except as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            9. Limitation of Liability
                        </h2>
                        <p>
                            Shiv Cosmic Energy Solutions shall not be liable for any indirect,
                            incidental, special, or consequential damages arising from the use of
                            our services. Our total liability shall not exceed the amount paid for
                            the specific service in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            10. Governing Law
                        </h2>
                        <p>
                            These Terms and Conditions are governed by the laws of India. Any disputes
                            arising from these terms shall be subject to the exclusive jurisdiction of
                            the courts in Pune, Maharashtra, India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            11. Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time.
                            Changes will be effective upon posting to our website. Continued use of
                            our services constitutes acceptance of any modifications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            12. Contact Information
                        </h2>
                        <p className="mb-4">
                            For questions regarding these Terms and Conditions, please contact us:
                        </p>
                        <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-xl p-6">
                            <p className="font-semibold text-[var(--text-primary)] mb-2">
                                Shiv Cosmic Energy Solutions
                            </p>
                            <p>Email: info.shivcosmic@gmail.com</p>
                            <p>Address: BA IRIS, Baif Road, Wagholi, Pune - 412207</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
