import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CrudRoute, menuItems } from "./Routes";
import { Spin } from "antd";
import { hasAbility } from "./utils/hasAbility";
import { renderRoutesRecursively } from "./Components/Routes/RenderRoutesRecursively";
import { RenderRouteElement } from "./Components/Routes/RenderRouteElement";
import { UserTypeEnum } from "./enums/UserType";
import { RoleByType } from "./utils/RoleByType";

const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"));
const Auth = lazy(() => import("./Pages/Auth/Page"));
const App = () => {
  return (
    <Routes>
      <Route
        key={"auth"}
        path={"/auth"}
        element={
          <Suspense fallback={<Spin />}>
            <Auth />
          </Suspense>
        }
      />
      <Route
        key={"Page404"}
        path={"/*"}
        element={
          <Suspense fallback={<Spin />}>
            <Page404 />
          </Suspense>
        }
      />

      {renderRoutesRecursively(menuItems)}

      {CrudRoute.map((route) => {
        const useAbility = hasAbility(route.abilities, route.abilities_value);
        if (!RoleByType(route)) {
          return false;
        }
        if (!useAbility) {
          return false;
        }
        return (
          <Route
            key={route.path ?? ""}
            path={route.path ?? ""}
            element={RenderRouteElement(route)}
          />
        );
      })}
    </Routes>
  );
};

export default App;
