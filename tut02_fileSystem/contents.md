# Node.js 

## Tutorial 02 : File System - create, read and append files in local directories

## Table of Contents
- [fs methods](fs-methods)
  - [Create Files](create-files)
  - [Read Files](read-files)
  - [Append Files](append-files)
- [fsPromises methods](fsPromises-methods)
  - [Create Files](create-files)
  - [Read Files](read-files)
  - [Append Files](append-files)

## fs methods
To use the fs module:
```javascript
const fs = require("fs");
```
### Create Files
```javascript
fs.writeFile(path.join(__dirname,"files","start.txt"),"utf8","Hey, I create a new file",(err)=>{
  if (err) throw err;
  console.log("File created successfully");
})
```
This method requires three arguments:
1. Path of the file : Here, the file in created in `__dirname/files`
2. Options : It is an object with different properties `(utf8 is used for string usage in the file)`
> The Options argument is optional.
3. Callback function


### Read Files
To read preexisting files.
```javascript
fs.readFile("path","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
  // Shows the data in the file
})
```

### Append Files
If the file exists in the directory, only data is added to files else a new file is created and data is added to it.
```javascript
fs.appendFile("path","Write the data which is to be appended here",(err)=>{
  if (err) throw err;
  console.log("File append complete")
})
```

## fsPromises methods
```javascript
const fsPromises = require("fs").promises;
```
### Read Files, Create files and append files
```javascript
const fileOperations = async()=>{
  // Read Files
  const data = await fsPromises.readFile("path","utf8");
  console.log(data);

  // Create files
  await fsPromises.writeFile("path","utf8",(err)=>{
    if (err) throw err
    console.log("File created");
  })

  // Append files
  await fsPromises.appendFile("path","Write the data which is to be appended here",(err)=>{
    if (err) throw err;
    console.log("File append complete")
  })
  
}
```

