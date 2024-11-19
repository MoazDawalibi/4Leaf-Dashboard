import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import ModelForm from "./ModelForm";
import { useAddCoupon } from "../../../../api/Coupon";
import dayjs from "dayjs";
import { ConvertArrayToArrayOfIds } from "../../../../utils/ConvertArrayToArrayOfIds";

const AddModel: React.FC = () => {
  const { mutate, status } = useAddCoupon();

  const handleSubmit = (values: any) => {
    console.log(values?.due_to, "values?.due_to");
    const due_to = values?.due_to.format("YYYY-MM-DD HH:mm:ss");
    console.log(due_to);
    mutate({
      ...values,
      due_to,
      grade_id: values?.grade_id?.id,
    });
  };
  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.COUPON_ADD}
        modelTitle="Coupon"
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
