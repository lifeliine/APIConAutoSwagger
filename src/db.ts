//aca vamos configurar la base de datos -->lowdb
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

type Task = {
  id: string,
  name: string,
  description: string
}

let db: lowdb.LowdbSync<Task[]>;

export const createConnection = async () => {
    const adapter = new FileSync<Task[]>("db.json");
    db = lowdb(adapter)
    db.defaults({ tasks: [] }).write();
  }

export const getConnection = () => db;

