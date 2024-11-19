import { TableColumnsType } from "antd";
import useModalHandler from "../../../../utils/useModalHandler";
import { ModalEnum } from "../../../../enums/Model";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteNotification,
  canEditNotification,
} from "../../../../utils/hasAbilityFn";
import ActionButtons from "../../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../../Components/Columns/ColumnsImage";
import { useFilterStateState } from "../../../../zustand/Filter";
import { Notification } from "../../../../types/Notification";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Notification) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Notification) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.NOTIFICATION_DELETE);
  };

  const handleEdit = (record: Notification) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.NOTIFICATION_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Notification> = [
    {
      title: t("columns.created_at"),
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
      render: (_text, record) => record?.created_at,
    },
    {
      title: `${t("columns.seen")}`,
      dataIndex: "seen",
      key: "seen",
      align: "center",
      render: (_text, record) => record?.seen,
      ellipsis: true,
    },
    {
      title: `${t("columns.title")}`,
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (_text, record) => record?.title,
      ellipsis: true,
    },
    {
      title: `${t("columns.notifiable_type")}`,
      dataIndex: "notifiable_type",
      key: "notifiable_type",
      align: "center",
      render: (_text, record) => record?.notifiable_type,
      ellipsis: true,
    },
    {
      title: `${t("columns.body")}`,
      dataIndex: "body",
      key: "body",
      align: "center",
      render: (_text, record) => record?.body,
      // ellipsis:true
    },
  ];

  return columns;
};
