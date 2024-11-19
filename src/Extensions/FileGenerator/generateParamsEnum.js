const fs = require('fs');
const path = require('path');

// Function to capitalize and add "_ID"
function capitalizeAllWord(word) {
  return word.toUpperCase() + "_ID";
}

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

// Define the enum entry to add
const enumKey = capitalizeAllWord(fileName);
const enumValue = `${fileName.toLowerCase()}_id`;
const newEntry = `  ${enumKey} = "${enumValue}",\n`;

// Path to the params.ts file in `src/enums/`
const paramsPath = path.join(__dirname, '../../enums/params.ts');

try {
  // Read the current contents of params.ts
  const fileContents = fs.readFileSync(paramsPath, 'utf-8');

  // Insert the new entry before the closing brace of the enum
  const updatedContents = fileContents.replace(
    /(export enum ParamsEnum {\n)/,
    `$1${newEntry}`
  );

  // Write the updated contents back to params.ts
  fs.writeFileSync(paramsPath, updatedContents);
  console.log(`Enum entry "${enumKey}" added successfully to params.ts.`);
} catch (error) {
  console.error(`Error updating params.ts: ${error}`);
}
