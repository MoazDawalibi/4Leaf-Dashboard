import { TableColumnsType } from "antd";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteArea,
  canEditArea,
  canShowArea,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { Area } from "../../../types/Area";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Area) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Area) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.AREA_DELETE);
  };

  const handleEdit = (record: Area) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.AREA_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Area> = [
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
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteArea}
            canEdit={canEditArea}
            canShow={false}
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
