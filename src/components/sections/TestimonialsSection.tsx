"use client";

import { TestimonialsMarquee } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
    {
        author: {
            name: "Rajesh Sharma",
            handle: "Business Owner, Pune",
        },
        text: "I was skeptical, honestly. But after rearranging my office the way he suggested, things just... clicked. Revenue went up 40% in about 6 months. Can't explain it, but it worked."
    },
    {
        author: {
            name: "Priya Kulkarni",
            handle: "Homeowner, Mumbai",
        },
        text: "My family kept getting sick — colds, fatigue, you name it. After the consultation, we made some simple changes. It's been a year and the difference is real."
    },
    {
        author: {
            name: "Amit Deshmukh",
            handle: "IT Professional, Bangalore",
        },
        text: "Not the type to believe in this stuff. But my wife convinced me. The suggestions were surprisingly practical — no weird rituals. Got promoted 3 months later."
    },
    {
        author: {
            name: "Sunita Patil",
            handle: "Restaurant Owner, Nashik",
        },
        text: "Great food but empty tables. Mr. Manshetti walked through the space, pointed out a few things. We moved some furniture around. Now we have a waitlist most weekends."
    },
    {
        author: {
            name: "Vikram Joshi",
            handle: "Real Estate Developer, Pune",
        },
        text: "We incorporate Vastu into every project now. Buyers specifically ask for it. Mr. Manshetti's approach is logical — no demolition, just smart planning."
    },
    {
        author: {
            name: "Meera Reddy",
            handle: "Yoga Instructor, Hyderabad",
        },
        text: "My students kept saying the new studio feels different. More calm, more grounded. That's exactly what I was going for. He understood the assignment."
    },
];

export default function TestimonialsSection() {
    return (
        <TestimonialsMarquee
            title="What Clients Say"
            description="Straight from people who've worked with me. No scripts, no exaggeration."
            testimonials={testimonials}
        />
    );
}
