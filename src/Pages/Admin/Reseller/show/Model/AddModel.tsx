import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../../enums/Model";
import LayoutModel from "../../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddReseller } from "../../../../../api/reseller";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddReseller();

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.RE_SELLER_COLLECTION_ADD}
        modelTitle="reseller"
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
