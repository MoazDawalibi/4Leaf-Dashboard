import { TableColumnsType } from "antd";
import { user } from "../../../../types/Item";
import { useTranslation } from "react-i18next";

export const useColumns = () => {
  const [t] = useTranslation();

  const columns: TableColumnsType<user> = [
    {
      title: t("columns.quiz_date"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.subject"),
      dataIndex: "username",
      key: "username",
      align: "center",
    },
    {
      title: t("columns.quiz_address"),
      dataIndex: "phone_number",
      key: "phone_number",
      align: "center",
    },
    {
      title: t("columns.created_by"),
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: t("columns.creator_name"),
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: t("columns.quiz_status"),
      dataIndex: "type",
      key: "type",
      align: "center",
    },
  ];

  return columns;
};
