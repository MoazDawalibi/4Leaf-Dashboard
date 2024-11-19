import { TableColumnsType } from "antd";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import {
  canDeleteRole,
  canEditRole,
  canShowRole,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { Role } from "../../../types/App";
import { useNavigate } from "react-router-dom";
import { ABILITIES_ENUM } from "../../../enums/abilities";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: Role) => {
    navigate(`${record?.id}/${ABILITIES_ENUM?.PERMISSIONS}`);
  };

  const handelDelete = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.ROLE_DELETE);
  };
  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.ROLE_EDIT);
  };

  const columns: TableColumnsType<Role> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.name"),
      dataIndex: "name",
      key: "name",
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
            canDelete={canEditRole}
            canEdit={canDeleteRole}
            canShow={canShowRole}
            index={index}
            onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
            onShow={() => handelShow(record)}
          />
        );
      },
    },
  ];

  return columns;
};
