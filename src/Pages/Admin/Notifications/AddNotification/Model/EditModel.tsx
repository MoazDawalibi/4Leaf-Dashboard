import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../../enums/Model";
import LayoutModel from "../../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import { handelImageState } from "../../../../../utils/DataToSendImageState";
import { useUpdateNotification } from "../../../../../api/notification";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateNotification();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values };
    const handelImage = handelImageState(Data_to_send, "icon");
    mutate(handelImage);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.NOTIFICATION_EDIT}
        modelTitle="notification"
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
