import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class lesson_teachers extends Model {
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
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'teachers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'lesson_teachers',
    schema: 'public',
    timestamps: false
  });
  }
}
