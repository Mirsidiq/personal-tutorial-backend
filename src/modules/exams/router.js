import { Router } from "express";
import {getExamByUserId} from "./controller.js"
import {
  homeworksValidateMiddleware,
  marksValidateMiddleware,
  paramsValidateMiddleware,
} from "../../middleware/validation.middleware.js";
const router = Router();
router.get("/exam/:id",paramsValidateMiddleware,getExamByUserId)
export default router;
