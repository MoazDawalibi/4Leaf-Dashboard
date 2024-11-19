import { TableColumnsType } from "antd";
import { Student } from "../../../types/Student";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDeleteManager,
  canDeleteStudent,
  canEditManager,
  canEditStudent,
  canShowManager,
  canShowStudent,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { Manager } from "../../../types/Manager";
import { ABILITIES_ENUM } from "../../../enums/abilities";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: Manager) => {
    navigate(`${record?.id}`);
  };

  const handelDelete = (data: Manager) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.MANAGER_DELETE);
  };

  const handleEdit = (record: Manager) => {
    setObjectToEdit(record);
    navigate(`/${ABILITIES_ENUM?.MANAGERS}/${record?.id}/edit`);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Manager> = [
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
    },
    {
      title: `${t("columns.username")}`,
      dataIndex: "username",
      key: "username",
      align: "center",
      render: (_text, record) => record?.user.username,
    },
    {
      title: `${t("columns.phone_number")}`,
      dataIndex: "contact_number",
      key: "contact_number",
      align: "center",
      render: (_text, record) => record?.contact_number,
    },

    {
      title: "",

      key: "actions",
      align: "center",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteManager}
            canEdit={canEditManager}
            // canShow={canShowManager}
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
