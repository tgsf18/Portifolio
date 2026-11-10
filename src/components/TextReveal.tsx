import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  letterSpacing?: string;
}

export const LetterReveal: React.FC<LetterRevealProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: 'blur(8px)',
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface BlurRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  delay = 0.2,
  duration = 0.8,
  yOffset = 24,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(16px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
