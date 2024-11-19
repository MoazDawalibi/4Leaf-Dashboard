import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Spin } from "antd";
import useSetPageTitle from "../../../../Hooks/useSetPageTitle";
import PageHeader from "../../../../Layout/Dashboard/PageHeader";
import FilterLayout from "../../../../Layout/Dashboard/FilterLayout";
import FilterForm from "./Model/FilterForm";
import InfoCard from "../../../../Components/Cards/InfoCard";
import AddressCard from "../../../../Components/Cards/AddressCard";
import {
  StudentAddressInfo,
  StudentParamInfo,
} from "../../../../Components/Cards/ParamInfo";
import StudentTabs from "./StudentTabs";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../../enums/params";

const TableHeader = () => {
  const [t] = useTranslation();
  const { student_id } = useParams<ParamsEnum>();

  useSetPageTitle([
    { name: `${t(`page_header.home`)}`, path: "" },
    { name: `${t(`page_header.users`)}`, path: "user" },
    { name: `${t(`PageTitle.students`)}`, path: "students" },
    {
      name: `${t(`PageTitle.students_details`)}`,
      path: `reseller/${student_id}`,
    },
  ]);

  return (
    <div className="TableWithHeader single_student">
      <Suspense fallback={<Spin />}>
        <PageHeader pageTitle="users" />
        <div className="single_student_body">
          <div className="student_info">
            <InfoCard
              data={StudentParamInfo}
              name={"moaz dawalibi"}
              status={"subs"}
            />
            <AddressCard data={StudentAddressInfo} />
          </div>
          <div className="student_table">
            <StudentTabs />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default TableHeader;
