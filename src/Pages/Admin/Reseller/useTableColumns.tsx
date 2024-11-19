import { TableColumnsType } from "antd";
import { ReSeller } from "../../../types/ReSeller";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import {
  canDeleteReSeller,
  canEditReSeller,
  canShowReSeller,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { ABILITIES_ENUM } from "../../../enums/abilities";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: ReSeller) => {
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: ReSeller) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.RE_SELLER_DELETE);
  };

  const handleEdit = (record: ReSeller) => {
    setObjectToEdit(record);
    navigate(`/${ABILITIES_ENUM?.RE_SELLER}/${record?.id}/edit`);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<ReSeller> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: `${t("columns.first_name")}`,
      dataIndex: "first_name",
      key: "first_name",
      align: "center",
      render: (_text, record) => record?.first_name,
    },
    {
      title: `${t("columns.last_name")}`,
      dataIndex: "last_name",
      key: "last_name",
      align: "center",
      render: (_text, record) => record?.last_name,
    },
    {
      title: `${t("columns.username")}`,
      dataIndex: "username",
      key: "username",
      align: "center",
      render: (_text, record) => record?.user?.username,
    },
    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteReSeller}
            canEdit={canEditReSeller}
            canShow={canShowReSeller}
            index={index}
            onShow={() => handelShow(record)}
            onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
          />
        );
      },
    },
  ];

  return columns;
};
