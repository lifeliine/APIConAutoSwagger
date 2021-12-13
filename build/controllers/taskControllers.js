"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasks = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTasks = (req, res) => {
    const data = (0, db_1.getConnection)().get('tasks').value(); //obtenemos el array que esta en db.json
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    const { name, description } = req.body;
    const newTask = {
        name,
        description,
        id: (0, nanoid_1.nanoid)()
    };
    res.json(newTask);
};
exports.createTask = createTask;
