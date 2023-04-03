# Node.js 

## Table of contents
- [Node.js](#nodejs)
  - [Table of contents](#table-of-contents)
  - [Introduction to Node](#introduction-to-node)
  - [\_\_dirname and \_\_filename](#__dirname-and-__filename)
  - [os module](#os-module)
  - [path module](#path-module)
  - [Local import and export](#local-import-and-export)

## Introduction to Node
Node.js is a javascript runtime environment

1. Node runs on a server not in a browser (Backend not frontend)
2. The console is the terminal window
3. Global object instead of window object
4. Has common core modules
5. CommonJS modules instead of ES6 modules
6. Missing some JS APIs like `fetch`
   
## __dirname and __filename
- `__dirname` gives the entire path of the local directory in which the developer is working.

- `__filename` gives the entire path of the file which is executed from the local directory.

## os module
- Importing the `os` module : 

  `const os = require("os);`

- The basic methods of the os modules are : 
  - `os.type()` : Gives the type of machine's operating system (windows or mac).
  - `os.version()` : Gives the version of developer's machine's operating system.
  - `os.homedir()` : Gives home directory of the developer's local machine .

## path module
- Importing the `path` module

  `const path = require("path)`
- The basic methods of path module are : 
  - `path.dirname(__filename)` : Gives the path of the main directory.
  - `path.basename(__filename)` : Gives the name of the file in which the above code is executed.
  - `path.extname(__filename)` : Gives the extension of the file in which the above code is executed.
  - `path.parse(__filename)` : Gives the entire data listed above in the form of an javascript object.

## Local import and export
Please go through the program files `index.js` and `math.js ` to understand the topic.