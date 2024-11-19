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
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useUpdate${capitalizeFirstLetter(fileName)} } from "../../../api/${fileName}";
import { handelImageState } from "../../../utils/DataToSendImageState";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdate${capitalizeFirstLetter(fileName)}();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values };
    const handelImage = handelImageState(Data_to_send, "icon");
    mutate(handelImage);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.${capitalizeAllWord(fileName)}_EDIT}
        modelTitle="${fileName}"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchema}
        isAddModal={false}
      >
        <ModelForm />
      </LayoutModel>
    </>
  );
};

export default EditModel;

`
fs.writeFileSync('src/Pages/'+fileName+"/Model"+"/"+"EditModel.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);


function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}

function capitalizeAllWord(word) {
  return (word).toUpperCase() ;
}