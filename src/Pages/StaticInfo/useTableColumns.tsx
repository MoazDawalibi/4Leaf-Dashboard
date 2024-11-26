

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteStaticInfo,
  canEditStaticInfo,
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { StaticInfo } from "../../types/StaticInfo";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: StaticInfo) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: StaticInfo) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.STATIC_INFO_DELETE);
  };

  const handleEdit = (record: StaticInfo) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.STATIC_INFO_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<StaticInfo> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: t("columns.key"),
      dataIndex: "key",
      key: "key",
      align: "center",
      render: (_text, record) => record?.key,
      ellipsis: true,
    },
    {
      title: t("columns.value"),
      dataIndex: "value",
      key: "value",
      align: "center",
      render: (_text, record) => record?.value,
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
            canDelete={canDeleteStaticInfo}
            canEdit={canEditStaticInfo}
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


