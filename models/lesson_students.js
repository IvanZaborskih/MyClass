import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class lesson_students extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lessons',
        key: 'id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    visit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'lesson_students',
    schema: 'public',
    timestamps: false
  });
  }
}
