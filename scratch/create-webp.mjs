import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/logo.svg');
const webpPath = path.resolve('public/logo.webp');

async function convert() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    await sharp(svgBuffer)
      .resize(512, 512)
      .webp({ quality: 90 })
      .toFile(webpPath);
    console.log('Successfully created logo.webp');
  } catch (err) {
    console.error('Error creating webp:', err);
  }
}

convert();
