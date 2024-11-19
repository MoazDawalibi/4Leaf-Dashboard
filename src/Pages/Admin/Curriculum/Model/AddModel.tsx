import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddCurriculum } from "../../../../api/curriculum";
import { useParams } from "react-router-dom";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddCurriculum();
  const { subject_id } = useParams();

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
      subject_id: subject_id,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.CURRICULUM_ADD}
        modelTitle="curriculum"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues({})}
        getValidationSchema={getValidationSchema}
        width="500px"
      >
        <ModelForm />
      </LayoutModel>
    </>
  );
};

export default AddModel;
