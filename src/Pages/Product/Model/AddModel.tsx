

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddProduct } from "../../../api/Product";
import { useGetAllShippingFees } from "../../../api/ShippingFees";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddProduct();
  const {data} = useGetAllShippingFees();
  const ShippingFees = data?.data?.data
  
  const handleSubmit = (values: any) => {   

      const ShippingFeesPrice = ShippingFees?.find((e:any) =>  e.id === values.shipping_fees)
      const DataToSend = {
        ...values,
        shipping_fees:ShippingFeesPrice?.price,
        shipping_fee_id:values?.shipping_fees
      }
      
    mutate(DataToSend);
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.PRODUCT_ADD}
        modelTitle="Product"
        width="50vw"
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


