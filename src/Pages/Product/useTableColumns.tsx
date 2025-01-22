

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import {
  canDeleteProduct,
  canEditProduct,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import { Product } from "../../types/Product";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const handelDelete = (data: Product) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.PRODUCT_DELETE);
  };

  const handleEdit = (record: Product) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.PRODUCT_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Product> = [
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
      // ellipsis: true,
    },

    {
      title: t("columns.order_id"),
      dataIndex: "order_id",
      key: "order_id",
      align: "center",
      render: (_text, record) => record?.orders?.id,
      // ellipsis: true,
    },

    {
      title: t("columns.shipping_fees"),
      dataIndex: "shipping_fees",
      key: "shipping_fees",
      align: "center",
      render: (_text, record) => `${record?.shipping_fee?.name} (${record?.shipping_fee?.price})` ,
      // ellipsis: true,
    },

    {
      title: t("columns.discount"),
      dataIndex: "discount",
      key: "discount",
      align: "center",
      render: (_text, record) => record?.discount,
      // ellipsis: true,
    },

    {
      title: t("columns.product_quantity"),
      dataIndex: "product_quantity",
      key: "product_quantity",
      align: "center",
      render: (_text, record) => record?.product_quantity,
      // ellipsis: true,
    },

    {
      title: t("columns.price"),
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (_text, record) => record?.price,
      // ellipsis: true,
    },

    {
      title: t("columns.product_options"),
      dataIndex: "product_options",
      key: "product_options",
      align: "center",
      render: (_text, record) => record?.product_options,
      // ellipsis: true,
    },

    {
      title: t("columns.price_with_currency"),
      dataIndex: "price_with_currency",
      key: "price_with_currency",
      align: "center",
      render: (_text, record) => record?.price_with_currency,
      // ellipsis: true,
    },

    {
      title: t("columns.price_with_quantity"),
      dataIndex: "price_with_quantity",
      key: "price_with_quantity",
      align: "center",
      render: (_text, record) => record?.price_with_quantity,
      // ellipsis: true,
    },

    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteProduct}
            canEdit={canEditProduct}
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


