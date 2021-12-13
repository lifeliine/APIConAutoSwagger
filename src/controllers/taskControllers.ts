import { Handler } from "express"; //manejador lo usamos para las acciones de la db
import { nanoid } from "nanoid";
import { getConnection } from "../db";

export const getTasks: Handler = (req,res) => {
    const data = getConnection().get('tasks').value(); //obtenemos el array que esta en db.json
    return res.json(data);
}

export const createTask: Handler = (req,res) => {
    const {name, description} = req.body;

    const newTask = {
        name,
        description,
        id: nanoid()
    }

    res.json(newTask);
}