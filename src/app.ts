//Aca vamos a cofigurar el servidor
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {options} from './swaggerOptions';

const app = express();


app.use(cors()) //para que se pueda comunicar con otros servidores si existen
app.use(morgan('dev')) //para poder ver las peticiones que llegan al server
app.use(express.json()) //para poder trabajar con los json que llegan al server
const specs = swaggerJsDoc(options); //config de swagger
app.use(taskRoutes);
app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs)); //configurando la ruta que tiene swagger
app.set('port', process.env.PORT || 3000); // asi definimos la variable port y asignamos el archivo env si existe

export default app;
