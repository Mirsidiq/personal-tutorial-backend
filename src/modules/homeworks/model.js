import { fetchAll } from "../../lib/postgres.js";
import {
  GET_HOMEWORK_BY_USER_ID,
  POST_USER_MARKS,
  GET_HOMEWORKS,
  POST_HOMEWORK,
  GET_MARKS_BY_HOMEWORK_AND_USER_ID,
  UPDATE_MARKS,
  GET_HOMEWORKS_BY_ID,
  UPDATE_HOMEWORKS,
} from "./query.js";

const GET_USERS_HOMEWORKS = async ({ id }) => {
  try {
    return await fetchAll(GET_HOMEWORK_BY_USER_ID, [id]);
  } catch (error) {
    throw error;
  }
};
const POST_MARKS = async ({ done, notDone, userId, homeworkId }) => {
  try {
    const allData = await fetchAll(GET_HOMEWORKS);
    if (
      allData.at(-1)?.homework_id == homeworkId &&
      done + notDone == allData.at(-1)?.homework_count
    ) {
      return await fetchAll(POST_USER_MARKS, [
        done,
        notDone,
        userId,
        homeworkId,
      ]);
    }
    return [];
  } catch (error) {
    throw error;
  }
};
const POST_HOMEWORKS = async ({ homeworkCount, homeworkDate }) => {
  try {
    return await fetchAll(POST_HOMEWORK, [
      homeworkCount,
      new Date().toLocaleString(),
    ]);
  } catch (error) {
    throw error;
  }
};
const MARKS_UPDATE = async ({ done, notDone, userId, homeworkId }) => {
  try {
    const marks = await fetchAll(GET_MARKS_BY_HOMEWORK_AND_USER_ID, [
      userId,
      homeworkId,
    ]);
    return await fetchAll(UPDATE_MARKS, [
      userId,
      homeworkId,
      done ?? marks[0].done,
      notDone ?? marks[0].not_done,
    ]);
  } catch (error) {
    throw error;
  }
};
const HOMEWORK_UPDATE=async({id,count})=>{
    try {
        const foundedHomework = await fetchAll(GET_HOMEWORKS_BY_ID,[id]);
        if(foundedHomework.length>0){
            return await fetchAll(UPDATE_HOMEWORKS,[id,count ?? foundedHomework[0].homework_count])
        }
        else{
            throw new Error("homework not found")
        }
    } catch (error) {
        throw error
    }
}

export { GET_USERS_HOMEWORKS, POST_MARKS, POST_HOMEWORKS, MARKS_UPDATE,HOMEWORK_UPDATE };
