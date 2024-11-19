import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import { useUpdateSubject } from "../../../../api/subject";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { handelImageState } from "../../../../utils/DataToSendImageState";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";

const ModalForm: React.FC = () => {
  const { objectToEdit } = useObjectToEdit((state) => state);

  const { mutate, status } = useUpdateSubject();
  const { subject_id } = useParams<ParamsEnum>();
  const handleSubmit = (values: any) => {
    const Data_to_send = { ...values, subject_id };
    const handelImage = handelImageState(Data_to_send, "icon");
    mutate(handelImage);
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.SUBJECT_EDIT}
        modelTitle="subject"
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

export default ModalForm;
