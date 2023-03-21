import { Router } from "express";
import { usersDelete, usersGet, usersPost } from "./controller.js";
import {
  userPostValidateMiddleware,
  paramsValidateMiddleware,
} from "../../middleware/validation.middleware.js";

const router = Router();

router.get("/users", usersGet);
router.post("/users/post", userPostValidateMiddleware, usersPost);
router.delete("/users/delete/:id", paramsValidateMiddleware, usersDelete);
export default router;
