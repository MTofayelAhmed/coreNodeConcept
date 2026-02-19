const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt (text) {
  const cipher = crypto.createCipher(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return{
    encrypted: encrypted,
    iv: iv.toString("hex")
  };
}

function decrypt (encrypted, iv) {
  const decipher = crypto.createDecipher(algorithm, key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const sensitiveData = "This is some sensitive data.";
const encryptedData = encrypt(sensitiveData);
console.log("Encrypted data: ", encryptedData);