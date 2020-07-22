import filesController from "./filesController";

const controllers = (() => {
  const registerRoutes = (router: any, business: any, db: any) => {
    filesController.registerRoutes(router, business, db);
  };

  return {
    registerRoutes,
  };
})();

export default controllers;
