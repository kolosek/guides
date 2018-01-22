module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.ENUM('Admin', 'Author'),
    description: DataTypes.STRING,
  });

  Role.associate = (models) => {
    Role.belongsToMany(models.User, { through: 'UserRole' });
  };

  Role.ADMIN = 10;
  Role.AUTHOR = 20;

  return Role;
};
