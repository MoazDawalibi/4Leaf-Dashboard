const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}


let FileContainer = `

import { Nullable } from "./App";

// Define the Teacher interface

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


`

fs.writeFileSync('src/Types/'+capitalizeFirstLetter(fileName)+".ts", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}