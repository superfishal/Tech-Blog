// import all models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
// create associations
User.hasMany(Post, {
  foreginKey: "user_id",
});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});
Post.belongsTo(User, {
  foreginKey: "user_id",
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
