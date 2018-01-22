module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasOne(models.Profile, {
      foreignKey: 'user_id',
    });
  };

  return User;
};
