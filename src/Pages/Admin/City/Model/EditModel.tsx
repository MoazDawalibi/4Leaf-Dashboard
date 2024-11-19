import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateCity } from "../../../../api/City";
import { handelImageState } from "../../../../utils/DataToSendImageState";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateCity();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.CITY_EDIT}
        modelTitle="City"
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
