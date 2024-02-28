import { Router } from "express";
import { tryLoggers } from "../controllers/logger_controller.js";

const router=Router();

router.get('/', tryLoggers);

export default router