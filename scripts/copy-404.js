const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html in the build folder
// This allows GitHub Pages to serve the React app for any route
const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');
const notFoundHtmlPath = path.join(buildDir, '404.html');

try {
  if (fs.existsSync(indexHtmlPath)) {
    // Simply copy index.html to 404.html
    // When GitHub Pages serves 404.html, the URL pathname is already correct
    // React Router will read the pathname from window.location.pathname and route accordingly
    fs.copyFileSync(indexHtmlPath, notFoundHtmlPath);
    console.log('✓ Successfully copied index.html to 404.html');
    console.log('  GitHub Pages will now serve the React app for all routes');
  } else {
    console.error('✗ Error: index.html not found in build folder');
    console.error('  Make sure you run "npm run build" first');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Error creating 404.html:', error.message);
  process.exit(1);
}

