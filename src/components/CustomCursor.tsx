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
        if (isTouchDevice) return;

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

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

    if (isTouchDevice) return null;

    const outerSize = isHovering ? 44 : 32;
    const innerSize = isClicking ? 4 : 6;

    return (
        <>
            {/* Outer ring — lags behind for premium feel */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{ willChange: "transform" }}
                animate={{
                    x: mousePosition.x - outerSize / 2,
                    y: mousePosition.y - outerSize / 2,
                    scale: isClicking ? 0.85 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 28,
                    mass: 0.4,
                }}
            >
                <div
                    style={{
                        width: outerSize,
                        height: outerSize,
                        borderRadius: "50%",
                        border: isHovering ? "1.5px solid rgba(167,139,250,0.9)" : "1.5px solid rgba(255,255,255,0.6)",
                        background: isHovering ? "rgba(167,139,250,0.08)" : "transparent",
                        boxShadow: isHovering
                            ? "0 0 18px rgba(167,139,250,0.35), inset 0 0 8px rgba(167,139,250,0.1)"
                            : "0 0 10px rgba(255,255,255,0.12)",
                        transition: "width 0.2s cubic-bezier(0.22,1,0.36,1), height 0.2s cubic-bezier(0.22,1,0.36,1), border-color 0.2s ease, background 0.2s ease",
                    }}
                />
            </motion.div>

            {/* Inner dot — snaps instantly to pointer */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ willChange: "transform" }}
                animate={{
                    x: mousePosition.x - innerSize / 2,
                    y: mousePosition.y - innerSize / 2,
                    opacity: isVisible ? (isHovering ? 0 : 1) : 0,
                    scale: isClicking ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.1,
                }}
            >
                <div
                    style={{
                        width: innerSize,
                        height: innerSize,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.95)",
                        boxShadow: "0 0 6px rgba(255,255,255,0.5)",
                    }}
                />
            </motion.div>
        </>
    );
}
