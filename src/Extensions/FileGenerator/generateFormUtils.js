const fs = require('fs');
const path = require('path');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

const folderPath = path.join('src/Pages', fileName, 'Model');

// Ensure the directory exists (creates the folder if missing)
fs.mkdirSync(folderPath, { recursive: true });


let FileContainer = `

import * as Yup from "yup";
import { ${capitalizeFirstLetter(fileName)}, ${capitalizeFirstLetter(fileName)}InitialValues } from "../../../types/${capitalizeFirstLetter(fileName)}";

export const getInitialValues = (
  objectToEdit: Partial<${capitalizeFirstLetter(fileName)}>,
): ${capitalizeFirstLetter(fileName)}InitialValues => {

  return {
    id: objectToEdit?.id,
    name: objectToEdit?.name ?? "",
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    name: Yup.string().required("validation.required"),
  });
};

`

fs.writeFileSync(path.join(folderPath, 'FormUtil.ts'), FileContainer);


console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}