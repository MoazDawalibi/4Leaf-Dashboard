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
import React from "react";
import DataTable from "../../Layout/Dashboard/Table/DataTable";
import { useGetAll${capitalizeFirstLetter(fileName)} } from "../../api/${fileName}";
import { useFilterState } from "../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../zustand/Filter";

const App: React.FC = () => {
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAll${capitalizeFirstLetter(fileName)}({
    pagination: true,
    ...filterState,
    name: filterState.name || name,
    sort_by,
  });

  return <DataTable response={response} useColumns={useColumns} />;
};

export default App;

`

fs.writeFileSync('src/Pages/'+fileName+"/"+"Table.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}
