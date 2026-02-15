const fs = require('fs');
const content1= " this is the first line of the file.\n nodejs is a great platform for building server-side applications.\n";
const contentasync = " this is the second line of the file.\n nodejs has a rich ecosystem of libraries and frameworks.\n";



fs.writeFileSync("./output/writesync.txt",  content1, "utf-8");
console.log("File written successfully");


fs.writeFile("./output/writeasync.txt", contentasync, "utf-8", (err) => {

    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully");
    }})

    