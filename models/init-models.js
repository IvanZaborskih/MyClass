import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _lesson_students from  "./lesson_students.js";
import _lesson_teachers from  "./lesson_teachers.js";
import _lessons from  "./lessons.js";
import _students from  "./students.js";
import _teachers from  "./teachers.js";

export default function initModels(sequelize) {
  const lesson_students = _lesson_students.init(sequelize, DataTypes);
  const lesson_teachers = _lesson_teachers.init(sequelize, DataTypes);
  const lessons = _lessons.init(sequelize, DataTypes);
  const students = _students.init(sequelize, DataTypes);
  const teachers = _teachers.init(sequelize, DataTypes);

  lesson_students.belongsTo(lessons, { as: "lesson", foreignKey: "lesson_id"});
  lessons.hasMany(lesson_students, { as: "lesson_students", foreignKey: "lesson_id"});
  lesson_teachers.belongsTo(lessons, { as: "lesson", foreignKey: "lesson_id"});
  lessons.hasMany(lesson_teachers, { as: "lesson_teachers", foreignKey: "lesson_id"});
  lesson_students.belongsTo(students, { as: "student", foreignKey: "student_id"});
  students.hasMany(lesson_students, { as: "lesson_students", foreignKey: "student_id"});
  lesson_teachers.belongsTo(teachers, { as: "teacher", foreignKey: "teacher_id"});
  teachers.hasMany(lesson_teachers, { as: "lesson_teachers", foreignKey: "teacher_id"});

  return {
    lesson_students,
    lesson_teachers,
    lessons,
    students,
    teachers,
  };
}
