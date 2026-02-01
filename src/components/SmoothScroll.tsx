"use client";

import { ReactLenis } from "lenis/react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return <>{children}</>;
    }

    return (
        <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 2 }}>
            {children}
        </ReactLenis>
    );
}
