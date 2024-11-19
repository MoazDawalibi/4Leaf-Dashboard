import { TableColumnsType } from "antd";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteCoupon,
  canEditCoupon,
  canShowCoupon,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { Coupon } from "../../../types/Coupon";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Coupon) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Coupon) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.COUPON_DELETE);
  };

  const handleEdit = (record: Coupon) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.COUPON_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Coupon> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: `${t("columns.name")}`,
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_text, record) => record?.name,
      ellipsis: true,
    },
    {
      title: `${t("columns.amount")}`,
      dataIndex: "amount",
      key: "amount",
      align: "center",
      render: (_text, record) => record?.amount,
      ellipsis: true,
    },
    {
      title: `${t("columns.code")}`,
      dataIndex: "code",
      key: "code",
      align: "center",
      render: (_text, record) => record?.code,
      ellipsis: true,
    },
    {
      title: `${t("columns.due_to")}`,
      dataIndex: "due_to",
      key: "due_to",
      align: "center",
      render: (_text, record) => record?.due_to,
      // ellipsis:true
    },
    {
      title: `${t("columns.status")}`,
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_text, record) => record?.status,
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
            canDelete={canDeleteCoupon}
            canEdit={canEditCoupon}
            // canShow={canShowCoupon}
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
