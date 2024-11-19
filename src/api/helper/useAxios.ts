import useAuthState from "../../zustand/AuthState";
import { BaseURL, HEADER_KEY } from "../config";
import AxiosBuilder from "./AxiosBuilder";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { useValidationState } from "../../Components/ValidationField/utils/ValidationState";
import { useNavigate } from "react-router-dom";
import { AxiosQueryEnum, AxiosStatusEnum } from "../../enums/Axios";

function useAxios() {
  const { isAuthenticated, token } = useAuthState();
  const { setValidation } = useValidationState((state) => state);
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  const { logout } = useAuthState();
  const navigate = useNavigate();

  const buildAxios = new AxiosBuilder()
    .withBaseURL(BaseURL)
    .withResponseType("json")
    .withTimeout(120000);

  if (isAuthenticated) {
    buildAxios.withHeaders({
      Authorization: "Bearer " + token,
    });
  }

  const build_Axios = buildAxios.build();

  build_Axios.interceptors.response.use(
    function (response: any) {
      const responseMsg = response?.data?.message;
      const method = response.config.method;

      const key = response.config.headers[HEADER_KEY];
      const isToasted = response.config.headers["X-Custom-Message"];

      const ResponseMessage =
        responseMsg || t("validation.the_possess_done_successful");
      if (method !== AxiosQueryEnum?.GET) {
        queryClient.invalidateQueries(key);
        if (isToasted) {
          toast.success(ResponseMessage);
        }
        setValidation([{}]);
      }
      return response;
    },
    function (error) {
      // Reject errors with non-2xx status codes
      const status = error?.response?.status;
      // console.log(status);

      // if (status >= 400) {
      //   return Promise.reject(error);
      // }

      const errorMsg = error?.response?.data?.error;
      const errorField = error?.response?.data;
      const method = error.config.method;

      if (status === AxiosStatusEnum.VALIDATION) {
        setValidation(errorMsg ?? errorField);
        const ErrorKey = Object?.keys(errorMsg)?.[0];
        const isString =
          typeof errorMsg === "string"
            ? errorMsg
            : (errorMsg?.[ErrorKey]?.[0] ??
              t("validation.some_thing_went_wrong"));

        toast.error(t(`${isString}`));
        return;
      }
      if (status === AxiosStatusEnum.AUTHENTICATED) {
        logout();
        navigate("/auth");
      }

      if (method !== AxiosQueryEnum?.GET) {
        const errorMessage = errorMsg || t("validation.some_thing_went_wrong");
        toast.error(errorMessage);
        return Promise.reject(error);
      }

      // return Promise.reject(error); // Important to reject the promise
    },
  );

  return build_Axios;

  // return buildAxios.build();
}

export default useAxios;
