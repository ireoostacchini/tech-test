import config from "../config";
import knex from "knex";

const dbConnectionManager = (() => {
  const getKnex = () => {
    const knexConfig = knex({
      client: "pg",
      connection: {
        host: config.get("db.host"),
        database: config.get("db.name"),
        user: config.get("db.user"),
        password: config.get("db.password"),
      },
      searchPath: ["public"],
    });

    return knexConfig;
  };

  return {
    getKnex,
  };
})();

export default dbConnectionManager;
