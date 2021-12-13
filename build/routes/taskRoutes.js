"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskControllers_1 = require("../controllers/taskControllers");
const router = (0, express_1.Router)();
router.get('/tasks', taskControllers_1.getTasks);
router.post('/tasks', taskControllers_1.createTask);
exports.default = router;
