import { Express } from "express";
import cors from "cors"
import restaurants from "./api/restaurants.route.js"


const app = express()

app.use(cors())

app.use(express.json())
app.use("./api/v1/restaurants")
app.use("*",(res,req) => res.status(404).json({error : "file not found"}))


export default app

