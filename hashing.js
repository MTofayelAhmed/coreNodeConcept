const crypto= require("crypto");
console.log("\n MD5: Hash: ");
const hash1= crypto.createHash("md5").update("Hello World").digest("hex");
console.log(hash1);
// not recommended for security purposes