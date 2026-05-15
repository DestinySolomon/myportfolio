const routesModule = () =>
  import("../src/router/config").then((m) => m.default).catch(() => []);

export async function parseRoutes() {
  const routes = await routesModule();
  let res = [];
  let id = 0;
  function dfs(route, parent) {
    const { path = "", children, index } = route || {};
    id++;
    const isIndex = index === true || path === "";
    const isAbsolute = path && path[0] === "/";
    const indexFilterPath = isIndex ? parent.path : `${parent.path}/${path}`;
    const routePath = isAbsolute && !isIndex ? path : indexFilterPath;
    const routeInfo = {
      id,
      parentId: parent.id,
      path: "/" + routePath.split("/").filter(Boolean).join("/"),
    };
    if (!/\*/.test(routeInfo.path)) {
      res.push(routeInfo);
    }
    if (children) {
      children.forEach((child) => dfs(child, routeInfo));
    }
  }

  routes.forEach((route) => dfs(route, { id: 0, path: "", parentId: 0 }));
  const uniquePaths = new Set();
  res = res.filter((route) => {
    if (uniquePaths.has(route.path)) {
      return false;
    } else {
      uniquePaths.add(route.path);
      return true;
    }
  });
  return res;
}
