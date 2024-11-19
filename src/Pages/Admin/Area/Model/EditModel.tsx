import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateArea } from "../../../../api/Area";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateArea();
  const { objectToEdit } = useObjectToEdit((state) => state);
  const { city_id } = useParams<ParamsEnum>();
  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values, city_id };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.AREA_EDIT}
        modelTitle="Area"
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
