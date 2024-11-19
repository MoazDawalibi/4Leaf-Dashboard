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

import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../Hooks/useSetPageTitle";
import { ModalEnum } from "../../enums/Model";
import { useDelete${capitalizeFirstLetter(fileName)} } from "../../api/${fileName}";
import PageHeader from "../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import { canAdd${capitalizeFirstLetter(fileName)} } from "../../utils/hasAbilityFn";

const Table = lazy(() => import("./Table"));
const AddModalForm = lazy(() => import("./Model/AddModel"));
const EditModalForm = lazy(() => import("./Model/EditModel"));
const DeleteModalForm = lazy(
  () => import("../../Layout/Dashboard/DeleteModels"),
);

const TableHeader = () => {
  const [t] = useTranslation();
  const deleteMutation = useDelete${capitalizeFirstLetter(fileName)}();

  useSetPageTitle([
    { name: t('page_header.home'), path: "/" },
    { name: t('page_header.${fileName}'), path: "${fileName}" },
  ]);

  return (
    <div className="TableWithHeader">
      <Suspense fallback={<Spin />}>
        <PageHeader
          pageTitle="${fileName}"
          ModelAbility={ModalEnum?.${capitalizeAllWord(fileName)}_ADD}
          canAdd={canAdd${capitalizeFirstLetter(fileName)}}
        />
        <FilterLayout 
          sub_children={<FilterForm />} 
          filterTitle="table.${fileName}" 
        />
        <Table />
        <AddModalForm />
        <EditModalForm />
        <DeleteModalForm
          deleteMutation={deleteMutation}
          ModelEnum={ModalEnum?.${capitalizeAllWord(fileName)}_DELETE}
        />
      </Suspense>
    </div>
  );
};

export default TableHeader;

`

fs.writeFileSync('src/Pages/'+fileName+"/"+"Page.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
    return (word).charAt(0).toUpperCase() + (word).slice(1);
}

function capitalizeAllWord(word) {
  return (word).toUpperCase() ;
}