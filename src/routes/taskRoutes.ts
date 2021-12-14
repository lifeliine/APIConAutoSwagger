import {Router} from "express";
import { getTasks, createTask, getTaskId, deleteTask, updateTask, count } from '../controllers/taskControllers';


const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: the name of task
 *              description:
 *                  type: string
 *                  description: the details of the task
 *          required:
 *              - name
 *              - description
 *          example:
 *              id: 3-CiWFmLK2JF7l8gKegEy
 *              name: compras
 *              description: Ir al almacen el viernes
 *      TaskNotFound:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: message for not found task
 *          example:
 *              message: Task not found.
 *  parameters:
 *      taskId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Return a task list
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: the list of tasks
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *                              
 *              
 */
router.get('/tasks',getTasks);

/**
 * @swagger
 * /count:
 *  get:
 *      summary: Return a count of task list
 *      tags: [Count]
 *      responses:
 *          200:
 *              description: number of tasks the list has
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: integer
 *                          example: 17
 * 
 */
router.get("/count", count);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: create a new Task
 *      tags: [Tasks]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses:
 *          200:
 *              description: task created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          500:
 *              description: some server error
 *                  
 */
router.post('/tasks', createTask);


/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *      summary: return a specific task
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      responses:
 *          200:
 *              description: task found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 * 
 *          404:
 *              description: task not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TaskNotFound'
 *      
 * 
 */
router.get('/tasks/:id',getTaskId);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *      summary: update a task by id
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses:
 *          200:
 *              description: successfully updated task
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          404:
 *              description: task not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TaskNotFound'
 * 
 * 
 */  
router.put('/tasks/:id', updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *      summary: get an id and delete task
 *      tags: [Tasks]
 *      parameters:
 *          - $ref: '#/components/parameters/taskId'
 *      responses:
 *          200:
 *              description: task found and successful delete
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          404:
 *              description: task not found
 *              content:
 *                  application/json:
 *                      schemas:
 *                          $ref: '#/components/schemas/TaskNotFound'
 */
router.delete('/tasks/:id', deleteTask);


export default router