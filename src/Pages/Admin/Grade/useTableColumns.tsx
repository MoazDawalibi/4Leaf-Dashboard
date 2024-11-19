import { TableColumnsType } from "antd";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteGrade,
  canEditGrade,
  canShowGrade,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { Grade } from "../../../types/Grade";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: Grade) => {
    setFilter({});
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Grade) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.GRADE_DELETE);
  };

  const handleEdit = (record: Grade) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.GRADE_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Grade> = [
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
      title: t("columns.image"),
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (_text: any, record: Grade) => {
        let str = record?.icon;

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
            canDelete={canDeleteGrade}
            canEdit={canEditGrade}
            canShow={canShowGrade}
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
