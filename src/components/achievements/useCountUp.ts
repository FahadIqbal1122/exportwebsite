import { useState, useEffect, useRef } from 'react';

interface CountUpOptions {
  start?: number;
  end: number;
  duration: number;
  decimals?: number;
}

export function useCountUp({ start = 0, end, duration, decimals = 0 }: CountUpOptions) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const progress = (timestamp - startTimeRef.current) / duration;

    if (progress < 1) {
      const value = start + (end - start) * easeOutExpo(progress);
      countRef.current = Number(value.toFixed(decimals));
      setCount(countRef.current);
      frameRef.current = requestAnimationFrame(animate);
    } else {
      countRef.current = end;
      setCount(end);
    }
  };

  const startAnimation = () => {
    frameRef.current = requestAnimationFrame(animate);
  };

  return { count, startAnimation };
}

// Easing function for smooth animation
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}