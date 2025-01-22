

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useUpdateShippingFees } from "../../../api/ShippingFees";
import { handelImageState } from "../../../utils/DataToSendImageState";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateShippingFees();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Is_Disabled = values?.is_disabled == true ? 1 : 0    
    const Data_to_send = { ...values,is_disabled:Is_Disabled };
    const handelImage = handelImageState(Data_to_send, "image");
    mutate(handelImage);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SHIPPING_FEES_EDIT}
        modelTitle="ShippingFees"
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

