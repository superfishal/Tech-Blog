const { Post } = require("../models");

const postData = [
  {
    title: "How to Code",
    body: "FIRST POST EVER",
    user_id: 3,
  },
  {
    title: "How to Code",
    body: "This is some content of the seeded post",
    user_id: 4,
  },
  {
    title: "Gardening",
    body: "Cereal",
    user_id: 2,
  },
  {
    title: "How to Code",
    body: "Batter",
    user_id: 6,
  },
  {
    title: "How to Code411521",
    body: "Bread",
    user_id: 8,
  },
  {
    title: "How to Cod1e",
    body: "This is some content of the seeded post",
    user_id: 2,
  },
  {
    title: "How to Code42142",
    body: "This is some content of the seeded post",
    user_id: 5,
  },
  {
    title: "How to Code2143",
    body: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
