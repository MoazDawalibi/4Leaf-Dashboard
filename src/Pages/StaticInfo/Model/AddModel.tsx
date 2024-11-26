

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddStaticInfo } from "../../../api/StaticInfo";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddStaticInfo();

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.STATIC_INFO_ADD}
        modelTitle="StaticInfo"
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


