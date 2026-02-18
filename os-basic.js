const os = require("os");
console.log("operating system: 0", os.platform());

console.log("operating system: 1", os.type());
console.log("operating system: 2", os.release());
console.log("operating system: 3", os.arch());
console.log("operating system: 4", os.cpus());
const cpus= os.cpus();

console.log("operating system: 5", cpus[0].model);
console.log("operating system: 5", cpus[0].length)
console.log("operating system: 6", cpus[0].speed);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const upTime = os.uptime();

console.log("total memory: ", totalMemory);
console.log("free memory: ", freeMemory);
console.log("up time: ", upTime);