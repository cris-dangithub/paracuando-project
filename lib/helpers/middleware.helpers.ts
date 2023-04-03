const separateRoutes = (route: string) => {
  const separated = route.split('/');
  return separated.slice(1, separated.length);
};

// Returns "true" if the route belongs to a specified array of routes
export const routeChecker = (routeToParse: string, routes: string[]) => {
  let result = true;
  const newRoutes = routes.map((route) =>
    route.includes('/:path*') ? route.split('/:path*')[0] : route
  );
  const routeIdx = newRoutes.findIndex((route) =>
    routeToParse.startsWith(route)
  );
  if (routeIdx === -1) return false;
  const divRouteToParse = separateRoutes(routeToParse);
  const divRoute = separateRoutes(newRoutes[routeIdx]);
  for (let i = 0; i < divRoute.length; i++) {
    if (divRoute[i] !== divRouteToParse[i]) {
      result = false;
      break;
    }
  }
  return result;
};
