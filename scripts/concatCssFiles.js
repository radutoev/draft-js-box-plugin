const fs = require('fs');
const path = require('path');
const dirname = path.join(process.argv[2], 'lib-css'); // where to place webpack files
var content = ''; // eslint-disable-line no-var

fs.mkdirSync(dirname);
const filenames = fs.readdirSync(dirname);
filenames.forEach((filename) => {
  const filePath = path.join(dirname, filename);
  content += fs.readFileSync(filePath, 'utf-8');
});

const outputFilePath = path.join(process.argv[2], 'lib', 'plugin.css');
fs.writeFileSync(outputFilePath, content);