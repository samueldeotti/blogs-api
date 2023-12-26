const CategoryModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  return User;
};

module.exports = CategoryModel;