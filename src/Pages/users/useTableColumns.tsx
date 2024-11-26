

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteUsers,
  canEditUsers,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Users } from "../../types/Users";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Users) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: Users) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.USERS_DELETE);
  };

  const handleEdit = (record: Users) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.USERS_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Users> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: t("columns.email"),
      dataIndex: "email",
      key: "email",
      align: "center",
      render: (_text, record) => record?.email,
      ellipsis: true,
    },
    {
      title: t("columns.role_type"),
      dataIndex: "role_type",
      key: "role_type",
      align: "center",
      render: (_text, record) => record?.role_type,
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
            // canDelete={canDeleteUsers}
            canEdit={canEditUsers}
            index={index}
            // onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
            onShow={() => handelShow(record)}
          />
        );
      },
    },
  ];

  return columns;
};


