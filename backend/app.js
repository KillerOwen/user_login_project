import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import errorHandler from './middlewares/error.middleware.js'

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            process.env.FRONTEND_URL
        ],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", userRoutes);
app.use(errorHandler);

export default app;