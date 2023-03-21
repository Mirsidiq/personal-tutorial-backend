import dotenv from "dotenv"
dotenv.config()
const PORT=process.env.PORT || 8080
const pgConfig={
    host:process.env.PG_HOST,
    password:process.env.PG_PASSWORD,
    user:process.env.PG_USERNAME,
    database:process.env.PG_DATABASE
}
export{
    PORT,
    pgConfig
}