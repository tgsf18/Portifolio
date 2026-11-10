import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ChromeButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export const ChromeButton: React.FC<ChromeButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base rounded-2xl gap-3 font-semibold',
  };

  const variantClasses = {
    primary:
      'chrome-btn text-zinc-950 font-bold hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]',
    outline:
      'chrome-btn-outline text-zinc-100 font-medium hover:text-white',
    subtle:
      'bg-zinc-900/60 backdrop-blur-md text-zinc-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-zinc-800/80 transition-all',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = `inline-flex items-center justify-center select-none cursor-pointer tracking-wide transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};
