

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useUpdateShipment } from "../../../api/Shipment";
import { handelImageState } from "../../../utils/DataToSendImageState";
import { formatDate } from "../../../utils/formatDate";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateShipment();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = {
        ...values,
        start_date:formatDate(values?.start_date),
        end_date:formatDate(values?.end_date),
      };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SHIPMENT_EDIT}
        modelTitle="Shipment"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchema}
        isAddModal={false}
      >
        <ModelForm isRemoved={true}/>
      </LayoutModel>
    </>
  );
};

export default EditModel;

