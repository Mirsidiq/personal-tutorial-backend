import { customError } from "../exceptions/customError.js";
import {
  paramsValidate,
  userPostValidate,
  marksValidate,
  homeworksValidate,
} from "../validation/user.validate.js";

const userPostValidateMiddleware = (req, _, next) => {
  const { error, __ } = userPostValidate.validate(req.body);
  if (error) {
    next(new customError(400, error.message.replaceAll('"', "")));
  }
  next();
};
const paramsValidateMiddleware = (req, _, next) => {
  const { error, __ } = paramsValidate.validate(req.params);
  if (error) {
    next(new customError(400, error.message.replaceAll('"', "")));
  }
  next();
};
const marksValidateMiddleware = (req, _, next) => {
  const { error, __ } = marksValidate.validate(req.body);
  if (error) {
    next(new customError(400, error.message.replaceAll('"', "")));
  }
  next();
};
const homeworksValidateMiddleware = (req, _, next) => {
  const { error, __ } = homeworksValidate.validate(req.body);
  if (error) {
    next(new customError(400, error.message.replaceAll('"', "")));
  }
  next();
};
export {
  userPostValidateMiddleware,
  paramsValidateMiddleware,
  marksValidateMiddleware,
  homeworksValidateMiddleware,
};
