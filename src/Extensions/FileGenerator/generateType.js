const fs = require('fs');
const path = require('path');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

// Define the directory path
const directoryPath = path.join('src', 'types');

// Ensure the directory exists
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true }); // Create the directory if it doesn't exist
}

const FileContainer = `

import { Nullable } from "./App";

// Define the ${capitalizeFirstLetter(fileName)} interface

export interface ${capitalizeFirstLetter(fileName)} {
  id: number; 
  name: string; 
  image: string;
}

export interface InitialValues {
  id: number; 
  name: string; 
  image: string;
}

export type ${capitalizeFirstLetter(fileName)}InitialValues = Partial<Nullable<InitialValues>>;

`;

fs.writeFileSync(
  path.join(directoryPath, `${capitalizeFirstLetter(fileName)}.ts`),
  FileContainer
);

console.log(`File "${fileName}" generated successfully.`);

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
