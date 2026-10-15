import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// 1. High-Precision Favicon SVG (Optically optimized for small browser tabs & retina displays)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="maliBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f1c19"/>
      <stop offset="100%" stop-color="#12100e"/>
    </linearGradient>
    <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff7a3d"/>
      <stop offset="100%" stop-color="#e0531c"/>
    </linearGradient>
    <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Deep Obsidian Squircle Background with subtle border for high contrast on dark & light chrome -->
  <rect x="16" y="16" width="480" height="480" rx="118" fill="url(#maliBg)" stroke="#38322b" stroke-width="8"/>

  <!-- Iconic M Emblem -->
  <g filter="url(#subtleGlow)">
    <!-- Left Pillar (Warm Cream White) -->
    <path d="M 126 122 L 126 390" stroke="#fcfaf6" stroke-width="56" stroke-linecap="round"/>

    <!-- Right Pillar (Warm Cream White) -->
    <path d="M 386 122 L 386 390" stroke="#fcfaf6" stroke-width="56" stroke-linecap="round"/>

    <!-- Center Chevron V (Vibrant Terracotta) -->
    <path d="M 126 122 L 256 280 L 386 122" fill="none" stroke="url(#terracottaGrad)" stroke-width="56" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Terracotta Accent Dot -->
    <circle cx="420" cy="410" r="26" fill="url(#terracottaGrad)"/>
  </g>
</svg>`;

// 2. OpenGraph / Twitter Social Card SVG (1200 x 630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181512"/>
      <stop offset="50%" stop-color="#141210"/>
      <stop offset="100%" stop-color="#0d0c0a"/>
    </linearGradient>
    <radialGradient id="glowRight" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#e8662a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#e8662a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowLeft" cx="15%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#e8662a" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#e8662a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accentOrange" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff7e42"/>
      <stop offset="100%" stop-color="#e0531c"/>
    </linearGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fbf8f3" stroke-width="1" stroke-opacity="0.035"/>
    </pattern>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#gridPattern)"/>
  <rect width="1200" height="630" fill="url(#glowRight)"/>
  <rect width="1200" height="630" fill="url(#glowLeft)"/>

  <!-- Outer Fine Card Border -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#2d2720" stroke-width="2"/>
  <rect x="25" y="25" width="1150" height="580" rx="27" fill="none" stroke="#e8662a" stroke-width="1" stroke-opacity="0.25"/>

  <!-- Content Container -->
  <g transform="translate(80, 75)">
    <!-- Top Studio Header Badge -->
    <g>
      <rect x="0" y="0" width="440" height="38" rx="19" fill="#24201c" stroke="#3d352c" stroke-width="1.5"/>
      <circle cx="20" cy="19" r="6" fill="#e8662a"/>
      <text x="36" y="24" fill="#fbf8f3" font-family="'DM Sans', system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" letter-spacing="2.5">
        MALI STUDIOS · WEB &amp; ARCHITECTURE
      </text>
    </g>

    <!-- Main Headline -->
    <text x="0" y="115" fill="#fbf8f3" font-family="'Fraunces', Georgia, serif" font-weight="900" font-size="52" letter-spacing="-0.5">
      Full-Stack Web Development
    </text>
    <text x="0" y="175" fill="url(#accentOrange)" font-family="'Fraunces', Georgia, serif" font-weight="900" font-size="52" letter-spacing="-0.5">
      &amp; Bespoke Architecture Portals
    </text>

    <!-- Subtitle / Value proposition -->
    <text x="0" y="235" fill="#c4baa9" font-family="'DM Sans', system-ui, -apple-system, sans-serif" font-weight="400" font-size="20">
      Crafting clean, fast, high-performance websites and interactive digital tools
    </text>
    <text x="0" y="265" fill="#a49987" font-family="'DM Sans', system-ui, -apple-system, sans-serif" font-weight="400" font-size="19">
      directed by Shreeyash Mali.
    </text>

    <!-- Feature Pills -->
    <g transform="translate(0, 315)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="168" height="42" rx="21" fill="#1f1b17" stroke="#3a3228" stroke-width="1.5"/>
      <text x="84" y="26" text-anchor="middle" fill="#fbf8f3" font-family="'DM Sans', sans-serif" font-weight="600" font-size="14">
        ⚡ Modern Web Apps
      </text>

      <!-- Pill 2 -->
      <rect x="180" y="0" width="190" height="42" rx="21" fill="#1f1b17" stroke="#3a3228" stroke-width="1.5"/>
      <text x="275" y="26" text-anchor="middle" fill="#fbf8f3" font-family="'DM Sans', sans-serif" font-weight="600" font-size="14">
        🏛️ Architecture Portals
      </text>

      <!-- Pill 3 -->
      <rect x="382" y="0" width="186" height="42" rx="21" fill="#1f1b17" stroke="#3a3228" stroke-width="1.5"/>
      <text x="475" y="26" text-anchor="middle" fill="#fbf8f3" font-family="'DM Sans', sans-serif" font-weight="600" font-size="14">
        ✦ React · TypeScript
      </text>
    </g>

    <!-- Footer link & Attribution -->
    <g transform="translate(0, 420)">
      <line x1="0" y1="0" x2="680" y2="0" stroke="#2d2720" stroke-width="1.5"/>
      <text x="0" y="35" fill="#e8662a" font-family="'DM Sans', sans-serif" font-weight="700" font-size="18">
        mali-web-studios.vercel.app
      </text>
      <text x="360" y="35" fill="#756b5d" font-family="'DM Sans', sans-serif" font-weight="500" font-size="16">
        Portfolio &amp; Client Enquiries
      </text>
    </g>
  </g>

  <!-- Right Side: Large Distinctive Studio Emblem -->
  <g transform="translate(850, 160)" filter="url(#cardShadow)">
    <!-- Squircle Container -->
    <rect x="0" y="0" width="260" height="260" rx="64" fill="#1b1815" stroke="#3d3429" stroke-width="5"/>
    <rect x="2" y="2" width="256" height="256" rx="62" fill="none" stroke="#e8662a" stroke-width="2" stroke-opacity="0.3"/>

    <!-- Emblem scaled -->
    <g transform="translate(25, 25) scale(0.41)">
      <!-- Left Pillar -->
      <path d="M 126 122 L 126 390" stroke="#fcfaf6" stroke-width="56" stroke-linecap="round"/>
      <!-- Right Pillar -->
      <path d="M 386 122 L 386 390" stroke="#fcfaf6" stroke-width="56" stroke-linecap="round"/>
      <!-- Chevron -->
      <path d="M 126 122 L 256 280 L 386 122" fill="none" stroke="url(#accentOrange)" stroke-width="56" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Accent Dot -->
      <circle cx="420" cy="410" r="26" fill="url(#accentOrange)"/>
    </g>
  </g>
</svg>`;

