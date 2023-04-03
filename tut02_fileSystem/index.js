const fs = require("fs");
const path = require("path");

// Reading a file : Reads the data from the file
fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Update/Create a file : If the file does not exist this function creates the new file and adds the content to that file
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("File append complete");
  }
);

// Make a directory
fs.mkdir(path.join(__dirname, "asyncFiles"), (err) => {
  if (err) throw err;
  console.log("Directory created");
});

// NOTE : Node.js is asynchronous hence it finishes all task simultaneously
