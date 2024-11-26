

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteShipment,
  canEditShipment,
  canShowShipment,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Shipment } from "../../types/Shipment";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Shipment) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: Shipment) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.SHIPMENT_DELETE);
  };

  const handleEdit = (record: Shipment) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.SHIPMENT_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Shipment> = [
    // {
    //   title: t("columns.id"),
    //   dataIndex: "id",
    //   key: "id",
    //   align: "center",
    //   render: (_text, record) => record?.id,
    // },
    {
      title: t("columns.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_text, record) => record?.name,
      // ellipsis: true,
    },

    {
      title: t("columns.start_date"),
      dataIndex: "start_date",
      key: "start_date",
      align: "center",
      render: (_text, record) => record?.start_date,
      // ellipsis: true,
    },

    {
      title: t("columns.end_date"),
      dataIndex: "end_date",
      key: "end_date",
      align: "center",
      render: (_text, record) => record?.end_date,
      // ellipsis: true,
    },

    {
      title: t("columns.status"),
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_text, record) => record?.status,
      // ellipsis: true,
    },

    {
      title: t("columns.order_count"),
      dataIndex: "order_count",
      key: "order_count",
      align: "center",
      render: (_text, record) => record?.order_count,
      // ellipsis: true,
    },

    {
      title: t("columns.product_count"),
      dataIndex: "product_count",
      key: "product_count",
      align: "center",
      render: (_text, record) => record?.product_count,
      // ellipsis: true,
    },

    {
      title: t("columns.currency_price"),
      dataIndex: "currency_price",
      key: "currency_price",
      align: "center",
      render: (_text, record) => record?.currency_price,
      // ellipsis: true,
    },

    {
      title: t("columns.customer_currency_price"),
      dataIndex: "customer_currency_price",
      key: "customer_currency_price",
      align: "center",
      render: (_text, record) => record?.customer_currency_price,
      // ellipsis: true,
    },

    {
      title: t("columns.shipping_fees_total_profit"),
      dataIndex: "shipping_fees_total_profit",
      key: "shipping_fees_total_profit",
      align: "center",
      render: (_text, record) => record?.shipping_fees_total_profit,
      // ellipsis: true,
    },

    {
      title: t("columns.currency_profit"),
      dataIndex: "currency_profit",
      key: "currency_profit",
      align: "center",
      render: (_text, record) => record?.currency_profit,
      // ellipsis: true,
    },

    {
      title: t("columns.total_profit"),
      dataIndex: "total_profit",
      key: "total_profit",
      align: "center",
      render: (_text, record) => record?.total_profit,
      // ellipsis: true,
    },

    {
      title: t("columns.total_price"),
      dataIndex: "total_price",
      
      key: "total_price",
      align: "center",
      render: (_text, record) => record?.total_price,
      // ellipsis: true,
    },

    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      // width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteShipment}
            canEdit={canEditShipment}
            canShow={canShowShipment}
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


