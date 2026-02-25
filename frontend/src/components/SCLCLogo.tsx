import React from 'react';

interface SCLCLogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white';
}

/**
 * Official SCLC Logo — renders the brain-care themed PNG logo image.
 * Supports 'color' (default) and 'white' variants via CSS filter.
 */
export default function SCLCLogo({ size = 120, className = '', variant = 'color' }: SCLCLogoProps) {
  const isWhite = variant === 'white';

  return (
    <img
      src="/assets/generated/sclc-logo-v2.dim_400x400.png"
      alt="Sisodiya Child Learning Centre Logo"
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        filter: isWhite
          ? 'brightness(0) invert(1) drop-shadow(0 1px 3px rgba(0,0,0,0.25))'
          : 'drop-shadow(0 2px 6px rgba(120,60,20,0.18))',
        display: 'inline-block',
      }}
      role="img"
      aria-label="Sisodiya Child Learning Centre Logo"
    />
  );
}
