import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddUnit } from "../../../../api/unit";
import { useParams } from "react-router-dom";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddUnit();
  const { subject_id } = useParams();
  const { OldObjectToEdit } = useObjectToEdit();

  const handleSubmit = (values: any) => {
    let order = 0;
    if (OldObjectToEdit?.order || OldObjectToEdit?.order === 0) {
      order = Number(OldObjectToEdit.order) + 1;
    }

    mutate({
      ...values,
      subject_id: subject_id,
      order: order,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.UNIT_ADD}
        modelTitle="unit"
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
