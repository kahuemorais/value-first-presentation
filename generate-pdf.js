const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 800 });

  const htmlPath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    document.querySelectorAll('.accordion-mobile').forEach(el => el.remove());

    const style = document.createElement('style');
    style.textContent = `
      .failures-grid,
      .phase-details-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 24px !important;
        width: 100% !important;
      }
      .failure-card,
      .phase-detail-card {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        width: 100% !important;
      }
      .failures-header,
      .phase-details > h3 {
        page-break-after: avoid !important;
      }
      section {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
    `;
    document.head.appendChild(style);
  });

  await page.pdf({
    path: 'Value-First-Ebook.pdf',
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF gerado: Value-First-Ebook.pdf');
}

generatePDF().catch(console.error);