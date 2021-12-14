import { Handler, Request, Response } from "express"; //manejador lo usamos para las acciones de la db
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

    try {
        getConnection().get('tasks').push(newTask).write();
        res.json(newTask);    
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTaskId: Handler = (req, res) => {
    const taskFound = taskFoundFunction(req,res,true)
    res.json(taskFound);
}

export const deleteTask: Handler = (req,res) => {
    const taskFound = taskFoundFunction(req,res)
    const deletedTask  = getConnection().get('tasks').remove({id: req.params.id}).write();
    res.json(deletedTask);
}






function taskFoundFunction(req:Request,res:Response,devuelve:boolean=false) {
    const taskFound = getConnection().get('tasks').find({id:req.params.id}).value();
    if(!taskFound){
        return res.status(404).json({message:"Task was not Found."})
    }else{
        if(devuelve) return taskFound;
    }
}


