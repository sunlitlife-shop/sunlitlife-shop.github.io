const fs = require('fs');
const path = require('path');

const imagesDirectory = '../assets/images';
const outputFilePath = '../assets/portfolio_items/items.js';

function generatePortfolioItems() {
    const portfolioItems = [];

    // Read all folders in the images directory
    fs.readdirSync(imagesDirectory).forEach(folder => {
        const folderPath = path.join(imagesDirectory, folder);

        // Ensure the item is a directory
        if (fs.statSync(folderPath).isDirectory()) {
            // Read all files in the folder
            fs.readdirSync(folderPath).forEach(file => {
                // Ensure the file is an image
                if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
                    portfolioItems.push({
                        filename: file,
                        category: folder
                    });
                }
            });
        }
    });

    // Write the portfolioItems array to a file
    const fileContent = `const portfolioItems = ${JSON.stringify(portfolioItems, null, 2)};\n`;
    fs.writeFileSync(outputFilePath, fileContent, 'utf8');
    console.log(`Portfolio items generated and saved to ${outputFilePath}`);
}

generatePortfolioItems();