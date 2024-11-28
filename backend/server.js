import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectdb from "./db/mongoConnect.js";
import userRouter from "./routes/webhookRoutes.js";


const app = express();
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

await connectdb()
app.get("/", (req, res) => res.send("API Working"));
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
