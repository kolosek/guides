module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    avatar_url: DataTypes.STRING,
    full_name: DataTypes.STRING,
    slug: DataTypes.STRING,
    email: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      onDelete: 'cascade',
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
    });
  };

  return Profile;
};
