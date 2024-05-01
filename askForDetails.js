import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const veggies = [];

function askForDetails() {
    rl.question('For a new item, enter name: ', (name) => {
        if (name.toLowerCase() === 'exit') {
            finish();
            return;
        }

        rl.question('Enter image URL: ', (image) => {
            rl.question('Enter description: ', (description) => {
                veggies.push({
                    name: name,
                    image: image,
                    desc: description
                });
                console.log('Item complete. Type "exit" to finish or any other key to add another item.');
                askForDetails();
            });
        });
    });
}

function finish() {
    const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'veggies.json');
    fs.writeFile(filePath, JSON.stringify(veggies, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Saved to veggies.json:', filePath);
        }
        rl.close();
    });
}

askForDetails();
