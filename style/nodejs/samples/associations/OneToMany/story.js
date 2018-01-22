module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  });

  Story.associate = (models) => {
    Story.belongsTo(models.User, {
      onDelete: 'cascade',
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
    });
  };

  return Story;
};
