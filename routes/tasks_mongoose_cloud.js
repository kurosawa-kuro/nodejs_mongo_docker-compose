var express = require("express");
var router = express.Router();

// Post model
const Post = require("../models/Post");

// Get All Tasks
router.get("/tasks_mongoose_cloud", function(req, res, next) {
  console.log("【tasks_mongoose_cloud】");
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

module.exports = router;
