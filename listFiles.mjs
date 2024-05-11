import fs from 'fs';
import path from 'path';

//  node listFiles.js

const outputFilePath = path.join(process.cwd(), 'output.txt'); // Adjusting for ES module scope
const targetFiles = [
    'index.html',
    'styles.css',
    'app.js',
    'package.json'
];

function logFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) {
      console.log(`Error reading file: ${filePath}`, err);
      return;
    }
    fs.appendFileSync(outputFilePath, `File: ${filePath}\n${contents}\n\n`, 'utf8');
  });
}

fs.writeFileSync(outputFilePath, '', 'utf8');

targetFiles.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  logFile(fullPath);
});
