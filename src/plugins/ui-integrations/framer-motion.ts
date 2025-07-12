/**
 * Framer Motion Integration Plugin
 * 
 * This file provides setup instructions and examples for integrating Framer Motion
 * with the Next.js 15 Frontend Template.
 */

// Installation Instructions:
// npm install framer-motion

// Types for Framer Motion animations
export interface AnimationConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

// Common animation presets
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: { duration: 0.3 }
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.3 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Example usage:
/*
'use client';

import { motion } from 'framer-motion';
import { animations } from '@/plugins/ui-integrations/framer-motion';

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="card"
      {...animations.fadeIn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedList({ items }: { items: any[] }) {
  return (
    <motion.div {...animations.staggerChildren}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          {...animations.slideIn}
          className="list-item"
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}
*/

// Page transition example:
/*
// In your layout.tsx or page component:
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
*/

// Additional setup notes:
/*
1. Add to your tailwind.config.js:
   - Consider adding custom animations that complement Framer Motion
   - Use reduce-motion media query for accessibility

2. Performance considerations:
   - Use will-change CSS property sparingly
   - Prefer transform and opacity for smooth animations
   - Consider using layoutId for shared element transitions

3. Accessibility:
   - Always respect prefers-reduced-motion
   - Provide meaningful focus indicators
   - Consider screen reader announcements for dynamic content
*/

export default {
  name: 'framer-motion',
  version: '1.0.0',
  animations,
  setup: {
    install: 'npm install framer-motion',
    import: "import { motion } from 'framer-motion'",
    docs: 'https://www.framer.com/motion/'
  }
}; 