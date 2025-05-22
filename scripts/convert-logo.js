const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/images/logo.svg'));
sharp(svgBuffer)
  .png()
  .toFile(path.join(__dirname, '../public/images/logo.png'))
  .then(() => console.log('Logo converted successfully'))
  .catch(err => console.error('Error converting logo:', err)); 