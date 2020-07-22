import filesController from "./filesController";

const controllers = (() => {
  const registerRoutes = (router: any, business: any) => {
    new filesController().registerRoutes(router, business);
  };

  return {
    registerRoutes,
  };
})();

export default controllers;
