import { Container } from "inversify";
import IBusiness from "./src/business/IBusiness";
import Business from "./src/business";
import IDb from "./src/db/IDb";
import Db from "./src/db";

var container = new Container();
container.bind<IBusiness>("IBusiness").to(Business);
container.bind<IDb>("IDb").to(Db);

export default container;
