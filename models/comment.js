const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postAuthor: {
      type: DataTypes.STRING,
      // interger?
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "post",
          key: "id"
        } // don't need
      },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }, // don't need
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "comment",
  }
);

module.exports = Comment;