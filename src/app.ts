//Aca vamos a cofigurar el servidor
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 3000); // asi definimos la variable port y asignamos el archivo env si existe
app.use(cors()) //para que se pueda comunicar con otros servidores si existen
app.use(morgan('dev')) //para poder ver las peticiones que llegan al server
app.use(express.json()) //para poder trabajar con los json que llegan al server
export default app
