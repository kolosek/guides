module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  });

  User.associate = (models) => {
    // Define associations here
  };

  return User;
};
