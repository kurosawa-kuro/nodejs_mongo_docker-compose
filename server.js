var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const listEndpoints = require("express-list-endpoints");

var index = require("./routes/index");
var tasks = require("./routes/tasks");
var tasks_mongojs_cloud = require("./routes/tasks_mongojs_cloud");
var tasks_mongojs_docker = require("./routes/tasks_mongojs_docker");
var tasks_mongojs_local = require("./routes/tasks_mongojs_local");
var tasks_mongoose_cloud = require("./routes/tasks_mongoose_cloud");
var tasks_mongoose_docker = require("./routes/tasks_mongoose_docker");
var tasks_mongoose_local = require("./routes/tasks_mongoose_local");

var port = 3000;

var app = express();

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", tasks);
app.use("/api", tasks_mongojs_cloud);
app.use("/api", tasks_mongojs_docker);
app.use("/api", tasks_mongojs_local);
app.use("/api", tasks_mongoose_cloud);
app.use("/api", tasks_mongoose_docker);
app.use("/api", tasks_mongoose_local);

app.listen(port, function() {
  console.log("Server started on port " + port);

  console.log("【listEndpoints】");
  console.log(listEndpoints(app));
  console.log("【listEndpoints】");
});
