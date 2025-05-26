"use client";

import { useEffect, useState } from "react";

import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";

export function AnimatedCircularProgressBarDemo() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="rgb(255, 255, 0)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
    );
}
