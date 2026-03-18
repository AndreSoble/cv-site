import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { useRef, useState, useEffect } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className = '' }: Props) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || shouldReduce) return;

    // If already in viewport when mounted (e.g. direct anchor navigation), show immediately
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-60px 0px', threshold: 0 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shouldReduce]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={shouldReduce || visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
