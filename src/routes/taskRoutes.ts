import {Router} from "express";
import { getTasks, createTask } from '../controllers/taskControllers';


const router = Router();

router.get('/tasks',getTasks);
router.get('/prueba',(req,res) => res.send('Hola mundo!'));

router.post('/tasks', createTask);


export default router