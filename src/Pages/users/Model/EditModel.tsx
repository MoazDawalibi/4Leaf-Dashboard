

import React from "react";
import { getInitialValues, getValidationSchema } from "./FormUtil";
import { ModalEnum } from "../../../enums/Model";
import LayoutModel from "../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useUpdateUsers } from "../../../api/users";
import { handelImageState } from "../../../utils/DataToSendImageState";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateUsers();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.USERS_EDIT}
        modelTitle="user"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchema}
        isAddModal={false}
      >
        <ModelForm isEdit={true} />
      </LayoutModel>
    </>
  );
};

export default EditModel;

