// Working with async and await in node
const fsPromises = require("fs").promises;
const { log } = require("console");
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  try {
    await fsPromises.appendFile(
      path.join(__dirname, "asyncFiles", "newStarter.txt"),
      "Hi there! Nice to meet you!"
    );
    console.log("File apppended");
  } catch (err) {
    console.log(err);
  }
};
fileOps();
