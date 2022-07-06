import Course from "../models/CourseModel.js";

// get all courses
export const getCourses = async (req, res) => {
  try {
    const course = await Course.findAll();
    res.send(course);
  } catch (error) {
    console.log(error);
  }
};

// get course by id
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(course[0]);
  } catch (error) {
    console.log(error);
  }
};

// create new course
export const createCourse = async (req, res) => {
  try {
    await Course.create(req.body);
    res.json({
      message: "Course is created!",
    });
  } catch (error) {
    console.log(error);
  }
};

// update course by id
export const updateCourse = async (req, res) => {
  try {
    await Course.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Course is updated!" });
  } catch (error) {
    console.log(error);
  }
};

// delete course by id
export const deleteCourse = async (req, res) => {
  try {
    await Course.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Course is deleted!" });
  } catch (error) {
    console.log(error);
  }
};
