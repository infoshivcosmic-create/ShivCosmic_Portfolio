"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if reduced motion should be applied.
 * Returns true if:
 * - User has "prefers-reduced-motion: reduce" enabled
 * - Device has low hardware concurrency (< 4 cores) AND is mobile
 * 
 * Note: We no longer disable animations just for touch devices,
 * as many laptops have touchscreens and can handle animations fine.
 */
export function useReducedMotion(): boolean {
    const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

    useEffect(() => {
        // Check prefers-reduced-motion
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        // Check for truly mobile device (small screen + low cores)
        const isSmallScreen = window.innerWidth < 768;
        const isLowEndDevice = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4;

        // Only reduce motion if:
        // 1. User explicitly prefers reduced motion, OR
        // 2. It's a small screen with low-end hardware
        const shouldReduce = mediaQuery.matches || (isSmallScreen && isLowEndDevice);
        setShouldReduceMotion(shouldReduce);

        // Listen for changes to prefers-reduced-motion
        const handleChange = (e: MediaQueryListEvent) => {
            setShouldReduceMotion(e.matches || (isSmallScreen && isLowEndDevice));
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return shouldReduceMotion;
}

/**
 * Hook to detect if device is a touch device (mobile/tablet)
 */
export function useIsTouchDevice(): boolean {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // More accurate mobile detection: small screen + touch
        const isSmallScreen = window.innerWidth < 1024;
        const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isSmallScreen && hasTouch);
    }, []);

    return isTouchDevice;
}

/**
 * Hook to detect if device is low-end
 */
export function useIsLowEndDevice(): boolean {
    const [isLowEnd, setIsLowEnd] = useState(false);

    useEffect(() => {
        const cores = navigator.hardwareConcurrency || 4;
        setIsLowEnd(cores < 4);
    }, []);

    return isLowEnd;
}
