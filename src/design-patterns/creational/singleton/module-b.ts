import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "TesteB1", age: 26 });
myDatabaseClassic.add({ name: "TesteB2", age: 25 });
myDatabaseClassic.add({ name: "TesteB3", age: 50 });
