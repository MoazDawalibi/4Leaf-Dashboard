import { Checkbox, TableColumnsType } from "antd";
import { useTranslation } from "react-i18next";
import { ABILITIES_VALUES_ENUM } from "../../../../enums/abilities";
import { useFormikContext } from "formik";

export const useColumns = () => {
  const [t] = useTranslation();
  const { values, setValues } = useFormikContext<any>();
  console.log(values);

  const onChange = (type: any, index: any) => {
    const cloneValue = JSON.parse(JSON.stringify(values));
    console.log(cloneValue);

    if (!cloneValue[index]) {
      cloneValue[index] = {};
    }
    cloneValue[index][type] = !cloneValue[index][type];

    if (!cloneValue[index][type]) {
      cloneValue[index]["ALL"] = false;
    }
    setValues(cloneValue);
  };

  const onChangeAll = (index: any) => {
    const cloneValue = JSON.parse(JSON.stringify(values));
    if (!cloneValue[index]) {
      cloneValue[index] = {};
    }
    if (cloneValue[index]["ALL"]) {
      cloneValue[index] = {
        name: cloneValue[index]?.name,
        delete:
          typeof cloneValue[index]?.delete === "boolean" ? false : "disabled",
        index:
          typeof cloneValue[index]?.index === "boolean" ? false : "disabled",
        show: typeof cloneValue[index]?.show === "boolean" ? false : "disabled",
        store:
          typeof cloneValue[index]?.store === "boolean" ? false : "disabled",
        update:
          typeof cloneValue[index]?.update === "boolean" ? false : "disabled",
        ALL: false,
      };
    } else {
      cloneValue[index] = {
        name: cloneValue[index]?.name,
        delete:
          typeof cloneValue[index]?.delete === "boolean" ? true : "disabled",
        index:
          typeof cloneValue[index]?.index === "boolean" ? true : "disabled",
        show: typeof cloneValue[index]?.show === "boolean" ? true : "disabled",
        store:
          typeof cloneValue[index]?.store === "boolean" ? true : "disabled",
        update:
          typeof cloneValue[index]?.update === "boolean" ? true : "disabled",
        ALL: true,
      };
    }

    setValues(cloneValue);
  };

  const CheckBoxFieldALL = ({ record, index }: { record: any; index: any }) => {
    const isChecked = record?.ALL;

    return <Checkbox onChange={() => onChangeAll(index)} checked={isChecked} />;
  };

  const CheckBoxField = ({
    record,
    type,
    index,
  }: {
    record: any;
    type: string;
    index: number;
  }) => {
    const isChecked = record?.[type] === true;
    const isDisabled = record?.[type] === "disabled";
    return (
      <Checkbox
        onChange={() => onChange(type, index)}
        checked={isChecked}
        disabled={isDisabled}
      />
    );
  };

  const CheckBoxFieldALLPermissions = () => {
    const cloneValue = JSON.parse(JSON.stringify(values));
    const IsAllValuesTrue = cloneValue?.every((item: any) => {
      return (
        !!item?.index &&
        !!item?.show &&
        !!item?.store &&
        !!item?.update &&
        !!item?.delete
      );
    });
    const onChangeAllPermissions = () => {
      const newShape = cloneValue?.map((item: any, index: number) => {
        if (IsAllValuesTrue) {
          console.log(item);

          return {
            ...item,
            delete: typeof item?.delete === "boolean" ? false : "disabled",
            index: typeof item?.index === "boolean" ? false : "disabled",
            show: typeof item?.show === "boolean" ? false : "disabled",
            store: typeof item?.store === "boolean" ? false : "disabled",
            update: typeof item?.update === "boolean" ? false : "disabled",
            ALL: false,
          };
        } else {
          console.log(item);

          return {
            ...item,
            delete: typeof item?.delete === "boolean" ? true : "disabled",
            index: typeof item?.index === "boolean" ? true : "disabled",
            show: typeof item?.show === "boolean" ? true : "disabled",
            store: typeof item?.store === "boolean" ? true : "disabled",
            update: typeof item?.update === "boolean" ? true : "disabled",
            ALL: true,
          };
        }
      });
      setValues(newShape);
    };

    return (
      <Checkbox
        onChange={() => onChangeAllPermissions()}
        checked={IsAllValuesTrue}
      />
    );
  };
  const columns: TableColumnsType<any> = [
    {
      title: (
        <div className="df">
          {" "}
          <CheckBoxFieldALLPermissions /> {t("columns.units")}{" "}
        </div>
      ),
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_text, record, index) => {
        return <> {t(`models.${record?.name}`)} </>;
      },
    },
    {
      title: t("columns.add"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return (
          <CheckBoxField
            record={record}
            index={index}
            type={ABILITIES_VALUES_ENUM.STORE}
          />
        );
      },
    },
    {
      title: t("columns.read"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return (
          <CheckBoxField
            record={record}
            index={index}
            type={ABILITIES_VALUES_ENUM.INDEX}
          />
        );
      },
    },
    {
      title: t("columns.edit"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return (
          <CheckBoxField
            record={record}
            index={index}
            type={ABILITIES_VALUES_ENUM.UPDATE}
          />
        );
      },
    },
    {
      title: t("columns.delete"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return (
          <CheckBoxField
            record={record}
            index={index}
            type={ABILITIES_VALUES_ENUM.DELETE}
          />
        );
      },
    },
    {
      title: t("columns.show"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return (
          <CheckBoxField
            record={record}
            index={index}
            type={ABILITIES_VALUES_ENUM.SHOW}
          />
        );
      },
    },

    {
      title: t("columns.allow_everyone"),
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (_text, record, index) => {
        return <CheckBoxFieldALL record={record} index={index} />;
      },
    },
  ];

  return columns;
};
