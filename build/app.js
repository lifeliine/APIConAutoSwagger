"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Aca vamos a cofigurar el servidor
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000); // asi definimos la variable port y asignamos el archivo env si existe
app.use((0, cors_1.default)()); //para que se pueda comunicar con otros servidores si existen
app.use((0, morgan_1.default)('dev')); //para poder ver las peticiones que llegan al server
app.use(express_1.default.json()); //para poder trabajar con los json que llegan al server
exports.default = app;
