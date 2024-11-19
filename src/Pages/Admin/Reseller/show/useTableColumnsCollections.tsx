import { TableColumnsType } from "antd";
import { useTranslation } from "react-i18next";
import ActionButtons from "../../../../Components/Table/ActionButtons";
import {
  canDeleteReSeller,
  canEditReSeller,
  canShowReSeller,
} from "../../../../utils/hasAbilityFn";
import { ReSeller } from "../../../../types/ReSeller";
import useModalHandler from "../../../../utils/useModalHandler";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { ModalEnum } from "../../../../enums/Model";

export const useColumnsCollection = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);

  const [t] = useTranslation();
  const handelDelete = (data: ReSeller) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.RE_SELLER_DELETE);
  };

  const handleEdit = (record: ReSeller) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.RE_SELLER_EDIT);
  };
  const columns: TableColumnsType<ReSeller> = [
    {
      title: t("columns.ID"),
      dataIndex: "ID",
      key: "ID",
      align: "center",
    },
    {
      title: t("columns.description"),
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: t("columns.amount"),
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
    {
      title: t("columns.date"),
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: t("columns.procedure"),

      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteReSeller}
            canEdit={canEditReSeller}
            index={index}
            onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
          />
        );
      },
    },
  ];

  return columns;
};
