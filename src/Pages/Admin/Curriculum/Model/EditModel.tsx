import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateTag } from "../../../../api/tags";
import { useUpdateCurriculum } from "../../../../api/curriculum";
import { useParams } from "react-router-dom";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateCurriculum();
  const { objectToEdit } = useObjectToEdit((state) => state);

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
        ModelEnum={ModalEnum.CURRICULUM_EDIT}
        modelTitle="curriculum"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchema}
        isAddModal={false}
        width="500px"
      >
        <ModelForm />
      </LayoutModel>
    </>
  );
};

export default EditModel;
