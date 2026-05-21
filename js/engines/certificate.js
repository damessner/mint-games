// ============================================================
// MINT-Games – Certificate Engine (jsPDF)
// ============================================================

function downloadCertificate() {
  const name = document.getElementById('pupilName').value.trim() || 'Schüler/in';
  const moduleTitle = document.getElementById('lessonNavTitle').textContent;
  const score = document.getElementById('certScore').textContent;
  const date  = new Date().toLocaleDateString('de-AT', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const W = 297, H = 210;

  // ── Background ────────────────────────────────────────────
  // Dark blue gradient background
  doc.setFillColor(14, 20, 40);
  doc.rect(0, 0, W, H, 'F');

  // Decorative corner accents
  const corners = [[0,0],[W,0],[0,H],[W,H]];
  corners.forEach(([cx, cy]) => {
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.3);
    for (let r = 15; r <= 45; r += 10) {
      doc.setFillColor(59, 130, 246, 0.05);
      // Simple corner lines
    }
  });

  // Top accent bar
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 0, W, 4, 'F');
  doc.setFillColor(16, 185, 129);
  doc.rect(0, 4, W, 2, 'F');

  // Bottom accent bar
  doc.setFillColor(16, 185, 129);
  doc.rect(0, H - 4, W, 2, 'F');
  doc.setFillColor(59, 130, 246);
  doc.rect(0, H - 2, W, 2, 'F');

  // Side accents
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 0, 2, H, 'F');
  doc.rect(W - 2, 0, 2, H, 'F');

  // ── Inner frame ───────────────────────────────────────────
  doc.setDrawColor(59, 130, 246);
  doc.setLineWidth(0.5);
  doc.roundedRect(12, 12, W - 24, H - 24, 4, 4, 'S');

  // ── Stars / Decorations ───────────────────────────────────
  doc.setFontSize(20);
  doc.setTextColor(250, 175, 32);
  ['★', '★', '★'].forEach((s, i) => {
    doc.text(s, 148.5 + (i - 1) * 18, 28, { align: 'center' });
  });

  // ── School / Platform Header ──────────────────────────────
  doc.setFontSize(11);
  doc.setTextColor(100, 130, 180);
  doc.setFont('helvetica', 'bold');
  doc.text('MITTELSCHULE TELFS · DIGITALE GRUNDBILDUNG', W / 2, 38, { align: 'center' });

  // ── Certificate Title ─────────────────────────────────────
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('LERNZERTIFIKAT', W / 2, 56, { align: 'center' });

  // Subtitle line
  doc.setDrawColor(100, 130, 180);
  doc.setLineWidth(0.3);
  doc.line(60, 61, W - 60, 61);

  // ── "Hiermit wird bestätigt" ─────────────────────────────
  doc.setFontSize(12);
  doc.setTextColor(160, 190, 230);
  doc.setFont('helvetica', 'normal');
  doc.text('Hiermit wird bestätigt, dass', W / 2, 74, { align: 'center' });

  // ── Pupil Name ────────────────────────────────────────────
  doc.setFontSize(30);
  doc.setTextColor(250, 175, 32);
  doc.setFont('helvetica', 'bold');
  doc.text(name, W / 2, 92, { align: 'center' });

  // Name underline
  doc.setDrawColor(250, 175, 32);
  doc.setLineWidth(0.5);
  const nameWidth = doc.getTextWidth(name);
  doc.line(W / 2 - nameWidth / 2, 95, W / 2 + nameWidth / 2, 95);

  // ── Module description ────────────────────────────────────
  doc.setFontSize(12);
  doc.setTextColor(160, 190, 230);
  doc.setFont('helvetica', 'normal');
  doc.text('das Lernmodul erfolgreich abgeschlossen hat:', W / 2, 107, { align: 'center' });

  // ── Module Title ──────────────────────────────────────────
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`"${moduleTitle}"`, W / 2, 120, { align: 'center' });

  // ── Score Box ────────────────────────────────────────────
  doc.setFillColor(30, 45, 80);
  doc.roundedRect(W / 2 - 35, 126, 70, 18, 3, 3, 'F');
  doc.setDrawColor(59, 130, 246);
  doc.setLineWidth(0.3);
  doc.roundedRect(W / 2 - 35, 126, 70, 18, 3, 3, 'S');

  doc.setFontSize(11);
  doc.setTextColor(100, 200, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`Abschlussquiz: ${score} Punkte`, W / 2, 137.5, { align: 'center' });

  // ── Curriculum reference ──────────────────────────────────
  doc.setFontSize(9);
  doc.setTextColor(80, 110, 160);
  doc.setFont('helvetica', 'normal');
  doc.text('Lehrplan Digitale Grundbildung Österreich 2022/23 · Mittelschule', W / 2, 152, { align: 'center' });

  // ── Lehrplan Kompetenzbereiche ────────────────────────────
  const currentModule = window.CURRENT_MODULE_OBJ;
  if (currentModule && currentModule.lehrplan) {
    doc.setFontSize(9);
    doc.setTextColor(80, 110, 160);
    doc.text(`Kompetenzbereiche: ${currentModule.lehrplan}`, W / 2, 159, { align: 'center' });
  }

  // ── Divider ───────────────────────────────────────────────
  doc.setDrawColor(40, 60, 100);
  doc.setLineWidth(0.3);
  doc.line(30, 165, W - 30, 165);

  // ── Date & Signature area ────────────────────────────────
  doc.setFontSize(10);
  doc.setTextColor(100, 130, 180);
  doc.setFont('helvetica', 'normal');
  doc.text(date, 50, 178, { align: 'center' });

  doc.setDrawColor(80, 100, 150);
  doc.setLineWidth(0.3);
  doc.line(22, 183, 78, 183);
  doc.setFontSize(9);
  doc.text('Datum', 50, 188, { align: 'center' });

  // MINT-Games seal
  doc.setFontSize(26);
  doc.setTextColor(250, 175, 32);
  doc.text('⚡', W / 2, 180, { align: 'center' });
  doc.setFontSize(9);
  doc.setTextColor(100, 130, 180);
  doc.text('MINT-Games', W / 2, 187, { align: 'center' });

  // Teacher signature line
  doc.setDrawColor(80, 100, 150);
  doc.line(W - 78, 183, W - 22, 183);
  doc.setFontSize(9);
  doc.setTextColor(100, 130, 180);
  doc.text('Lehrperson', W - 50, 188, { align: 'center' });

  // ── Verification stamp ────────────────────────────────────
  doc.setFontSize(7);
  doc.setTextColor(50, 80, 120);
  const verifyId = 'MINT-' + Date.now().toString(36).toUpperCase();
  doc.text(`Zertifikat-ID: ${verifyId}`, W / 2, 196, { align: 'center' });

  // ── Save ─────────────────────────────────────────────────
  const safeName = name.replace(/[^a-zA-ZäöüÄÖÜß\s]/g, '').trim().replace(/\s+/g, '_');
  const safeModule = moduleTitle.replace(/[^a-zA-Z0-9äöüÄÖÜß\s]/g, '').trim().replace(/\s+/g, '_');
  doc.save(`Zertifikat_${safeName}_${safeModule}.pdf`);
}
