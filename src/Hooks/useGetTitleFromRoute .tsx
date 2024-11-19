import { AppRoutes, CrudRoutes } from "../Routes";
import { PROJECT_NAME } from "../config/AppKey";

export const useGetTitleFromRoute = (path: any) => {
  if (AppRoutes[path]) {
    return `${PROJECT_NAME} | ${AppRoutes[path]}`;
  } else if (CrudRoutes[path]) {
    return `${PROJECT_NAME} | ${CrudRoutes[path]}`;
  }
};
