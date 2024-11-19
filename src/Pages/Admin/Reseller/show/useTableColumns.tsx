import { TableColumnsType } from "antd";
import { useTranslation } from "react-i18next";
import { ReSeller } from "../../../../types/ReSeller";

export const useColumns = () => {
  const [t] = useTranslation();

  const columns: TableColumnsType<ReSeller> = [
    {
      title: t("columns.student_full_name"),
      key: "student_full_name",
      align: "center",
      render: (row) => {
        console.log(row);

        return row?.student?.first_name + " " + row?.student?.last_name;
      },
    },
    {
      title: t("columns.grade"),
      render: (row) => {
        return row?.package?.name;
      },
      key: "package",
      align: "center",
    },
    {
      title: t("columns.paid_price"),
      render: (row) => {
        return row?.package?.price;
      },
      key: "price",
      align: "center",
    },
    {
      title: t("columns.activation_date"),
      dataIndex: "activation_date",
      key: "activation_date",
      align: "center",
    },
    {
      title: t("columns.expiration_date"),
      dataIndex: "expiration_date",
      key: "expiration_date",
      align: "center",
    },
  ];

  return columns;
};
