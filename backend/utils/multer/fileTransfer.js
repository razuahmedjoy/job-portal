import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import logger from '../helpers/logger/logger.js';

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to move file to specific folder
const singleFileTransfer = (filePath, destinationFolder) => {
    const fileName = path.basename(filePath);
    const newFilePath = path.join(__dirname, '../../public', destinationFolder, fileName);
    const fileUrl = `public/${destinationFolder}/${fileName}`; // the new URL of the file

    // Check if the destination folder exists, if not, create it
    if (!fs.existsSync(path.dirname(newFilePath))) {
        fs.mkdirSync(path.dirname(newFilePath), { recursive: true });
    }

    // Move the file to the destination folder
    fs.rename(filePath, newFilePath, (err) => {
        if (err) {
            logger.log('error', `Error moving file: ${err}`);
        } else {
            logger.log('info', `File moved successfully to ${newFilePath}`);
        }
    });

    return fileUrl;
}

// Function to move files to specific folder
const multipleFilesTransfer = async (imagePaths, destinationFolder) => {
    const paths = [];

    imagePaths.map((item) => {
        const newPath = singleFileTransfer(item, destinationFolder);
        paths.push(newPath);
    });

    return paths;
}

export {
    singleFileTransfer,
    multipleFilesTransfer
};