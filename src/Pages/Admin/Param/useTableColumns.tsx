import { TableColumnsType } from "antd";
import { param, user } from "../../../types/Item";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import {
  canDeleteParam,
  canDeleteUser,
  canEditParam,
  canEditUser,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const handelDelete = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.Param_DELETE);
  };
  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.Param_EDIT);
  };

  const columns: TableColumnsType<param> = [
    {
      title: t("columns.key"),
      dataIndex: "key",
      key: "key",
      align: "center",
    },
    {
      title: t("columns.value"),
      dataIndex: "value",
      key: "value",
      align: "center",
    },
    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canEditParam}
            canEdit={canDeleteParam}
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
