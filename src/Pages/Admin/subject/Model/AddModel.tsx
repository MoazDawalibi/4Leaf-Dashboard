import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddSubject } from "../../../../api/subject";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddSubject();
  const { grade_id } = useParams<ParamsEnum>();
  const handleSubmit = (values: any) => {
    mutate({ ...values, grade_id });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SUBJECT_ADD}
        modelTitle="subject"
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
