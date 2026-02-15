const fs = require('fs');


console.log("start read file");


 fs.readFile('./data/dairy.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
    } else {
        console.log("file content", data);
    }});
    
    console.log("end read file")