import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

// Optimized font loading - reduced weights
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivcosmic.com"),
  title: "Shiv Cosmic Energy Solutions | Astro Mapping™ by Mr. Shivsharan Manshetti",
  description: "Aligning Destiny with Space. Using the Astro Mapping™ technique to optimize energy flow, spatial balance, and modern success. Founder: Mr. Shivsharan Manshetti. Based in Pune, Maharashtra.",
  keywords: ["Vastu", "Vastu Consultant Pune", "Astro Mapping", "Energy Alignment", "Cosmic Energy", "Shivsharan Manshetti", "Pune", "Spatial Optimization", "Vastu Shastra", "Home Vastu", "Office Vastu"],
  authors: [{ name: "Mr. Shivsharan Manshetti" }],
  creator: "Shiv Cosmic Energy Solutions",
  publisher: "Shiv Cosmic Energy Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Shiv Cosmic Energy Solutions | Astro Mapping™",
    description: "Aligning Destiny with Space. Premium cosmic energy alignment for modern living and business.",
    type: "website",
    locale: "en_IN",
    url: "https://shivcosmic.com",
    siteName: "Shiv Cosmic Energy Solutions",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Shiv Cosmic Energy Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Cosmic Energy Solutions | Astro Mapping™",
    description: "Aligning Destiny with Space. Premium cosmic energy alignment for modern living and business.",
    images: ["/logo-full.png"],
  },
  alternates: {
    canonical: "https://shivcosmic.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://shivcosmic.com/#business",
      name: "Shiv Cosmic Energy Solutions",
      description: "Premium Vastu consulting and Astro Mapping™ services for homes, offices, and commercial spaces.",
      url: "https://shivcosmic.com",
      logo: "https://shivcosmic.com/logo-full.png",
      image: "https://shivcosmic.com/logo-full.png",
      telephone: "+91-9876543210",
      email: "info.shivcosmic@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "BA IRIS, Baif Road",
        addressLocality: "Wagholi",
        addressRegion: "Pune",
        postalCode: "412207",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "18.5810",
        longitude: "73.9808",
      },
      areaServed: ["Pune", "Mumbai", "Maharashtra", "India"],
      priceRange: "₹₹₹",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.instagram.com/shivcosmicenergysolutions/",
        "https://www.facebook.com/shivcosmicenergysolutions/",
        "https://www.youtube.com/@shivcosmicenergysolution",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://shivcosmic.com/#founder",
      name: "Mr. Shivsharan Manshetti",
      jobTitle: "Founder & Chief Vastu Consultant",
      worksFor: {
        "@id": "https://shivcosmic.com/#business",
      },
      description: "Expert Astrologer & Vastu Consultant with 12+ years of experience in cosmic energy alignment.",
      image: "https://shivcosmic.com/founder.png",
      knowsAbout: ["Vastu Shastra", "Astrology", "Cosmic Energy", "Spatial Optimization"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://shivcosmic.com/#service",
      name: "Astro Mapping™ Consultation",
      provider: {
        "@id": "https://shivcosmic.com/#business",
      },
      description: "Proprietary technique combining Vedic astrology with Vastu principles for optimal space alignment.",
      serviceType: "Vastu Consulting",
      areaServed: "India",
    },
    {
      "@type": "WebSite",
      "@id": "https://shivcosmic.com/#website",
      url: "https://shivcosmic.com",
      name: "Shiv Cosmic Energy Solutions",
      publisher: {
        "@id": "https://shivcosmic.com/#business",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} ${plusJakarta.variable} antialiased font-sans`}>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
