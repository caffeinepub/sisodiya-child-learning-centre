import React from 'react';

interface SCLCLogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white';
}

/**
 * Official SCLC Logo — renders the Version 2 logo image asset with
 * 'Ek Nayi Ummeed' text overlaid inside the logo area, covering the
 * original 'Ek Nayi Umheed' text baked into the image.
 * Supports 'color' (default) and 'white' (inverted for dark backgrounds) variants.
 */
export default function SCLCLogo({ size = 120, className = '', variant = 'color' }: SCLCLogoProps) {
  const isWhite = variant === 'white';

  // Scale font size proportionally with logo size
  const fontSize = Math.round(size * 0.098);
  const letterSpacing = Math.round(size * 0.006);

  // The original "Ek Nayi Umheed" text sits roughly at 78–88% from top of the image.
  // We overlay a white (or dark) pill behind our corrected text to fully cover it.
  const overlayBottom = Math.round(size * 0.095);
  const pillPaddingV = Math.round(size * 0.022);
  const pillPaddingH = Math.round(size * 0.055);
  const pillBorderRadius = Math.round(size * 0.04);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      <img
        src="/assets/generated/sclc-logo-v2.dim_400x400.png"
        alt="Sisodiya Child Learning Centre Logo — Ek Nayi Ummeed"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          display: 'block',
          filter: isWhite
            ? 'brightness(0) invert(1)'
            : 'drop-shadow(0 2px 6px rgba(120,60,20,0.18))',
        }}
      />
      {/* Corrected 'Ek Nayi Ummeed' text overlay — covers the original 'Ek Nayi Umheed' in the image */}
      <span
        style={{
          position: 'absolute',
          bottom: overlayBottom,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'inline-block',
          fontSize: fontSize,
          fontWeight: 800,
          letterSpacing: letterSpacing,
          whiteSpace: 'nowrap',
          color: isWhite ? '#ffffff' : '#7c3a0e',
          backgroundColor: isWhite ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.97)',
          padding: `${pillPaddingV}px ${pillPaddingH}px`,
          borderRadius: pillBorderRadius,
          fontFamily: "'Nunito', 'Inter', sans-serif",
          textTransform: 'uppercase' as const,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        Ek Nayi Ummeed
      </span>
    </div>
  );
}
