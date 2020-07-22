import homeController from "./homeController";
import filesController from "./filesController";

const controllers = (() => {
  const registerRoutes = (router: any) => {
    homeController.registerRoutes(router);
    filesController.registerRoutes(router);
  };

  return {
    registerRoutes,
  };
})();

export default controllers;
