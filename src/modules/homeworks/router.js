import { Router } from "express";
import {
  homeworksGetByUserId,
  homeworkMarks,
  postHomeworks,
  homeworkMarksUpdate,
  homeworksUpdate,
} from "./controller.js";
import {
  homeworksValidateMiddleware,
  marksValidateMiddleware,
  paramsValidateMiddleware,
} from "../../middleware/validation.middleware.js";
const router = Router();
router.get("/homeworks/:id", paramsValidateMiddleware, homeworksGetByUserId);
router.post("/homeworks/marks", marksValidateMiddleware, homeworkMarks);
router.post("/homeworks/post", homeworksValidateMiddleware, postHomeworks);
router.put("/homeworks/marks/put", homeworkMarksUpdate);
router.put("/homeworks/put/:id", paramsValidateMiddleware, homeworksUpdate);
export default router;
