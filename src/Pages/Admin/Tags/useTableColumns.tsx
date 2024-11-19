import { TableColumnsType } from "antd";
import { tags } from "../../../types/Item";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { useModalState } from "../../../zustand/Modal";
import { useTranslation } from "react-i18next";
import { canDeleteTags, canEditTags } from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";

export const useColumns = () => {
  const [t] = useTranslation();

  const { setIsOpen } = useModalState((state) => state);

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const handelDelete = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.TAGS_DELETE);
  };
  const handleEdit = (record: any) => {
    setObjectToEdit(record);
    setIsOpen(ModalEnum?.TAGS_EDIT);
  };

  const columns: TableColumnsType<tags> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: t("columns.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
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
            canDelete={canEditTags}
            canEdit={canDeleteTags}
            index={index}
            onDelete={() => handelDelete(record)}
            onEdit={() => handleEdit(record)}
          />
        );
      },
    },
  ];

  return columns;
};
