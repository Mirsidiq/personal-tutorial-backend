import express from "express";
import { PORT } from "./config/config.js";
import { customError } from "./exceptions/customError.js";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import allData from "./modules/index.js"
const app=express()
app.use(express.json())
app.use(allData)
app.use("/*",(_,__,next)=>{
    next(new customError(404,"page not found"))
})
app.use(errorHandlerMiddleware)
app.listen(PORT,console.log("hello world"))