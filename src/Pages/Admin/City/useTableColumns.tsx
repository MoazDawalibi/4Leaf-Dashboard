import { TableColumnsType } from "antd";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteCity,
  canEditCity,
  canShowCity,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { City } from "../../../types/City";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: City) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: City) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.CITY_DELETE);
  };

  const handleEdit = (record: City) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.CITY_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<City> = [
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
            canDelete={canDeleteCity}
            canEdit={canEditCity}
            canShow={canShowCity}
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
