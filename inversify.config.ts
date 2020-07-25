import { Container } from "inversify";
import IBusiness from "./src/business/IBusiness";
import Business from "./src/business";
import IDb from "./src/db/IDb";
import Db from "./src/db";
import DbConnectionManager from "./src/db/DbConnectionManager";

const container = new Container();
container.bind<IBusiness>("IBusiness").to(Business);
container.bind<IDb>("IDb").to(Db);
container.bind<DbConnectionManager>("DbConnectionManager").toSelf();

export default container;
