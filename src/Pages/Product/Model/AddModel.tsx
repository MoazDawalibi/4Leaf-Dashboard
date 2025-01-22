

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddProduct } from "../../../api/Product";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddProduct();

  const handleSubmit = (values: any) => {    
    mutate({
      ...values,
      shipping_fee_id:values?.shipping_fees
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.PRODUCT_ADD}
        modelTitle="Product"
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


