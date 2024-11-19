import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateUser } from "../../../../api/user";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateUser();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
    });
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.USER_EDIT}
        modelTitle="user_details"
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
