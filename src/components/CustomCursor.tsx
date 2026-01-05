"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useIsTouchDevice } from "@/lib/useReducedMotion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const isTouchDevice = useIsTouchDevice();

    // Memoized handlers to prevent recreation
    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
    }, []);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleHoverIn = useCallback(() => setIsHovering(true), []);
    const handleHoverOut = useCallback(() => setIsHovering(false), []);

    useEffect(() => {
        // Skip entirely on touch devices
        if (isTouchDevice) return;

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Use CSS-based hover detection via event delegation
        const handleElementHover = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [role="button"], input, textarea, select, .hoverable')) {
                if (e.type === "mouseover") handleHoverIn();
                else handleHoverOut();
            }
        };

        document.addEventListener("mouseover", handleElementHover, { passive: true });
        document.addEventListener("mouseout", handleElementHover, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleElementHover);
            document.removeEventListener("mouseout", handleElementHover);
        };
    }, [isTouchDevice, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleHoverIn, handleHoverOut]);

    // Don't render on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{ willChange: "transform" }}
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 16),
                y: mousePosition.y - (isHovering ? 24 : 16),
                scale: isClicking ? 0.9 : 1,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.3,
            }}
        >
            <div
                className={`rounded-full border-2 border-white/60 transition-all duration-200 ${isHovering
                        ? "w-12 h-12 bg-white/10 border-white/80"
                        : "w-8 h-8 bg-transparent"
                    }`}
                style={{
                    boxShadow: isHovering
                        ? "0 0 20px rgba(255, 255, 255, 0.3)"
                        : "0 0 10px rgba(255, 255, 255, 0.15)",
                }}
            />
        </motion.div>
    );
}
