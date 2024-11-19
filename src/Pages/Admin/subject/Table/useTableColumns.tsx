import { TableColumnsType } from "antd";
import { useModalState } from "../../../../zustand/Modal";
import { ModalEnum } from "../../../../enums/Model";
import { FaEye } from "react-icons/fa";
import ColumnsImage from "../../../../Components/Columns/ColumnsImage";
import { useObjectToEdit } from "../../../../zustand/ObjectToEditState";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ActionButtons from "../../../../Components/Table/ActionButtons";
import {
  canDeleteSubject,
  canEditSubject,
  canShowSubject,
} from "../../../../utils/hasAbilityFn";
import { ABILITIES_ENUM } from "../../../../enums/abilities";
import { Subject } from "../../../../types/Subject";
import { useFilterStateState } from "../../../../zustand/Filter";

export const useColumns = () => {
  const navigate = useNavigate();
  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const { setIsOpen } = useModalState((state) => state);
  const { setFilter } = useFilterStateState();

  const handelDelete = (record: Subject) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.SUBJECT_DELETE);
  };
  const handleEdit = (record: Subject) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.SUBJECT_EDIT);
  };

  const handelShow = (record: Subject) => {
    setFilter({});
    navigate(`${ABILITIES_ENUM?.SUBJECT}/${record?.id}`);
  };

  const [t] = useTranslation();
  const columns: TableColumnsType<Subject> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.subject_name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      ellipsis: true,
    },
    {
      title: t("columns.icon"),
      dataIndex: "icon",
      key: "icon",
      align: "center",
      render: (row: Subject, record) => {
        let str = record.icon;
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
            canDelete={canEditSubject}
            canEdit={canDeleteSubject}
            canShow={canShowSubject}
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