async function run() {
  console.log('Generating SEO assets and favicons...');

  // Save favicon.svg to public/ and public/image/
  fs.writeFileSync(path.resolve('public/favicon.svg'), faviconSvg);
  fs.writeFileSync(path.resolve('public/image/favicon.svg'), faviconSvg);
  console.log('Saved public/favicon.svg');

  // Convert SVG buffer to various PNG resolutions
  const svgBuffer = Buffer.from(faviconSvg);

  // 1. favicon.png (512x512)
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/favicon.png'));
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/image/favicon.png'));
  console.log('Generated favicon.png (512x512)');

  // 2. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/apple-touch-icon.png'));
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/image/apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png (180x180)');

  // 3. favicon-32x32.png (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.resolve('public/favicon-32x32.png'));
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.resolve('public/image/favicon-32x32.png'));
  console.log('Generated favicon-32x32.png (32x32)');

  // 4. favicon-16x16.png (16x16)
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.resolve('public/favicon-16x16.png'));
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.resolve('public/image/favicon-16x16.png'));
  console.log('Generated favicon-16x16.png (16x16)');

  // 5. favicon.ico - Multi-resolution ICO or standard 32x32 / 48x48 icon
  // In modern browsers, 32x32 PNG inside ICO header or standard ICO container works seamlessly
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.resolve('public/favicon.ico'));
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.resolve('public/image/favicon.ico'));
  console.log('Generated favicon.ico');

  // 6. Generate og-image.png (1200x630)
  const ogBuffer = Buffer.from(ogSvg);
  await sharp(ogBuffer)
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile(path.resolve('public/og-image.png'));
  console.log('Generated public/og-image.png (1200x630)');

  console.log('All favicon & OpenGraph assets successfully generated!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
