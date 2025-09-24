#!/usr/bin/env node
/**
 * Image Optimization Script for The Library Dispensary
 * Compresses and converts images to modern formats
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY_SETTINGS = {
  webp: 85,
  jpg: 85,
  png: 90
};

const MAX_DIMENSIONS = {
  gallery: { width: 1200, height: 1200 },
  hero: { width: 1920, height: 1080 },
  logo: { width: 400, height: 400 },
  thumbnail: { width: 300, height: 300 }
};

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const stats = await fs.stat(inputPath);
  const originalSize = stats.size;

  console.log(`Processing: ${filename} (${(originalSize / 1024 / 1024).toFixed(2)}MB)`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Determine max dimensions based on image location
    let maxDims = MAX_DIMENSIONS.gallery;
    if (filename.toLowerCase().includes('logo')) {
      maxDims = MAX_DIMENSIONS.logo;
    } else if (filename.toLowerCase().includes('hero') || filename.toLowerCase().includes('bg')) {
      maxDims = MAX_DIMENSIONS.hero;
    }

    // Resize if too large
    if (metadata.width > maxDims.width || metadata.height > maxDims.height) {
      image.resize(maxDims.width, maxDims.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Generate WebP version
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await image
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    console.log(`  ✓ WebP: ${(webpStats.size / 1024).toFixed(2)}KB (${((1 - webpStats.size / originalSize) * 100).toFixed(1)}% reduction)`);

    // Generate optimized JPG version for fallback
    const jpgPath = path.join(outputDir, `${filename}.jpg`);
    await image
      .jpeg({
        quality: QUALITY_SETTINGS.jpg,
        progressive: true,
        mozjpeg: true
      })
      .toFile(jpgPath);

    const jpgStats = await fs.stat(jpgPath);
    console.log(`  ✓ JPG: ${(jpgStats.size / 1024).toFixed(2)}KB (${((1 - jpgStats.size / originalSize) * 100).toFixed(1)}% reduction)`);

    // Generate responsive sizes
    const sizes = [320, 640, 1024];
    for (const size of sizes) {
      const responsivePath = path.join(outputDir, `${filename}-${size}w.webp`);
      await sharp(inputPath)
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY_SETTINGS.webp })
        .toFile(responsivePath);
    }

    return {
      original: originalSize,
      optimized: Math.min(webpStats.size, jpgStats.size),
      savings: originalSize - Math.min(webpStats.size, jpgStats.size)
    };
  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
    return { original: originalSize, optimized: originalSize, savings: 0 };
  }
}

async function processDirectory(inputDir, outputDir) {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(inputDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize in ${inputDir}\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const result = await optimizeImage(inputPath, outputDir);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
    console.log('');
  }

  console.log('='.repeat(50));
  console.log('OPTIMIZATION COMPLETE');
  console.log(`Original Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized Total: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total Savings: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}% reduction)`);
}

// Main execution
async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Process gallery images
  const galleryInput = path.join(publicDir, 'images', 'gallery');
  const galleryOutput = path.join(publicDir, 'images', 'gallery-optimized');

  if (await fs.access(galleryInput).then(() => true).catch(() => false)) {
    console.log('OPTIMIZING GALLERY IMAGES\n' + '='.repeat(50));
    await processDirectory(galleryInput, galleryOutput);
  }

  // Process root public images
  console.log('\n\nOPTIMIZING ROOT PUBLIC IMAGES\n' + '='.repeat(50));
  const rootImages = await fs.readdir(publicDir);
  const rootImageFiles = rootImages.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
  );

  for (const file of rootImageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputDir = path.join(publicDir, 'optimized');
    await fs.mkdir(outputDir, { recursive: true });
    await optimizeImage(inputPath, outputDir);
    console.log('');
  }
}

main().catch(console.error);