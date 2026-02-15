const fs = require('fs');
const content1= " this is the first line of the file.\n nodejs is a great platform for building server-side applications.\n";

fs.writeFileSync("./output/writesync.txt",  content1, "utf-8");
console.log("File written successfully");
