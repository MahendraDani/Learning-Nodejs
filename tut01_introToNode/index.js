// ---------------- NODE.js------------
// Introduction to Node
// Date : 31.03.2023

// The differnce between __dirname and __filename
console.log(__dirname);
console.log(__filename);

// Importing the os module
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Importing the path module
const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// Importing and exporting local files
// Method 01

const math = require("./math");
console.log(math.add(5, 3));
console.log(math.subtract(5, 3));

// Method 02

const { add, subtract, multiply, divide } = require("./math"); // Destructing the module

console.log(add(5, 3));
console.log(subtract(5, 3));
