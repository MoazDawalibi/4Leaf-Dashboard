import React from "react";
import { getInitialValuesPhone, getValidationSchemaPhone } from "./formUtil";
import { ModalEnum } from "../../../../../../enums/Model";
import LayoutModel from "../../../../../../Layout/Dashboard/LayoutModel";
import { PhoneForm } from "./ModelForm";
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
        ModelEnum={ModalEnum.PHONE_EDIT}
        modelTitle="phone_number"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValuesPhone(objectToEdit)}
        getValidationSchema={getValidationSchemaPhone}
        isAddModal={false}
      >
        <PhoneForm />
      </LayoutModel>
    </>
  );
};

export default EditModel;
