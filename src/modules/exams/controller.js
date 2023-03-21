import { customError } from "../../exceptions/customError.js"
import{GET_EXAM_BY_USER} from "./model.js"
const getExamByUserId=async(req,res,next)=>{
    try {
        const exam=await GET_EXAM_BY_USER(req.params)
        if(exam.length>0){
            res.status(200).json({
                data:exam
            })
        }
         else{
            res.status(400).json({
                message:"exam not passed"
            })
        }
    } catch (error) {
        next(new customError(500,error.message))
    }
}
export{
    getExamByUserId
}