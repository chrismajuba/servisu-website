const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html in the build folder
const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');
const notFoundHtmlPath = path.join(buildDir, '404.html');

try {
  if (fs.existsSync(indexHtmlPath)) {
    fs.copyFileSync(indexHtmlPath, notFoundHtmlPath);
    console.log('✓ Successfully copied index.html to 404.html');
  } else {
    console.error('✗ Error: index.html not found in build folder');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Error copying file:', error.message);
  process.exit(1);
}

