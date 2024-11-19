import { PrevRoutes } from "../Routes";

const pathToRegex = (path: string) => {
  // Convert path to regex by replacing dynamic segments (:id) with regex pattern
  return new RegExp("^" + path.replace(/:\w+/g, "\\w+") + "$");
};

export const getPrevPathRoute = (path: string) => {
  // Iterate through the routes and find the one that matches the provided path
  for (let route of PrevRoutes) {
    const routeRegex = pathToRegex(route.path);
    if (routeRegex.test(path)) {
      return route.prevPath;
    }
  }
  return null;
};
