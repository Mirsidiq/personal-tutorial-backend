import { DELETE_USER, GET_USERS, POST_USER } from "./model.js";
import { customError } from "../../exceptions/customError.js";
const usersGet = async (req, res, next) => {
  try {
    const users = await GET_USERS();
    res.status(200).json({
      count: users.length,
      users: users,
    });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const usersPost = async (req, res, next) => {
  try {
    const users = await POST_USER(req.body);
    if (users.length > 0) {
      res.status(201).json({
        message: "user added",
      });
    } else {
      res.status(400).json({
        message: "user not added",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const usersDelete = async (req, res, next) => {
  try {
    const users = await DELETE_USER(req.params);
    if (users.length > 0) {
      res.status(201).json({
        message: "user deleted",
      });
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
export { usersGet, usersPost, usersDelete };
