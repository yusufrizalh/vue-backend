import express from "express";

import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController.js";

const routerCourse = express.Router();

routerCourse.get("/courses", getCourses);
routerCourse.get("/courses/:id", getCourseById);
routerCourse.post("/courses", createCourse);
routerCourse.put("/courses/:id", updateCourse);
routerCourse.delete("/courses/:id", deleteCourse);

export default routerCourse;
