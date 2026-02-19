const crypto= require("crypto");
console.log("\n MD5: Hash: ");
const hash1= crypto.createHash("md5").update("Hello World").digest("hex");
console.log(hash1);
// not recommended for security purposes

const sha256Hash = crypto.createHash("sha256").update("Hello World").digest("hex");
console.log("\n SHA256 Hash: ", sha256Hash);


const sha512Hash = crypto.createHash("sha512").update("Hello World").digest("hex");
console.log("\n SHA512 Hash: ", sha512Hash);