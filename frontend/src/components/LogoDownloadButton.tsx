import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Renders the SCLC logo onto a hidden canvas and triggers a PDF-quality print/download.
 * Uses window.print() with a dedicated print window containing the SVG logo at high resolution.
 */
export default function LogoDownloadButton({ className = '' }: { className?: string }) {
  const handleDownload = () => {
    // Build a full SVG string at print-ready 800×800 resolution
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="800" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#FFF3E8"/>
      <stop offset="100%" stop-color="#FFE8CC"/>
    </radialGradient>
    <radialGradient id="headGrad" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFF8F2"/>
      <stop offset="100%" stop-color="#F5DFC0"/>
    </radialGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(120,60,20,0.18)"/>
    </filter>
  </defs>

  <!-- Outer ring -->
  <circle cx="100" cy="100" r="98" fill="#E8A87C" opacity="0.3"/>
  <circle cx="100" cy="100" r="96" fill="url(#bgGrad)" stroke="#C97B3A" stroke-width="2.5"/>
  <circle cx="100" cy="100" r="88" fill="#FFF8F0" stroke="#F0D5B8" stroke-width="1"/>

  <!-- Head -->
  <ellipse cx="100" cy="72" rx="26" ry="28" fill="url(#headGrad)" stroke="#C97B3A" stroke-width="1.5" filter="url(#softShadow)"/>
  <rect x="93" y="96" width="14" height="8" rx="4" fill="#F5DFC0"/>

  <!-- Brain hemispheres -->
  <path d="M88 62 C82 58 78 63 80 70 C78 74 82 78 87 76 C88 80 92 82 95 79 L95 62 Z" fill="#7BAF8E" opacity="0.85"/>
  <path d="M112 62 C118 58 122 63 120 70 C122 74 118 78 113 76 C112 80 108 82 105 79 L105 62 Z" fill="#E8A87C" opacity="0.85"/>
  <line x1="100" y1="60" x2="100" y2="79" stroke="#C97B3A" stroke-width="1" stroke-dasharray="2,2"/>
  <path d="M84 66 Q86 70 84 74" stroke="#5A9470" stroke-width="1" fill="none" stroke-linecap="round"/>
  <path d="M87 64 Q89 68 87 72" stroke="#5A9470" stroke-width="0.8" fill="none" stroke-linecap="round"/>
  <path d="M116 66 Q114 70 116 74" stroke="#C97B3A" stroke-width="1" fill="none" stroke-linecap="round"/>
  <path d="M113 64 Q111 68 113 72" stroke="#C97B3A" stroke-width="0.8" fill="none" stroke-linecap="round"/>

  <!-- Eyes -->
  <circle cx="93" cy="76" r="2.5" fill="#7A3B1E"/>
  <circle cx="107" cy="76" r="2.5" fill="#7A3B1E"/>
  <!-- Smile -->
  <path d="M94 82 Q100 87 106 82" stroke="#C97B3A" stroke-width="1.5" fill="none" stroke-linecap="round"/>

  <!-- Hands -->
  <g transform="rotate(-55, 100, 100)">
    <ellipse cx="100" cy="28" rx="5" ry="8" fill="#E8A87C" opacity="0.9"/>
    <ellipse cx="96" cy="22" rx="2.5" ry="4" fill="#E8A87C" opacity="0.85"/>
    <ellipse cx="100" cy="20" rx="2.5" ry="4.5" fill="#E8A87C" opacity="0.9"/>
    <ellipse cx="104" cy="22" rx="2.5" ry="4" fill="#E8A87C" opacity="0.85"/>
  </g>
  <g transform="rotate(-28, 100, 100)">
    <ellipse cx="100" cy="26" rx="5" ry="8" fill="#7BAF8E" opacity="0.9"/>
    <ellipse cx="96" cy="20" rx="2.5" ry="4" fill="#7BAF8E" opacity="0.85"/>
    <ellipse cx="100" cy="18" rx="2.5" ry="4.5" fill="#7BAF8E" opacity="0.9"/>
    <ellipse cx="104" cy="20" rx="2.5" ry="4" fill="#7BAF8E" opacity="0.85"/>
  </g>
  <g transform="rotate(0, 100, 100)">
    <ellipse cx="100" cy="25" rx="5.5" ry="9" fill="#D4A843" opacity="0.9"/>
    <ellipse cx="95.5" cy="18" rx="2.5" ry="4.5" fill="#D4A843" opacity="0.85"/>
    <ellipse cx="100" cy="16" rx="2.5" ry="5" fill="#D4A843" opacity="0.9"/>
    <ellipse cx="104.5" cy="18" rx="2.5" ry="4.5" fill="#D4A843" opacity="0.85"/>
  </g>
  <g transform="rotate(28, 100, 100)">
    <ellipse cx="100" cy="26" rx="5" ry="8" fill="#C97B3A" opacity="0.9"/>
    <ellipse cx="96" cy="20" rx="2.5" ry="4" fill="#C97B3A" opacity="0.85"/>
    <ellipse cx="100" cy="18" rx="2.5" ry="4.5" fill="#C97B3A" opacity="0.9"/>
    <ellipse cx="104" cy="20" rx="2.5" ry="4" fill="#C97B3A" opacity="0.85"/>
  </g>
  <g transform="rotate(55, 100, 100)">
    <ellipse cx="100" cy="28" rx="5" ry="8" fill="#5A9470" opacity="0.9"/>
    <ellipse cx="96" cy="22" rx="2.5" ry="4" fill="#5A9470" opacity="0.85"/>
    <ellipse cx="100" cy="20" rx="2.5" ry="4.5" fill="#5A9470" opacity="0.9"/>
    <ellipse cx="104" cy="22" rx="2.5" ry="4" fill="#5A9470" opacity="0.85"/>
  </g>

  <!-- Stars -->
  <path d="M38 55 L39.5 59 L44 59 L40.5 61.5 L42 66 L38 63 L34 66 L35.5 61.5 L32 59 L36.5 59 Z" fill="#D4A843" opacity="0.8"/>
  <path d="M162 55 L163.5 59 L168 59 L164.5 61.5 L166 66 L162 63 L158 66 L159.5 61.5 L156 59 L160.5 59 Z" fill="#D4A843" opacity="0.8"/>
  <circle cx="50" cy="85" r="2.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="150" cy="85" r="2.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="45" cy="115" r="1.8" fill="#E8A87C" opacity="0.5"/>
  <circle cx="155" cy="115" r="1.8" fill="#E8A87C" opacity="0.5"/>

  <!-- Divider -->
  <line x1="30" y1="108" x2="170" y2="108" stroke="#E8C9A0" stroke-width="1"/>

  <!-- Text -->
  <text x="100" y="122" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="900" font-size="13" fill="#7A3B1E" letter-spacing="2">SISODIYA</text>
  <text x="100" y="135" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="700" font-size="9.5" fill="#C97B3A" letter-spacing="1.5">CHILD LEARNING</text>
  <text x="100" y="147" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="700" font-size="9.5" fill="#C97B3A" letter-spacing="1.5">CENTRE</text>

  <!-- Divider 2 -->
  <line x1="40" y1="153" x2="160" y2="153" stroke="#E8C9A0" stroke-width="0.8"/>

  <!-- Tagline -->
  <text x="100" y="164" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="600" font-size="8.5" fill="#5A9470" font-style="italic" letter-spacing="0.5">&#x2726; Ek Nayi Ummeed &#x2726;</text>

  <!-- Bottom dots -->
  <circle cx="70" cy="174" r="2" fill="#E8A87C" opacity="0.7"/>
  <circle cx="80" cy="174" r="2" fill="#7BAF8E" opacity="0.7"/>
  <circle cx="90" cy="174" r="2" fill="#D4A843" opacity="0.7"/>
  <circle cx="100" cy="174" r="2.5" fill="#C97B3A" opacity="0.8"/>
  <circle cx="110" cy="174" r="2" fill="#5A9470" opacity="0.7"/>
  <circle cx="120" cy="174" r="2" fill="#E8A87C" opacity="0.7"/>
  <circle cx="130" cy="174" r="2" fill="#7BAF8E" opacity="0.7"/>

  <!-- Ring dots -->
  <circle cx="194" cy="100" r="1.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="181.4" cy="147" r="1.5" fill="#7BAF8E" opacity="0.6"/>
  <circle cx="147" cy="181.4" r="1.5" fill="#D4A843" opacity="0.6"/>
  <circle cx="100" cy="194" r="1.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="53" cy="181.4" r="1.5" fill="#7BAF8E" opacity="0.6"/>
  <circle cx="18.6" cy="147" r="1.5" fill="#D4A843" opacity="0.6"/>
  <circle cx="6" cy="100" r="1.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="18.6" cy="53" r="1.5" fill="#7BAF8E" opacity="0.6"/>
  <circle cx="53" cy="18.6" r="1.5" fill="#D4A843" opacity="0.6"/>
  <circle cx="100" cy="6" r="1.5" fill="#E8A87C" opacity="0.6"/>
  <circle cx="147" cy="18.6" r="1.5" fill="#7BAF8E" opacity="0.6"/>
  <circle cx="181.4" cy="53" r="1.5" fill="#D4A843" opacity="0.6"/>
</svg>`;

    // Open a print window with the SVG at high resolution
    const printWindow = window.open('', '_blank', 'width=900,height=900');
    if (!printWindow) {
      alert('Please allow popups to download the logo PDF.');
      return;
    }

    printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>SCLC Logo — Sisodiya Child Learning Centre</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #fff; }
    @page {
      size: A4;
      margin: 0;
    }
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: 'Nunito', Arial, sans-serif;
      background: #fff;
      padding: 40px;
    }
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
    .logo-title {
      font-size: 22px;
      font-weight: 900;
      color: #7A3B1E;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-top: 16px;
    }
    .logo-subtitle {
      font-size: 13px;
      font-weight: 600;
      color: #C97B3A;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .logo-tagline {
      font-size: 14px;
      font-weight: 600;
      color: #5A9470;
      font-style: italic;
      letter-spacing: 1px;
    }
    .divider {
      width: 200px;
      height: 1px;
      background: linear-gradient(to right, transparent, #E8C9A0, transparent);
      margin: 8px 0;
    }
    .print-note {
      margin-top: 32px;
      font-size: 11px;
      color: #999;
      text-align: center;
    }
    @media print {
      .print-note { display: none; }
      body { padding: 60px; }
    }
  </style>
</head>
<body>
  <div class="logo-container">
    ${svgContent}
    <div class="divider"></div>
    <p class="logo-title">Sisodiya Child Learning Centre</p>
    <p class="logo-subtitle">An Integrated Therapy Center</p>
    <p class="logo-tagline">✦ Ek Nayi Ummeed — A New Hope ✦</p>
    <p class="print-note">To save as PDF: File → Print → Save as PDF</p>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 500);
    };
  </script>
</body>
</html>`);
    printWindow.document.close();
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 text-sm font-heading font-600 text-background/70 hover:text-background transition-colors group ${className}`}
      title="Download Logo as PDF"
    >
      <Download className="w-4 h-4 text-warm-400 group-hover:text-warm-300 transition-colors" />
      <span>Download Logo (PDF)</span>
    </button>
  );
}
