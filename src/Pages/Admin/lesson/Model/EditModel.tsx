import React, { useEffect } from "react";
import { useModalState } from "../../../../zustand/Modal";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateLesson } from "../../../../api/lesson";
import { useQueryClient } from "react-query";
import { useTranslation } from "react-i18next";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";

const ModalForm: React.FC = () => {
  const { isOpen, setIsOpen } = useModalState((state) => state);

  const { mutate, isSuccess, status } = useUpdateLesson();
  const { objectToEdit, setObjectToEdit } = useObjectToEdit();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries(["unit"]);

      setIsOpen("");
    }
  }, [setIsOpen, isSuccess, queryClient]);

  const handleSubmit = (values: any) => {
    mutate({
      id: values?.id,
      name: values?.name,
    });
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.LESSON_EDIT}
        modelTitle="lesson"
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

export default ModalForm;
