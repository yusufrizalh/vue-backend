import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Course = db.define(
  "courses",
  {
    course_name: {
      type: DataTypes.STRING,
    },
    course_price: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Course;
