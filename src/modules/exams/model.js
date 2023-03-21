import {fetchAll} from "../../lib/postgres.js"
import {GET_EXAM_BY_USER_ID} from "./query.js"
const GET_EXAM_BY_USER=async({id})=>{
    try {
        return await fetchAll(GET_EXAM_BY_USER_ID,[id])
    } catch (error) {
        throw error
    }
}
export{
    GET_EXAM_BY_USER
}