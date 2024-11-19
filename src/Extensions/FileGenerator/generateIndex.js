const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

const folderPath = 'src/Pages/'+fileName;


if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

let FileContainer = `
import { useColumns } from "./useTableColumns";
import Table from "./Table";
import AddModalForm from "./Model/AddModel";
import EditModalForm from "./Model/EditModel";

export {
  Table,
  useColumns,
  AddModalForm,
  EditModalForm,
};


`

fs.writeFileSync('src/Pages/'+fileName+"/"+"index.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}