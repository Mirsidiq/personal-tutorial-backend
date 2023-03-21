import joi from "joi";

export const userPostValidate = joi
  .object()
  .keys({
    username: joi.string().max(32).required(),
    password: joi.string().min(6).required(),
    firstname: joi.string().max(32).required(),
    lastname: joi.string().max(32).required(),
    role: joi.string().max(12).required(),
  })
  .required();
export const paramsValidate = joi
  .object()
  .keys({
    id: joi.number().integer().positive().required(),
  })
  .required();
export const marksValidate = joi
  .object()
  .keys({
    done: joi.number().integer().positive().required(),
    notDone: joi.number().integer().positive().required(),
    userId: joi.number().integer().positive().required(),
    homeworkId: joi.number().integer().positive().required(),
  })
  .required();
export const homeworksValidate = joi
  .object()
  .keys({
    homeworkCount: joi.number().integer().positive().required(),
    homeworkDate: joi.date().required(),
  })
  .required();
