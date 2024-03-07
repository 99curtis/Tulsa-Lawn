const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

const getFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getFiles(name)] : [...files, name];
  }, []);

const webpFiles = getFiles(assetsDir).filter((file) => file.endsWith('.webp'));
const imageFileNames = webpFiles.map((file) => path.basename(file));

fs.writeFileSync(path.join(assetsDir, 'images.json'), JSON.stringify(imageFileNames, null, 2));
console.log('images.json generated successfully!');