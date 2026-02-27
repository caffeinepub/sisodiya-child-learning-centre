import { Download } from "lucide-react";
import React from "react";

/**
 * Download button that opens a print-ready popup window containing the official SCLC logo
 * image (circular logo with brain, hands, and 'EK NAYI UMMEED' text), then auto-triggers
 * the browser print dialog so the user can save it as a PDF.
 */
export default function LogoDownloadButton({
  className = "",
}: { className?: string }) {
  const handleDownload = () => {
    const printWindow = window.open("", "_blank", "width=900,height=900");
    if (!printWindow) {
      alert("Please allow popups to download the logo PDF.");
      return;
    }

    // Use absolute URL so the popup can load the asset
    const logoUrl = `${window.location.origin}/assets/file_00000000a85c7207973708b82990330f (2)-4.png`;

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
      font-family: Arial, sans-serif;
      background: #fff;
      padding: 40px;
    }
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logo-img {
      width: 480px;
      height: 480px;
      object-fit: contain;
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
    <img src="${logoUrl}" alt="Sisodiya Child Learning Centre — Ek Nayi Ummeed" class="logo-img" />
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
      type="button"
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 text-sm font-heading font-600 text-background/70 hover:text-background transition-colors group ${className}`}
      title="Download Logo as PDF"
    >
      <Download className="w-4 h-4 text-warm-400 group-hover:text-warm-300 transition-colors" />
      <span>Download Logo (PDF)</span>
    </button>
  );
}
