const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}



let FileContainer = `

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAdd${capitalizeFirstLetter(fileName)} } from "../../../api/${fileName}";

const AddModel: React.FC = () => {
  const { mutate, status } = useAdd${capitalizeFirstLetter(fileName)}();

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.${capitalizeAllWord(fileName)}_ADD}
        modelTitle="${fileName}"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues({})}
        getValidationSchema={getValidationSchema}
      >
        <ModelForm />
      </LayoutModel>
    </>
  );
};

export default AddModel;


`
fs.writeFileSync('src/Pages/'+fileName+"/Model"+"/"+"AddModel.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);





function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}

function capitalizeAllWord(word) {
  return (word).toUpperCase() ;
}