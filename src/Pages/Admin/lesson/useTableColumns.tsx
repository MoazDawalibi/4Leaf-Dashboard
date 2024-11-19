import { TableColumnsType } from "antd";
import { Lesson } from "../../../types/Item";
import { FaPlus } from "react-icons/fa";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { useNavigate } from "react-router-dom";
import {
  canAddLesson,
  canDeleteLesson,
  canEditLesson,
  canShowLesson,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { DragHandleLesson } from "./DrapableTable";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: any) => {
    setFilter({});
    navigate(`${ABILITIES_ENUM.LESSON}/${record?.id}`);
  };

  const handelDelete = (data: any) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.LESSON_DELETE);
  };

  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.LESSON_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Lesson> = [
    {
      key: "sort",
      align: "center",
      width: 80,
      render: () => <DragHandleLesson />,
    },
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (text, record) => record?.id,
    },
    {
      title: `${t("columns.name")}`,
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text, record) => record?.name,
      ellipsis: true,
    },
    {
      // canAddLesson ? (
      //   <button
      //     onClick={() => handel_open_model(ModalEnum?.LESSON_ADD)}
      //     className="add_button"
      //   >
      //     {t("practical.add")} {t("models.lesson")} <FaPlus />
      //   </button>
      // ) : (
      //   ""
      // ),
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteLesson}
            canEdit={canEditLesson}
            canShow={canShowLesson}
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
