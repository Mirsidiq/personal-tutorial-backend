import { customError } from "../../exceptions/customError.js";
import {
  GET_USERS_HOMEWORKS,
  POST_MARKS,
  POST_HOMEWORKS,
  MARKS_UPDATE,
  HOMEWORK_UPDATE,
} from "./model.js";

const homeworksGetByUserId = async (req, res, next) => {
  try {
    const homeworkByUsers = await GET_USERS_HOMEWORKS(req.params);
    if (homeworkByUsers.length > 0) {
      res.status(200).json({
        count: homeworkByUsers.length,
        data: homeworkByUsers,
      });
    } else {
      res.status(404).json({
        count: homeworkByUsers.length,
        data: homeworkByUsers,
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const homeworkMarks = async (req, res, next) => {
  try {
    const marks = await POST_MARKS(req.body);
    if (marks.length > 0) {
      res.status(200).json({
        count: marks.length,
        message: "marks added",
      });
    } else {
      res.status(404).json({
        count: marks.length,
        message: "marks not added",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};

const postHomeworks = async (req, res, next) => {
  try {
    const homeworks = await POST_HOMEWORKS(req.body);
    if (homeworks.length > 0) {
      res.status(201).json({
        message: "homework added",
      });
    } else {
      res.status(400).json({
        message: "homework not added",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const homeworkMarksUpdate = async (req, res, next) => {
  try {
    const marks = await MARKS_UPDATE(req.body);
    if (marks.length > 0) {
      res.status(200).json({
        updated: marks,
      });
    } else {
      res.status(200).json({
        message: "not updated",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const homeworksUpdate = async (req, res, next) => {
  try {
    const homework = await HOMEWORK_UPDATE({ ...req.body, ...req.params });
    if (homework.length > 0) {
      res.status(200).json({
        updated: homework,
      });
    } else {
      res.status(200).json({
        message: "not updated",
      });
    }
  } catch (error) {
    next(new customError(500, error.message));
  }
};
export {
  homeworksGetByUserId,
  homeworkMarks,
  postHomeworks,
  homeworkMarksUpdate,
  homeworksUpdate,
};
