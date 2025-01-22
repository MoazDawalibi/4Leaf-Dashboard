

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddShipment } from "../../../api/Shipment";
import { formatDate } from "../../../utils/formatDate";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddShipment();

  const handleSubmit = (values: any) => {    
    mutate({
      ...values,
      start_date:formatDate(values?.start_date),
      end_date:formatDate(values?.end_date),
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SHIPMENT_ADD}
        modelTitle="Shipment"
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


