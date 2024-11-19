import React from "react";
import {
  getInitialValues,
  getValidationSchema,
  getValidationSchemaEdit,
} from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateTag } from "../../../../api/tags";
import { useUpdateFinancialCollection } from "../../../../api/financial_collection";
import dayjs from "dayjs";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateFinancialCollection();
  const { objectToEdit } = useObjectToEdit((state) => state);
  console.log(objectToEdit);

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
      date: dayjs(values?.date).format("YYYY-MM-DD"),
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.Financial_Collection_EDIT}
        modelTitle="financial_collection_details"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchemaEdit}
        isAddModal={false}
      >
        <ModelForm isEdit={true} />
      </LayoutModel>
    </>
  );
};

export default EditModel;
