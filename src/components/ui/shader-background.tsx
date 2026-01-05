"use client"

import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
    className?: string
    speed?: number
    colors?: string[]
}

export function ShaderBackground({
    className = "",
    speed = 0.4,
    colors = ["#0C0C0C", "#1a1030", "#2d1f4a", "#3d2a60"]
}: ShaderBackgroundProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <MeshGradient
                className="w-full h-full"
                colors={colors}
                speed={speed}
            />

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/40 via-transparent to-[#0C0C0C]/60" />

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, #0C0C0C 75%)'
                }}
            />
        </div>
    )
}

export function ShaderBackgroundAlt({
    className = "",
    speed = 0.3,
}: ShaderBackgroundProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <MeshGradient
                className="w-full h-full opacity-50"
                colors={["#0C0C0C", "#1a1a2e", "#252540", "#3a3a50"]}
                speed={speed}
            />

            {/* Grid overlay for tech feel */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[#0C0C0C]/40" />
        </div>
    )
}

