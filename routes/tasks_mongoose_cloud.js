var express = require("express");
var router = express.Router();

// Task model
const Task = require("../models/Task");

// Get All Tasks
router.get("/tasks_mongoose_cloud", function(req, res, next) {
  console.log("【tasks_mongoose_cloud】");
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ nopostsfound: "No tasks found" }));
});

module.exports = router;
