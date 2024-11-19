import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../../enums/Model";
import LayoutModel from "../../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../../zustand/ObjectToEditState";
import {
  useUpdateReseller,
  useUpdateResellerCollection,
} from "../../../../../api/reseller";
import { formatDate } from "../../../../../utils/formatDate";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateResellerCollection();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    mutate({
      ...values,
      date: formatDate(values?.date),
    });
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.RE_SELLER_COLLECTION_EDIT}
        modelTitle="collection"
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
