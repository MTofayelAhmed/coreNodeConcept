const fs = require('fs');

fs.writeFileSync("./output/temp.txt", "This file will be deleted soon.");
console.log("file created successfully");


// if (fs.existsSync("./output/temp.txt")) {
//     fs.unlinkSync("./output/temp.txt");
//     console.log("file deleted successfully");
// } else {
//     console.log("file does not exist");
// }

try {
    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted successfully");
} catch (error) {
    console.log("Error deleting file:", error.message);
}