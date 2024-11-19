const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}



let FileContainer = `

import { TableColumnsType } from "antd";
import useModalHandler from "../../utils/useModalHandler";
import { ModalEnum } from "../../enums/Model";
import { useObjectToEdit } from "../../zustand/ObjectToEditState";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  canDelete${capitalizeFirstLetter(fileName)},
  canEdit${capitalizeFirstLetter(fileName)},
  canShow${capitalizeFirstLetter(fileName)},
} from "../../utils/hasAbilityFn";
import ActionButtons from "../../Components/Table/ActionButtons";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { ${capitalizeFirstLetter(fileName)} } from "../../types/${capitalizeFirstLetter(fileName)}";
import { useFilterStateState } from "../../zustand/Filter";

export const useColumns = () => {
  const { handel_open_model } = useModalHandler();

  const { setObjectToEdit } = useObjectToEdit((state) => state);
  const navigate = useNavigate();
  const { setFilter } = useFilterStateState();

  const handelShow = (record: ${capitalizeFirstLetter(fileName)}) => {
    setFilter({});
    navigate(record?.id);
  };

  const handelDelete = (data: ${capitalizeFirstLetter(fileName)}) => {
    setObjectToEdit(data);
    handel_open_model(ModalEnum?.${capitalizeAllWord(fileName)}_DELETE);
  };

  const handleEdit = (record: ${capitalizeFirstLetter(fileName)}) => {
    setObjectToEdit(record);
    handel_open_model(ModalEnum?.${capitalizeAllWord(fileName)}_EDIT);
  };
  const [t] = useTranslation();

  const columns: TableColumnsType<${capitalizeFirstLetter(fileName)}> = [
    {
      title: t("columns.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record) => record?.id,
    },
    {
      title: ("columns.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_text, record) => record?.name,
      ellipsis: true,
    },
    {
      title: t("columns.image"),
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (_text: any, record: ${capitalizeFirstLetter(fileName)}) => {
        let str = record?.image;

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
            canDelete={canDelete${capitalizeFirstLetter(fileName)}}
            canEdit={canEdit${capitalizeFirstLetter(fileName)}}
            canShow={canShow${capitalizeFirstLetter(fileName)}}
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


`
fs.writeFileSync('src/Pages/'+fileName+"/"+"useTableColumns.tsx", 
FileContainer
);

console.log(`File "${fileName}" generated successfully.`);



function capitalizeFirstLetter(word) {
  return (word).charAt(0).toUpperCase() + (word).slice(1);
}

function capitalizeAllWord(word) {
return (word).toUpperCase() ;
}