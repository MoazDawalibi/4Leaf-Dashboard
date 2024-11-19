import { TableColumnsType } from "antd";
import { Question } from "../../../types/Item";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { useNavigate } from "react-router-dom";
import { useModalState } from "../../../zustand/Modal";
import {
  canDeleteQuestion,
  canEditQuestion,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { useFilterStateState } from "../../../zustand/Filter";
import { FaPaperclip } from "react-icons/fa";
import { ParamsEnum } from "../../../enums/params";
import ReportTableIcon from "../../../Components/Ui/ReportTableIcon";

export const useColumns = () => {
  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setIsOpen } = useModalState((state) => state);
  const { setFilter } = useFilterStateState();

  const handelDelete = (data: any) => {
    setObjectToEdit(data);
    setIsOpen(ModalEnum?.QUESTION_DELETE);
  };

  const handleNavigateToReport = (record: any) => {
    setFilter({});
    // console.log(record);

    navigate(`/report/${record?.report?.id}`);
  };
  const handleEdit = (record: any) => {
    console.log(record, "record");
    const lesson = record?.lessons?.[0];
    const unit = lesson?.unit;
    const subject = unit?.subject;
    const grade = subject?.grade;

    setFilter({});
    navigate(
      `/${ABILITIES_ENUM?.GRADE}/${grade?.id}/${ABILITIES_ENUM?.SUBJECT}/${subject?.id}/${ABILITIES_ENUM?.UNIT}/${unit?.id}/${ABILITIES_ENUM?.LESSON}/${lesson?.id}/${ABILITIES_ENUM?.QUESTION}/${record?.id}`,
    );
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Question> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (text, record) => record?.id,
    },
    {
      title: `${t("columns.content")}`,
      dataIndex: "content",
      key: "content",
      align: "center",
      render: (text, record) => record?.content,
      ellipsis: true,
    },
    {
      title: `${t("columns.course")}`,
      dataIndex: "lessons",
      key: "lessons",
      align: "center",
      render: (text, record) => {
        const lesson = record?.lessons?.[0];
        const unit = lesson?.unit;
        const subject = unit?.subject;
        const grade = subject?.grade;

        return <> {grade?.name} </>;
      },
      ellipsis: true,
    },
    {
      title: `${t("columns.subject")}`,
      dataIndex: "lessons",
      key: "lessons",
      align: "center",
      render: (text, record) => {
        const lesson = record?.lessons?.[0];
        const unit = lesson?.unit;
        const subject = unit?.subject;

        return <> {subject?.name} </>;
      },
      ellipsis: true,
    },
    {
      title: `${t("columns.unit")}`,
      dataIndex: "lessons",
      key: "lessons",
      align: "center",
      render: (text, record) => {
        const lesson = record?.lessons?.[0];
        const unit = lesson?.unit;
        return <> {unit?.name} </>;
      },
      ellipsis: true,
    },

    {
      title: `${t("columns.lesson")}`,
      dataIndex: "lessons",
      key: "lessons",
      align: "center",
      render: (text, record) => {
        const lesson = record?.lessons?.[0];
        console.log(lesson, "lesson");

        return <> {lesson?.name} </>;
      },
      ellipsis: true,
    },

    // {
    //   title: `${t("columns.hint")}`,
    //   dataIndex: "hint",
    //   key: "hint",
    //   align: "center",
    //   render: (text, record) => {
    //     return (
    //       <>{record?.hint ?? "_"}</>
    //     );
    //   },
    //   ellipsis: true,
    // },
    {
      title: `${t("columns.tags")}`,
      dataIndex: "tags",
      key: "tags",
      align: "center",

      render: (text, record) => {
        const tags =
          record?.tags?.map((item: any) => {
            return item?.name;
          }) ?? [];
        return (
          <div>
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < tags.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span>_</span>
            )}
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: t("columns.question_type"),
      dataIndex: "isBase",
      key: "isBase",
      align: "center",
      render: (text, record) =>
        record?.isBase
          ? t("columns.base_question")
          : t("columns.normal_question"),
    },

    {
      title: "#",
      key: "actions",
      align: "center",

      render: ({ _text, record, index }: any) => {
        return (
          <div className="flex">
            <ActionButtons
              canDelete={canDeleteQuestion}
              canEdit={canEditQuestion}
              index={index}
              onDelete={() => handelDelete(record)}
              onEdit={() => handleEdit(record)}
            />
            {!!record?.report?.content ? (
              <ReportTableIcon
                editTooltipTitle="practical.with_report"
                onClick={() => handleNavigateToReport(record)}
              />
            ) : (
              ""
            )}
          </div>
        );
      },
    },
  ];

  return columns;
};
