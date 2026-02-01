"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        let endTime = localStorage.getItem('consultationOfferEndTime');

        if (!endTime) {
            const now = new Date().getTime();
            endTime = (now + 24 * 60 * 60 * 1000).toString();
            localStorage.setItem('consultationOfferEndTime', endTime);
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const end = parseInt(endTime as string);
            const distance = end - now;

            if (distance < 0) {
                const newEnd = now + 24 * 60 * 60 * 1000;
                localStorage.setItem('consultationOfferEndTime', newEnd.toString());
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                    border: '2px solid rgba(212, 175, 55, 0.3)',
                }}
            >
                <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wide">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[#D4AF37]">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                    Offer Ends In
                </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <span className="text-2xl sm:text-3xl text-[#D4AF37] font-bold">:</span>
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <span className="text-2xl sm:text-3xl text-[#D4AF37] font-bold">:</span>
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
}
