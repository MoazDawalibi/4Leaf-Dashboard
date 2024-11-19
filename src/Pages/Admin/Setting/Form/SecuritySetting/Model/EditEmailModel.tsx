import React from "react";
import { getInitialValuesEmail, getValidationSchemaEmail } from "./formUtil";
import { ModalEnum } from "../../../../../../enums/Model";
import LayoutModel from "../../../../../../Layout/Dashboard/LayoutModel";
import { EmailForm } from "./ModelForm";
import { QueryStatusEnum } from "../../../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../../../zustand/ObjectToEditState";
import { useUpdateReseller } from "../../../../../../api/reseller";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateReseller();
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
        ModelEnum={ModalEnum.Email_EDIT}
        modelTitle="email_address"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValuesEmail(objectToEdit)}
        getValidationSchema={getValidationSchemaEmail}
        isAddModal={false}
      >
        <EmailForm />
      </LayoutModel>
    </>
  );
};

export default EditModel;
