import { Space, TableColumnsType, Tooltip } from "antd";
import { FaPlus } from "react-icons/fa";
import useModalHandler from "../../../utils/useModalHandler";
import { ModalEnum } from "../../../enums/Model";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { ABILITIES_ENUM } from "../../../enums/abilities";
import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  canAddUnit,
  canDeleteUnit,
  canEditUnit,
  canShowUnit,
} from "../../../utils/hasAbilityFn";
import ActionButtons from "../../../Components/Table/ActionButtons";
import { Unit } from "../../../types/Unit";
import { ConvertEnumToTranslate } from "../../../utils/ConvertEnumToTranslate";
import { DragHandleUnit } from "./DrapableTable";
import { useFilterState } from "../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();
  const { setFilter } = useFilterStateState();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();

  const handelShow = (record: Unit) => {
    setFilter({});
    navigate(`${ABILITIES_ENUM?.UNIT}/${record?.id}`);
  };

  const handelDelete = (data: Unit) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.UNIT_DELETE);
  };

  const handleEdit = (record: Unit) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.UNIT_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<Unit> = [
    {
      key: "sort",
      align: "center",
      width: 80,
      render: () => <DragHandleUnit />,
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
      render: (text) => text,
      ellipsis: true,
    },

    {
      title: t("columns.term"),
      dataIndex: "term",
      key: "term",
      align: "center",
      render: (text) => t(ConvertEnumToTranslate(text)),
    },

    {
      title: t("columns.procedure"),
      key: "actions",
      align: "center",
      width: "25vw",
      render: (_text, record, index) => {
        return (
          <ActionButtons
            canDelete={canDeleteUnit}
            canEdit={canEditUnit}
            canShow={canShowUnit}
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
