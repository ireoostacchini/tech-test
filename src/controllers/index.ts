import homeController from "./homeController";

const controllers = (() => {
  const registerRoutes = (router: any) => {
    homeController.registerRoutes(router);
  };

  return {
    registerRoutes,
  };
})();

export default controllers;
