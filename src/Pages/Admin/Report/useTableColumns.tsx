import { TableColumnsType } from "antd";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import {
  canDeleteReport,
  canEditReport,
  canShowReport,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import ColumnsImage from "../../../Components/Columns/ColumnsImage";
import { useFilterStateState } from "../../../zustand/Filter";
import { useNavigate } from "react-router-dom";
import { Report } from "../../../types/Report";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);

  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: any) => {
    setFilter({});
    navigate(`${record?.id + "/" + record?.question?.id}`);
    console.log(record);
  };

  const columns: TableColumnsType<Report> = [
    {
      title: t("columns.content"),
      dataIndex: "content",
      key: "content",
      align: "center",
    },
    {
      title: t("columns.created_at"),
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
    },
    // {
    //   title: t("columns.image"),
    //   dataIndex: "image",
    //   key: "image",
    //   align: "center",
    //   render: (_text: any, record: Report) => {
    //     let str = record?.image;

    //     return  <ColumnsImage src={str}/>  ;
    //   },
    // },
    {
      title: t("columns.question_name"),
      dataIndex: "question_id",
      key: "question_id",
      render: (_text: any, record: any) => record?.question?.content,
      ellipsis: true,
      align: "center",
    },

    {
      title: t("columns.student_name"),
      dataIndex: "student_id",
      key: "student_id",
      render: (_text: any, record: any) =>
        !!record?.student?.first_name
          ? record?.student?.first_name + " " + record?.student?.last_name
          : "",
      align: "center",
    },

    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return !!record?.question?.id ? (
          <ActionButtons
            canShow={canShowReport}
            index={index}
            onShow={() => handelShow(record)}
          />
        ) : (
          " "
        );
      },
    },
  ];

  return columns;
};
