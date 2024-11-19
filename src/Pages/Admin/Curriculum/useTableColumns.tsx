import { TableColumnsType } from "antd";
import { FaPlus } from "react-icons/fa";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { useNavigate } from "react-router-dom";
import {
  canAddCurriculum,
  canDeleteCurriculum,
  canEditCurriculum,
  canShowCurriculum,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { Curriculum } from "../../../types/Curriculum";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: any) => {
    navigate(`${ABILITIES_ENUM?.CURRICULUM}/${record?.id}`);
  };

  const handelDelete = (data: any) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.CURRICULUM_DELETE);
  };

  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.CURRICULUM_DELETE);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Curriculum> = [
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
    },

    {
      // canAddCurriculum ? (
      //   <button
      //     onClick={() => handel_open_model(ModalEnum?.CURRICULUM_ADD)}
      //     className="add_button"
      //   >
      //     {t("practical.add")} {t("models.curriculum")} <FaPlus />
      //   </button>
      // ) : (
      //   ""
      // ),
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteCurriculum}
            canEdit={canEditCurriculum}
            canShow={canShowCurriculum}
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
