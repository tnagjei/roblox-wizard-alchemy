import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/logo.svg');
const pngPath = path.resolve('public/logo.png');

async function convert() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    await sharp(svgBuffer)
      .resize(512, 512)
      .png({ compressionLevel: 9 })
      .toFile(pngPath);
    console.log('Successfully created logo.png');
  } catch (err) {
    console.error('Error creating png:', err);
  }
}

convert();
