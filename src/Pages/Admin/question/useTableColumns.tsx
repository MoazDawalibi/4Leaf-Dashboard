import { TableColumnsType } from "antd";
import { Question } from "../../../types/Item";
import { FaPlus } from "react-icons/fa";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { useNavigate } from "react-router-dom";
import { useModalState } from "../../../zustand/Modal";
import {
  canAddQuestion,
  canDeleteQuestion,
  canEditQuestion,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";

export const useColumns = () => {
  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setIsOpen } = useModalState((state) => state);

  const handelAdd = () => {
    setObjectToEdit({});
    navigate(`${ABILITIES_ENUM?.QUESTION}/add`);
  };

  const handelDelete = (data: any) => {
    setObjectToEdit(data);
    setIsOpen(ModalEnum?.QUESTION_DELETE);
  };

  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    navigate(`${ABILITIES_ENUM?.QUESTION}/${record?.id}`);
  };
  const handleClickQr = (data: any) => {
    setObjectToEdit(data);
    setIsOpen(ModalEnum?.QUESTION_QR);
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
      title: `${t("columns.hint")}`,
      dataIndex: "hint",
      key: "hint",
      align: "center",
      render: (text, record) => {
        return <>{record?.hint ?? "_"}</>;
      },
      ellipsis: true,
    },
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

      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteQuestion}
            canEdit={canEditQuestion}
            index={index}
            onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
            canShowQr={true}
            onShoqQr={() => handleClickQr(record)}
          />
        );
      },
    },
  ];

  return columns;
};
