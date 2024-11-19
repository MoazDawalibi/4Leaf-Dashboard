import React, { Suspense } from "react";
import { useFilterState } from "../../../../Components/Utils/Filter/FilterState";
import { useFilterStateState } from "../../../../zustand/Filter";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";
import { Form, Formik } from "formik";
import FormTable from "./FormTable";
import { useTranslation } from "react-i18next";
import { useGetAllRole, useUpdateRole } from "../../../../api/role";
import { useGetAllAbility } from "../../../../api/Ability";
import LoadingLottie from "../../../../Components/Lottie/Loading/LoadingLottie";
import { Button } from "antd";
import { transformPermissions } from "./FN/transformPermissions";
import { formatAbilityData } from "./FN/formatAbilityData";
import { mergePermissionsWithAbilities } from "./FN/mergePermissionsWithAbilities";
import { formatArrayToPermissions } from "./FN/formatArrayToPermission";

const App: React.FC = () => {
  const { role_id } = useParams<ParamsEnum>();
  const { filterState } = useFilterState();
  const { Filter } = useFilterStateState();
  const name = Filter?.name;
  const sort_by = Filter?.sort_by;

  const response = useGetAllRole({
    pagination: true,
    show: role_id,
    name,
    sort_by,
    ...filterState,
  });
  const { data, isLoading } = useGetAllAbility();
  const AllAbilityData = data?.data ?? [];

  const currentData = response?.data?.data?.abilities ?? [];

  const AllAbility = transformPermissions(AllAbilityData ?? []);

  const Ability = formatAbilityData(AllAbility) ?? [];
  const newShapeArray = transformPermissions([...currentData]);

  const finalShape = mergePermissionsWithAbilities(newShapeArray, Ability);

  const [t] = useTranslation();

  const { mutate, isLoading: UpdateLoading } = useUpdateRole();
  const handelSubmit = (values: any) => {
    console.log(values);

    const dataToSend = formatArrayToPermissions(values);
    console.log(dataToSend);
    mutate({
      id: role_id,
      abilities: dataToSend?.length > 0 ? dataToSend : "",
    });
  };
  const disabled =
    isLoading || response.isLoading || response.isRefetching || UpdateLoading;
  return (
    <Formik
      initialValues={finalShape}
      onSubmit={handelSubmit}
      enableReinitialize
    >
      {({ dirty }) => {
        return (
          <Form>
            <div className="permissions_submit_button mt-4">
              <Button
                className="button"
                disabled={disabled || !dirty}
                htmlType="submit"
              >
                {t("practical.submit")}
              </Button>
            </div>

            <FormTable
              response={response}
              loading={{
                spinning: disabled,
                indicator: (
                  <Suspense fallback={<></>}>
                    <LoadingLottie />
                  </Suspense>
                ),
                size: "large",
              }}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;
