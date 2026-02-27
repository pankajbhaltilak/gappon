'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="glass-panel p-8 md:p-10">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-lg leading-relaxed text-white/85">“{testimonials[index].quote}”</p>
          <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c2b7a2]">{testimonials[index].author}</footer>
        </motion.blockquote>
      </AnimatePresence>
    </div>
  );
}
