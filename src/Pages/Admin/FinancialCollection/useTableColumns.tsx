import { TableColumnsType } from "antd";
import { tags } from "../../../types/Item";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import {
  canDeleteFinancial_Collection,
  canDeleteTags,
  canEditFinancial_Collection,
  canEditTags,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const handelDelete = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.Financial_Collection_DELETE);
  };
  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.Financial_Collection_EDIT);
  };

  const columns: TableColumnsType<any> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.amount"),
      dataIndex: "amount",
      key: "amount",
      align: "center",
      ellipsis: true,
    },
    {
      title: t("columns.date"),
      dataIndex: "date",
      key: "date",
      align: "center",
      ellipsis: true,
    },
    {
      title: t("columns.description"),
      dataIndex: "description",
      key: "description",
      align: "center",
      ellipsis: true,
    },
    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canEditFinancial_Collection}
            canEdit={canDeleteFinancial_Collection}
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
