import React from "react";
import { getInitialValues, getValidationSchema } from "./formUtil";
import { ModalEnum } from "../../../../enums/Model";
import LayoutModel from "../../../../Layout/Dashboard/LayoutModel";
import ModelForm from "./ModelForm";
import { QueryStatusEnum } from "../../../../enums/QueryStatus";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useUpdateCoupon } from "../../../../api/Coupon";

const EditModel: React.FC = () => {
  const { mutate, status } = useUpdateCoupon();
  const { objectToEdit } = useObjectToEdit((state) => state);

  const handleSubmit = (values: any) => {
    const due_to =
      typeof values?.due_to === "string"
        ? values?.due_to
        : values?.due_to.format("YYYY-MM-DD HH:mm:ss");
    const Data_to_send = {
      ...values,
      due_to,
      grade_id: values?.grade_id?.id ?? "",
    };
    mutate(Data_to_send);
  };

  return (
    <>
      <LayoutModel
        status={status as QueryStatusEnum}
        ModelEnum={ModalEnum.COUPON_EDIT}
        modelTitle="Coupon"
        handleSubmit={handleSubmit}
        getInitialValues={getInitialValues(objectToEdit)}
        getValidationSchema={getValidationSchema}
        isAddModal={false}
      >
        <ModelForm Hide={true} />
      </LayoutModel>
    </>
  );
};

export default EditModel;
