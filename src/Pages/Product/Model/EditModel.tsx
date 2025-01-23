

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useUpdateProduct } from "../../../api/Product";
import { handelImageState } from "../../../utils/DataToSendImageState";
import { useGetAllShippingFees } from "../../../api/ShippingFees";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateProduct();
  const { objectToEdit } = useObjectToEdit((state) => state);
  const {data} = useGetAllShippingFees();
  const ShippingFees = data?.data?.data;
  
  const handleSubmit = (values: any) => {

    const ShippingFeesPrice = ShippingFees?.find((e:any) =>  e.id === values.shipping_fees)
    const DataToSend = {
      ...values,
      shipping_fees:ShippingFeesPrice?.price,
      shipping_fee_id:values?.shipping_fees
    }
    const handelImage = handelImageState(DataToSend, "icon");
    mutate(handelImage);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.PRODUCT_EDIT}
        modelTitle="Product"
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

