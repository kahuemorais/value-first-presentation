const puppeteer = require('puppeteer');
const path = require('path');

async function preview() {
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
  });

  await page.screenshot({ path: 'preview-600.png', fullPage: true });
  await browser.close();
  console.log('Screenshot salvo: preview-600.png');
}

preview().catch(console.error);