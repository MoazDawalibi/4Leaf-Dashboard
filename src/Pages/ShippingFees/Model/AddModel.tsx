

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddShippingFees } from "../../../api/ShippingFees";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddShippingFees();

  const handleSubmit = (values: any) => {
    const Is_Disabled = values?.is_disabled == true ? 1 : 0    
    mutate({
      ...values,
      is_disabled:Is_Disabled,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SHIPPING_FEES_ADD}
        modelTitle="ShippingFees"
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


