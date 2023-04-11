//Importing common core modules
const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;


//Importing logEvents function from "logEvents.js" file locally and "events" core module
const logEvents = require("./logEvents");
const EventEmitter = require("events");
const { log } = require("console");

// Initializing the events module from doc
class Emitter extends EventEmitter{}
const myEmitter = new Emitter();
myEmitter.on("log",(msg, fileName)=>{ logEvents(msg, fileName)});
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) =>{
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf-8" : ""
      );
    const data = contentType==="application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(
      filePath.includes("error404.html") ? 404 : 200,
      {"Content-Type": contentType}
      );
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
      );
  } catch (error) {
    console.log(error);
    myEmitter.emit("log",`${error.name}: ${error.message}`,"errorLog.txt");
    response.statusCode = 500;
    response.end();
  }
}

const server = http.createServer(function(req,res){
  console.log(`The request url is ${req.url} and the request method is ${req.method}`);
  myEmitter.emit("log",`${req.url}\t${req.method}`,"reqLog.txt");
  
  
  //Serving files based on Content-Type
  const extension = path.extname(req.url);
  let contentType;

  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".json" : 
      contentType = "application/json";
      break;
    case ".jpg" : 
      contentType = "image/jpg";
      break;
    case ".png" :
      contentType = "image/png";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".txt" :
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
      break;
  }
 // Creating the file path of requested url
  let filePath = 
    contentType==="text/html" && req.url === "/"
      ? path.join(__dirname, "views","index.html")
        : contentType ==="text/html" && req.url.slice(-1) === "/"
          ? path.join(__dirname,"views",req.url, "index.html")
            : contentType ==="Text/html"
              ? path.join(__dirname,"views", req.url)
                : path.join(__dirname, req.url);

  // makes .html not required in the browser
  if(!extension && req.url.slice(-1)!=="/") filePath += ".html"; 

  const fileExists = fs.existsSync(filePath);

  if(fileExists){
    serveFile(filePath,contentType,res);
  }else{
    // console.log(path.parse(filePath).base);
    // console.log(req.url)
    // console.log(fileExists);
    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301,{"Location" : "new-page.html"});
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, {"Location" : "/"});
        res.end();
        break;
      default: serveFile(path.join(__dirname,"views","error404.html"), "text/html", res);
        break;
    }
    
  }
});

server.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`);
})


