import React from 'react';

interface SCLCLogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white';
}

/**
 * Official SCLC Logo — renders the uploaded circular logo image featuring the colorful brain,
 * cupped hands, orange/red/yellow flame border ring, 'Sisodiya Child Learning Centre' arcing text,
 * and 'EK NAYI UMMEED' text at the bottom. Supports 'color' (default) and 'white' variants.
 * The 'white' variant keeps the full-color logo intact but adds a white circular background
 * so it remains visible on dark backgrounds.
 */
export default function SCLCLogo({ size = 120, className = '', variant = 'color' }: SCLCLogoProps) {
  const isWhite = variant === 'white';

  return (
    <div
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: '50%',
        background: isWhite ? '#ffffff' : 'transparent',
        padding: isWhite ? Math.round(size * 0.04) : 0,
        boxSizing: 'border-box',
      }}
    >
      <img
        src="/assets/file_00000000a85c7207973708b82990330f (2)-4.png"
        alt="Sisodiya Child Learning Centre — Ek Nayi Ummeed"
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          borderRadius: '50%',
          filter: isWhite
            ? 'none'
            : 'drop-shadow(0 2px 6px rgba(120,60,20,0.18))',
        }}
      />
    </div>
  );
}
