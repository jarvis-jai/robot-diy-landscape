#!/usr/bin/env node
/**
 * OG Image Converter
 * 
 * 將 SVG OG Image 轉換為 PNG 格式
 * 
 * 使用方式:
 *   npm install sharp
 *   node scripts/convert-og-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

const svgFiles = [
  { svg: 'og-image.svg', png: 'og-image.png' },
  { svg: 'og-image-zh.svg', png: 'og-image-zh.png' }
];

async function convertImages() {
  console.log('🖼️  OG Image Converter\n');
  
  for (const { svg, png } of svgFiles) {
    const svgPath = path.join(publicDir, svg);
    const pngPath = path.join(publicDir, png);
    
    if (!fs.existsSync(svgPath)) {
      console.log(`⚠️  Skip: ${svg} not found`);
      continue;
    }
    
    try {
      await sharp(svgPath)
        .resize(1200, 630)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(pngPath);
      
      const stats = fs.statSync(pngPath);
      const sizeKB = Math.round(stats.size / 1024);
      
      console.log(`✅ ${svg} → ${png} (${sizeKB} KB)`);
    } catch (error) {
      console.error(`❌ Failed to convert ${svg}:`, error.message);
    }
  }
  
  console.log('\n📋 Next steps:');
  console.log('   1. Verify PNG files in public/');
  console.log('   2. Test with https://www.opengraph.xyz/');
  console.log('   3. Deploy to Vercel');
}

convertImages().catch(console.error);
