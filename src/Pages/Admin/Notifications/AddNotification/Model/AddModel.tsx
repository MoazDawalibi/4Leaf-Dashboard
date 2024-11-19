import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../../enums/Model";
import LayoutModel from "../../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddNotification } from "../../../../../api/notification";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddNotification();

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
    });
  };
  
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.NOTIFICATION_ADD}
        modelTitle="notification"
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
