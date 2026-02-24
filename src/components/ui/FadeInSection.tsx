"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInSectionProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
    className?: string;
    /** If true, wraps with a <section> tag instead of <div> */
    asSection?: boolean;
}

const directionVariants: Record<Direction, Variants> = {
    up: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    none: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export default function FadeInSection({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.15,
    className,
}: FadeInSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            variants={directionVariants[direction]}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for silky smooth
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Stagger container — wraps children and staggers their appearance.
 * Each child should be a FadeInSection or motion element.
 */
export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
    amount = 0.1,
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
    amount?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * A child item to use inside StaggerContainer.
 */
export function StaggerItem({
    children,
    className,
    direction = "up",
    duration = 0.6,
}: {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    duration?: number;
}) {
    return (
        <motion.div
            variants={{
                hidden: directionVariants[direction].hidden,
                visible: {
                    ...(directionVariants[direction].visible as object),
                    transition: {
                        duration,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
