import * as Yup from "yup";
import { Student, StudentInitialValues } from "../../../../types/Student";
import { useGetAllGrade } from "../../../../api/grade";

export const getInitialValues = (
  objectToEdit: Partial<Student>,
): StudentInitialValues => {
  return {
    id: objectToEdit?.user_id,
    first_name: objectToEdit?.first_name ?? "",
    last_name: objectToEdit?.last_name ?? "",
    // address: objectToEdit?.address ?? "",
    // birthday: objectToEdit?.birthday ?? "",
    // city: objectToEdit?.city ?? "",
    grade_id: objectToEdit?.grade_id,
    // image: objectToEdit?.image ?? "",
    sex: objectToEdit?.sex,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object().shape({
    first_name: Yup.string().required("validation.required"),
    last_name: Yup.string().required("validation.required"),
  });
};
