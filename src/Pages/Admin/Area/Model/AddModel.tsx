import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddArea } from "../../../../api/Area";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddArea();
  const { city_id } = useParams<ParamsEnum>();
  const handleSubmit = (values: any) => {
    mutate({
      ...values,
      city_id,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.AREA_ADD}
        modelTitle="Area"
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
