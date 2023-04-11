//Using the date-fns module installed from npm
const {format} = require("date-fns");
//Using core modules of nodejs
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

//
const logEvents = async (message, logName)=>{
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`; // Stores current date in specified format
  const logItem = `${dateTime}\t${message}\n\n`; //Formatting the log entries by add adding tab space(\t) in each line, when the message ends new message starts in new line(\n)
  console.log(logItem); 
  try {
    // Checking if the directory __dirname/logs exists or not? if doesn't exist we create the directory
    if(!fs.existsSync(path.join(__dirname),"logs")){ 
      await fsPromises.mkdir(path.join(__dirname,"logs"))
    }
    // Then we create a file in above directory named eventLog.txt in which the logItem is appended
    fsPromises.appendFile(path.join(__dirname,"logs",logName),logItem)
  } catch (err) {
    console.error(err);
  }
}

//Exporting the logEvents function from logEvent.js file
module.exports = logEvents;


