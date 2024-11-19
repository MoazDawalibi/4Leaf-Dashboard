import { TableColumnsType } from "antd";
import { Student } from "../../../types/Student";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteStudent,
  canEditStudent,
  canShowStudent,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: Student) => {
    // navigate(`${record?.user_id}`);
  };

  const handelDelete = (data: Student) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.STUDENT_DELETE);
  };

  const handleEdit = (record: Student) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.STUDENT_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Student> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.user_id,
    },
    {
      title: `${t("columns.first_name")}`,
      dataIndex: "first_name",
      key: "first_name",
      align: "center",
      render: (_text, record) => record?.first_name,
      ellipsis: true,
    },
    {
      title: `${t("columns.last_name")}`,
      dataIndex: "last_name",
      key: "last_name",
      align: "center",
      render: (_text, record) => record?.last_name,
      ellipsis: true,
    },
    {
      title: `${t("columns.sex")}`,
      dataIndex: "sex",
      key: "sex",
      align: "center",
      render: (_text, record) => record?.sex,
    },

    {
      title: "",

      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteStudent}
            canEdit={canEditStudent}
            // canShow={canShowStudent}
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
