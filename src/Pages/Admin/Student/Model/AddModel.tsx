import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddStudent } from "../../../../api/student";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddStudent();

  const handleSubmit = (values: any) => {
    console.log(values);

    mutate({
      ...values,
      grade_id: values.grade_id?.id,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.STUDENT_ADD}
        modelTitle="student"
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
