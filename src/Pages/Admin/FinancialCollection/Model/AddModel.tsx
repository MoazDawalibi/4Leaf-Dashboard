import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useAddTag } from "../../../../api/tags";
import ModelForm from "./ModelForm";
import { useAddFinancialCollection } from "../../../../api/financial_collection";
import { formatDate } from "../../../../utils/formatDate";
import dayjs from "dayjs";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddFinancialCollection();

  const handleSubmit = (values: any) => {
    console.log(values);

    mutate({
      ...values,
      date: dayjs(values?.date).format("YYYY-MM-DD"),
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.Financial_Collection_ADD}
        modelTitle="financial_collection"
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
