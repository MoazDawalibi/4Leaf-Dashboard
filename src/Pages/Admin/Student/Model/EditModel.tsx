import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateStudent } from "../../../../api/student";
import { handelImageState } from "../../../../utils/DataToSendImageState";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateStudent();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values, grade_id: values.grade_id?.id };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.STUDENT_EDIT}
        modelTitle="student"
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
