import {Router} from "express";
import { getTasks, createTask, getTaskId,deleteTask } from '../controllers/taskControllers';


const router = Router();

router.get('/tasks',getTasks);
router.get('/prueba',(req,res) => res.send('Hola mundo!'));
router.post('/tasks', createTask);
router.get('/tasks/:id',getTaskId);
router.delete('/tasks/:id', deleteTask);


export default router