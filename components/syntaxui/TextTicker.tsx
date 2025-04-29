"use client"

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({
  value,
  direction = 'up',
}: {
  value: number;
  direction?: 'up' | 'down';
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const startValue = direction === 'down'
    ? value
    : value > 20
      ? value - 10
      : 0;
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 200,
    stiffness: 500,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(
            Number(latest.toFixed(0))
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}
