const fs = require('fs');
// fs.writeFileSync("./output/log.app", "application started\n" )
// console.log("file created successfully")


// const logEntry1 = `${new Date().toISOString()} - User logged in\n`;
// fs.appendFileSync("./output/log.app", logEntry1);
// console.log("log entry appended successfully") 

const logEntry2= `${new Date().toISOString()} -data fetched \n`;
fs.appendFileSync("./output/log.app", logEntry2);