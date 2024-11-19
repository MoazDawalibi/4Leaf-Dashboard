import React from "react";
import { ColumnType } from "antd/lib/table";
import ActionAddButton from "./ActionAddButton";
import ActionButtons from "./ActionButtons";
import { ModalEnum } from "../../enums/Model";

interface ActionColumnProps {
  canAddPayment: boolean;
  canDeletePayment: boolean;
  canEditPayment: boolean;
  handelAdd: () => void;
  handelDelete: (record: any) => void;
  handleEdit: (record: any) => void;
  ModalEnum: ModalEnum; // Adjust this type based on your ModalEnum definition
}

const createActionColumn = ({
  canAddPayment,
  canDeletePayment,
  canEditPayment,
  handelDelete,
  handleEdit,
  handelAdd,
}: ActionColumnProps): ColumnType<any> => {
  return {
    title: (
      <ActionAddButton
        canAdd={canAddPayment}
        modelName="payment"
        onClick={() => handelAdd()}
      />
    ),
    key: "actions",
    align: "end",
    className: "custom_add_button_column",
    render: (_text, record, index) => (
      <ActionButtons
        canDelete={canDeletePayment}
        canEdit={canEditPayment}
        index={index}
        onDelete={() => handelDelete(record)}
        onEdit={() => handleEdit(record)}
      />
    ),
  };
};

export default createActionColumn;
