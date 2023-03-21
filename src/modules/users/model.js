import { fetchAll } from "../../lib/postgres.js";
import { GET, POST, DELETE } from "./query.js";
const GET_USERS = async () => {
  try {
    return await fetchAll(GET);
  } catch (error) {
    throw error;
  }
};
const POST_USER = async ({ username, password, firstname, lastname, role }) => {
  try {
    return await fetchAll(POST, [
      username,
      password,
      firstname,
      lastname,
      role,
    ]);
  } catch (error) {
    throw error;
  }
};
const DELETE_USER = async ({ id }) => {
  try {
    return await fetchAll(DELETE, [id]);
  } catch (error) {
    throw error;
  }
};
export { GET_USERS, POST_USER, DELETE_USER };
