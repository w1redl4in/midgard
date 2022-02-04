import { MyDatabaseFunction } from "./db/my-database-function";
import "./module-b";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "TesteA1", age: 26 });
myDatabaseClassic.add({ name: "TesteA2", age: 25 });
myDatabaseClassic.add({ name: "TesteA3", age: 50 });
myDatabaseClassic.show();
