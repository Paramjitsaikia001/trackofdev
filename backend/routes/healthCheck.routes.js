import healthCheck from "../controllers/healthcheck.controller.js";
import { Router } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get("/",healthCheck)

export {healthCheckRouter};