import React from "react";
import { useGetAllReport } from "../../../../api/report";
import { useTranslation } from "react-i18next";
import { ParamsEnum } from "../../../../enums/params";
import { useParams } from "react-router-dom";

const ReportInfo = () => {
  const { report_id } = useParams<ParamsEnum>();

  const { data } = useGetAllReport({
    show: report_id,
  });

  const { t } = useTranslation();

  return (
    <div className="report_info">
      <div>
        <h4>
          {t("practical.student_name")} :{" "}
          <p>
            {!!data?.data?.student?.first_name
              ? data?.data?.student?.first_name +
                " " +
                data?.data?.student?.last_name
              : " "}
          </p>{" "}
        </h4>
        <h4>
          {t("practical.report_content")} : <p>{data?.data?.content}</p>{" "}
        </h4>
      </div>
    </div>
  );
};

export default ReportInfo;
