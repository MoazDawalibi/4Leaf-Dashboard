

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteShippingFees,
  canEditShippingFees,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { ShippingFees } from "../../types/ShippingFees";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: ShippingFees) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: ShippingFees) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.SHIPPING_FEES_DELETE);
  };

  const handleEdit = (record: ShippingFees) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.SHIPPING_FEES_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<ShippingFees> = [
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
      title: t("columns.price"),
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (_text, record) => record?.price,
      ellipsis: true,
    },

    {
      title: t("columns.is_disabled"),
      dataIndex: "is_disabled",
      key: "is_disabled",
      align: "center",
      render: (_text, record) => record?.is_disabled == true ? "true" :"false",
      ellipsis: true,
    },
    {
      title: t("columns.image"),
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (_text: any, record: ShippingFees) => {
        let str = record?.image;

        return <ColumnsImage src={str} />;
      },
    },
    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteShippingFees}
            canEdit={canEditShippingFees}
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


