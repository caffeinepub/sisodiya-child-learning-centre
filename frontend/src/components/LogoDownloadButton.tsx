import React from 'react';
import { Download } from 'lucide-react';

/**
 * Download button that opens a print-ready popup window containing the Version 5 SCLC logo
 * image at high resolution with center name and tagline, then auto-triggers the browser print
 * dialog so the user can save it as a PDF.
 */
export default function LogoDownloadButton({ className = '' }: { className?: string }) {
  const handleDownload = () => {
    const printWindow = window.open('', '_blank', 'width=900,height=900');
    if (!printWindow) {
      alert('Please allow popups to download the logo PDF.');
      return;
    }

    // Use absolute URL so the popup can load the asset
    const logoUrl = `${window.location.origin}/assets/generated/sclc-logo-v5.dim_512x512.png`;

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
      gap: 20px;
    }
    .logo-img {
      width: 320px;
      height: 320px;
      object-fit: contain;
    }
    .logo-title {
      font-size: 22px;
      font-weight: 900;
      color: #7A3B1E;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-top: 8px;
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
      margin: 4px 0;
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
    <img src="${logoUrl}" alt="SCLC Logo" class="logo-img" />
    <div class="divider"></div>
    <p class="logo-title">Sisodiya Child Learning Centre</p>
    <p class="logo-subtitle">An Integrated Therapy Center</p>
    <p class="logo-tagline">✦ Ek Nayi Ummeed — A New Hope ✦</p>
    <p class="print-note">To save as PDF: File → Print → Save as PDF</p>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 600);
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
