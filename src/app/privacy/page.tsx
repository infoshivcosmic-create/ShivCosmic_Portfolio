import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Shiv Cosmic Energy Solutions",
    description: "Privacy Policy for Shiv Cosmic Energy Solutions - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
                    Privacy Policy
                </h1>
                <p className="text-[var(--text-secondary)] mb-12">
                    Last updated: December 26, 2025
                </p>

                {/* Content */}
                <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            1. Introduction
                        </h2>
                        <p>
                            Shiv Cosmic Energy Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
                            and is committed to protecting your personal information. This Privacy Policy
                            explains how we collect, use, disclose, and safeguard your information when
                            you use our services or visit our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            2. Information We Collect
                        </h2>
                        <p className="mb-4">We may collect the following types of information:</p>

                        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 mt-6">
                            Personal Information
                        </h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Name and contact details (email, phone number, address)</li>
                            <li>Date, time, and place of birth (for astrological analysis)</li>
                            <li>Property details and floor plans</li>
                            <li>Family member information (when relevant to consultation)</li>
                            <li>Photographs of property (for remote consultations)</li>
                        </ul>

                        <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 mt-6">
                            Technical Information
                        </h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>IP address and browser type</li>
                            <li>Device information</li>
                            <li>Website usage data and analytics</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="mb-4">We use the collected information for:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Providing Vastu and Astro Mapping™ consultation services</li>
                            <li>Preparing personalized analysis and recommendations</li>
                            <li>Communicating with you about appointments and services</li>
                            <li>Sending service updates and follow-up information</li>
                            <li>Processing payments and maintaining records</li>
                            <li>Improving our services and website functionality</li>
                            <li>Responding to inquiries and support requests</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            4. Data Protection
                        </h2>
                        <p className="mb-4">
                            We implement appropriate security measures to protect your personal information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Secure storage of digital records</li>
                            <li>Limited access to personal information on a need-to-know basis</li>
                            <li>Confidential handling of consultation records</li>
                            <li>Secure communication channels for sensitive information</li>
                            <li>Regular review of security practices</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            5. Information Sharing
                        </h2>
                        <p className="mb-4">
                            We do not sell, trade, or rent your personal information. We may share
                            information only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>With your explicit consent</li>
                            <li>To comply with legal requirements or court orders</li>
                            <li>To protect our rights and safety</li>
                            <li>With service providers who assist in our operations (under strict confidentiality)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            6. Cookies and Tracking
                        </h2>
                        <p className="mb-4">
                            Our website may use cookies and similar technologies to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Remember your preferences</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Improve website performance and user experience</li>
                        </ul>
                        <p className="mt-4">
                            You can control cookies through your browser settings. Disabling cookies
                            may affect some website functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            7. Data Retention
                        </h2>
                        <p>
                            We retain your personal information for as long as necessary to fulfill
                            the purposes outlined in this policy, unless a longer retention period
                            is required by law. Consultation records may be retained for reference
                            in case of follow-up services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            8. Your Rights
                        </h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Access your personal information we hold</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information (subject to legal requirements)</li>
                            <li>Withdraw consent for marketing communications</li>
                            <li>Request a copy of your data in a portable format</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us using the details provided below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            9. Third-Party Links
                        </h2>
                        <p>
                            Our website may contain links to third-party websites. We are not
                            responsible for the privacy practices of these external sites. We
                            encourage you to read the privacy policies of any linked websites
                            you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            10. Children&apos;s Privacy
                        </h2>
                        <p>
                            Our services are not directed at individuals under 18 years of age.
                            We do not knowingly collect personal information from children. If we
                            become aware that we have collected information from a child, we will
                            take steps to delete it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            11. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be
                            posted on this page with an updated revision date. We encourage you to
                            review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                            12. Contact Us
                        </h2>
                        <p className="mb-4">
                            For questions or concerns about this Privacy Policy or our data practices,
                            please contact us:
                        </p>
                        <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-xl p-6">
                            <p className="font-semibold text-[var(--text-primary)] mb-2">
                                Shiv Cosmic Energy Solutions
                            </p>
                            <p>Email: info.shivcosmic@gmail.com</p>
                            <p>Address: BA IRIS, Baif Road, Wagholi, Pune - 412207</p>
                            <p className="mt-2 text-sm">
                                For data-related requests, please include &quot;Privacy Request&quot; in
                                your email subject line.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
