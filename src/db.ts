//aca vamos configurar la base de datos -->lowdb
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";



let db;

export const createConnection = async () => {
    const adapter = new FileSync("db.json");
    db = lowdb(adapter)
    db.defaults({ tasks: [] }).write();
  }

