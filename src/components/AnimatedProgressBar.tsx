import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedProgressBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  delay: number;
}

export function AnimatedProgressBar({
  label,
  value,
  maxValue,
  color,
  delay,
}: AnimatedProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animate the counter from 0 to value
  useEffect(() => {
    if (!isInView) return;

    const duration = 1000; // 1 second for counting
    const steps = 50; // Number of steps for smooth counting
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const widthPercentage = (value / maxValue) * 100;

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-900 dark:text-white">{label}</span>
        <motion.span
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: delay }}
        >
          {displayValue}h
        </motion.span>
      </div>
      <div className="h-10 bg-gray-200 dark:bg-[#0A0F1F] rounded-lg overflow-hidden">
        <motion.div
          className="h-full rounded-lg flex items-center px-4"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${widthPercentage}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1], // Custom ease-out curve
          }}
        >
          <span className="text-white text-sm">{label}</span>
        </motion.div>
      </div>
    </div>
  );
}
