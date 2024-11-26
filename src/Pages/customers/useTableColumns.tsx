

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteCustomers,
  canEditCustomers,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Customers } from "../../types/Customers";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Customers) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: Customers) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.CUSTOMERS_DELETE);
  };

  const handleEdit = (record: Customers) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.CUSTOMERS_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Customers> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: t("columns.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_text, record) => record?.name,
      ellipsis: true,
    },
    {
      title: t("columns.account_name"),
      dataIndex: "account_name",
      key: "account_name",
      align: "center",
      render: (_text, record) => record?.account_name,
      ellipsis: true,
    },
    {
      title: t("columns.customer_type"),
      dataIndex: "customer_type",
      key: "customer_type",
      align: "center",
      render: (_text, record) => record?.customer_type,
      ellipsis: true,
    },
    {
      title: t("columns.phone_number"),
      dataIndex: "phone_number",
      key: "phone_number",
      align: "center",
      render: (_text, record) => record?.phone_number,
      ellipsis: true,
    },
    {
      title: t("columns.note"),
      dataIndex: "note",
      key: "note",
      align: "center",
      render: (_text, record) => record?.note,
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
            canDelete={canDeleteCustomers}
            canEdit={canEditCustomers}
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


