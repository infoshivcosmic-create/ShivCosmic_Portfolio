"use client";

import { ReactLenis } from "lenis/react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    return (
        <ReactLenis
            root
            options={
                isMobile
                    ? {
                        // Lighter settings for mobile — smooth but not too heavy
                        lerp: 0.15,
                        duration: 0.9,
                        smoothWheel: true,
                        wheelMultiplier: 0.8,
                        touchMultiplier: 1.5,
                        infinite: false,
                    }
                    : {
                        // Desktop — silky, inertial scroll
                        lerp: 0.08,
                        duration: 1.4,
                        smoothWheel: true,
                        wheelMultiplier: 1,
                        touchMultiplier: 2,
                        infinite: false,
                    }
            }
        >
            {children}
        </ReactLenis>
    );
}
