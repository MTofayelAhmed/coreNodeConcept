const fs = require("fs");
console.log("start read file");

try {
  const data = fs.readFileSync("./data/dairy.txt", "utf-8");
  console.log("file content", data);
} catch (error) {
  console.error("Error reading file:", error.message);
}

console.log("end read file");