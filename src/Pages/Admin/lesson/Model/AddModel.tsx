import React, { useEffect } from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useQueryClient } from "react-query";
import { useAddLesson } from "../../../../api/lesson";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";
import { useModalState } from "../../../../zustand/Modal";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";

const AddModel: React.FC = () => {
  const { isOpen, setIsOpen } = useModalState((state) => state);
  const queryClient = useQueryClient();
  const { mutate, isSuccess, status } = useAddLesson();
  const { OldObjectToEdit } = useObjectToEdit();
  const { unit_id } = useParams<ParamsEnum>();
  useEffect(() => {
    if (isSuccess) {
      setIsOpen("");
      queryClient.invalidateQueries(["Lesson"]);
    }
  }, [setIsOpen, isSuccess, queryClient]);

  const handleSubmit = (values: any) => {
    let order = 0;
    if (OldObjectToEdit?.order || OldObjectToEdit?.order === 0) {
      order = Number(OldObjectToEdit.order) + 1;
    }

    mutate({ ...values, unit_id: unit_id });
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.LESSON_ADD}
        modelTitle="lesson"
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
