

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteOrder,
  canEditOrder,
  canShowOrder,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Order } from "../../types/Order";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Order) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Order) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.ORDER_DELETE);
  };

  const handleEdit = (record: Order) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.ORDER_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Order> = [
    // {
    //   title: t("columns.id"),
    //   dataIndex: "id",
    //   key: "id",
    //   align: "center",
    //   render: (_text, record) => record?.id,
    // },

    {
      title: t("columns.status"),
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_text, record) => record?.status,
      // ellipsis: true,
    },

    {
      title: t("columns.customer_name"),
      dataIndex: "customer_name",
      key: "customer_name",
      align: "center",
      render: (_text, record) => record?.customers?.name,
      // ellipsis: true,
    },

    {
      title: t("columns.shipment_name"),
      dataIndex: "shipment_name",
      key: "shipment_name",
      align: "center",
      render: (_text, record) => record?.shipments?.name,
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
            canDelete={canDeleteOrder}
            canEdit={canEditOrder}
            canShow={canShowOrder}
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


