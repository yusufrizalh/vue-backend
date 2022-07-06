import express from "express";
import cors from "cors";
import db from "./config/database.js";
import routerCourse from "./routes/CourseRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

try {
  await db.authenticate();
  console.log("Connection is established!");
} catch (error) {
  console.error("Unable to connect database: ", error);
}

app.use(routerCourse);

app.listen(8001, () => console.log("Server running: http://localhost:8001"));
