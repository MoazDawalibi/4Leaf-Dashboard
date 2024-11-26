import React from "react";
import { TMenuItem } from "../../types/App";
import { hasAbility } from "../../utils/hasAbility";
import { Route } from "react-router-dom";
import { RenderRouteElement } from "./RenderRouteElement";

export const renderRoutesRecursively = (routes: TMenuItem[]) =>
  routes.map((route: TMenuItem) => {
    // const useAbility = hasAbility(route.abilities, route.abilities_value);
    // if (!useAbility) {
    //   return false;
    // }

    return (
      <React.Fragment key={route.path}>
        <Route path={route.path} element={RenderRouteElement(route)} />
        {route.children && renderRoutesRecursively(route.children)}
      </React.Fragment>
    );
  });
