import { TableColumnsType } from "antd";
import { user } from "../../../types/Item";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import { canDeleteUser, canEditUser } from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { useNavigate } from "react-router-dom";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);

  const handelDelete = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.USER_DELETE);
  };
  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.USER_EDIT);
  };

  const columns: TableColumnsType<user> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.username"),
      dataIndex: "username",
      key: "username",
      align: "center",
    },
    {
      title: t("columns.phone_number"),
      dataIndex: "phone_number",
      key: "phone_number",
      align: "center",
    },
    {
      title: t("columns.type"),
      dataIndex: "type",
      key: "type",
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
            canDelete={canEditUser}
            canEdit={canDeleteUser}
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
